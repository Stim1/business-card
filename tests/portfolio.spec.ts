import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";

const cvFilename = "Hnatyuk_N_Fullstack_Dev_CV_updated.pdf";
const cvChecksum =
  "0e4f93de36421027108b3f8ffb2061831d3c68821a76c1165152161edd0ddcc0";

test("profile is readable without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Full Stack Developer with 3 years",
  );
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Lviv, Ukraine",
  );
  await expect(
    page.getByRole("heading", { name: "Breeze", exact: true }),
  ).toBeVisible();
  await expect(page.getByText(/Mar 2024.*Present/)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "WEB DEV & SEO", exact: true }),
  ).toBeVisible();
  await expect(page.getByText(/Sep 2023.*Mar 2024/)).toBeVisible();
  await expect(page.getByText(/Upper-Intermediate \(B2\)/)).toBeVisible();
  for (const id of ["about", "work", "skills"])
    await expect(page.locator(`#${id}`)).toBeAttached();
  await context.close();
});

test("downloads the exact updated PDF under the GitHub Pages path", async ({
  page,
  request,
}) => {
  await page.goto("./");
  const link = page.getByRole("link", { name: "Download CV" });
  await expect(link).toHaveAttribute(
    "href",
    `/business-card/downloads/${cvFilename}`,
  );
  const response = await request.get(`/business-card/downloads/${cvFilename}`);
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect(
    createHash("sha256")
      .update(await response.body())
      .digest("hex"),
  ).toBe(cvChecksum);
  const downloadPromise = page.waitForEvent("download");
  await link.click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe(cvFilename);
  expect(
    createHash("sha256")
      .update(await readFile((await download.path())!))
      .digest("hex"),
  ).toBe(cvChecksum);
});

test("contact menu works with keyboard on desktop and mobile", async ({
  page,
}) => {
  await page.goto("./");
  const button = page.getByRole("button", {
    name: "Get in touch",
    exact: true,
  });
  const menu = page.locator("#contact-links");
  await expect(button).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeHidden();
  await page.getByRole("link", { name: "Skills", exact: true }).focus();
  await page.keyboard.press("Tab");
  await expect(button).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Download CV" })).toBeFocused();
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(button).toHaveAttribute("aria-expanded", "true");
  await expect(menu).toBeVisible();
  await expect(
    menu.getByRole("link", { name: "Email", exact: true }),
  ).toHaveAttribute("href", "mailto:hnatyuk.nazariy@gmail.com");
  await expect(
    menu.getByRole("link", { name: "LinkedIn", exact: true }),
  ).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/nazar-hnatyuk-48699917b/",
  );
  await expect(
    menu.getByRole("link", { name: "Telegram", exact: true }),
  ).toHaveAttribute("href", "https://t.me/Nazar_Hnatyuk");
  await page.keyboard.press("Tab");
  await expect(
    menu.getByRole("link", { name: "Email", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(button).toBeFocused();
  await expect(menu).toBeHidden();
  await page.keyboard.press("Enter");
  await page.getByRole("link", { name: "Skills", exact: true }).focus();
  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();
  await expect(button).toBeFocused();
  await page.getByRole("link", { name: "Skills", exact: true }).focus();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("link", { name: "Skills", exact: true }),
  ).toBeFocused();
});

test("portfolio assets and layout work on desktop and mobile", async ({
  page,
}, testInfo) => {
  const failures: string[] = [];
  page.on("pageerror", (error) => failures.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") failures.push(message.text());
  });
  page.on("response", (response) => {
    if (response.status() >= 400)
      failures.push(`${response.status()} ${response.url()}`);
  });
  await page.goto("./");
  await page.addStyleTag({
    content:
      "*, *::before, *::after { animation: none !important; transition: none !important; } .ticker-wrapper__first-half { transform: none !important; }",
  });
  await page.evaluate(() => document.fonts.ready);
  await expect
    .poll(() =>
      page.evaluate(() => document.fonts.check('30px "ClashDisplay-Medium"')),
    )
    .toBe(true);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(page.viewportSize()!.width);
  await expect(page.locator(".ticker-text").first()).toHaveCSS(
    "color",
    "rgb(255, 255, 255)",
  );
  const ticker = await page.locator(".technologiesTicker").boundingBox();
  const logo = await page.locator(".ticker-image").first().boundingBox();
  expect(ticker).not.toBeNull();
  expect(logo).not.toBeNull();
  expect(logo!.y + logo!.height).toBeLessThanOrEqual(
    ticker!.y + ticker!.height,
  );
  const images = page.locator("img");
  expect(await images.count()).toBeGreaterThan(0);
  await images.evaluateAll(async (elements) => {
    await Promise.all(
      elements.map(async (element) => {
        const image = element as HTMLImageElement;
        image.loading = "eager";
        await image.decode();
      }),
    );
  });
  for (const image of await images.all()) {
    await expect
      .poll(() =>
        image.evaluate(
          (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
        ),
      )
      .toBe(true);
    expect(
      new URL((await image.getAttribute("src"))!, page.url()).pathname,
    ).toMatch(/^\/business-card\//);
  }
  await page.getByRole("button", { name: "Get in touch", exact: true }).click();
  await expect(page.locator("#contact-links")).toBeInViewport({ ratio: 1 });
  await page.screenshot({
    path: testInfo.outputPath("portfolio.png"),
    fullPage: true,
    animations: "disabled",
  });
  expect(failures).toEqual([]);
});

test("cursor follows fine pointers and respects reduced motion", async ({
  page,
  isMobile,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("./");
  const cursor = page.locator(".cursor");
  await page.mouse.move(120, 80);
  if (isMobile) {
    await expect(cursor).toBeHidden();
    await expect(page.locator("html")).not.toHaveClass(/customCursorEnabled/);
    return;
  }
  await expect(cursor).toHaveCSS("left", "120px");
  await expect(cursor).toHaveCSS("top", "80px");
  await expect(page.locator("html")).toHaveClass(/customCursorEnabled/);
  await page.getByRole("button", { name: "Get in touch", exact: true }).hover();
  await expect(cursor).toHaveClass(/cursorActive/);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(cursor).toBeHidden();
  await expect(page.locator("html")).not.toHaveClass(/customCursorEnabled/);
});

test("all displayed project cards have working destinations", async ({
  page,
}) => {
  await page.goto("./");
  const slides = page.locator("#work .slide");
  expect(await slides.count()).toBeGreaterThan(1);
  for (const slide of await slides.all()) {
    const link = slide.locator("a");
    await expect(link).toHaveCount(1);
    expect(await link.getAttribute("href")).toMatch(
      /^https:\/\/(fe-aug23-team3\.github\.io\/product_catalog\/#\/|stim1\.github\.io\/layout_landing-page\/)$/,
    );
    await expect(link.locator(".slide-arrow")).toHaveCount(1);
  }
});

test("project carousel uses the viewport on initial load and breakpoint changes", async ({
  page,
}) => {
  await page.goto("./");
  const activeSlides = page.locator("#work .slick-slide.slick-active");
  await expect(activeSlides).toHaveCount(
    page.viewportSize()!.width < 1025 ? 1 : 2,
  );
  await page.setViewportSize({ width: 1024, height: 1000 });
  await expect(activeSlides).toHaveCount(1);
  await page.setViewportSize({ width: 1025, height: 1000 });
  await expect(activeSlides).toHaveCount(2);
});
