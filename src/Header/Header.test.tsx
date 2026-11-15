import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

test("keeps the existing section navigation", () => {
  render(<Header />);

  expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
    "href",
    "#about",
  );
  expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute(
    "href",
    "#work",
  );
  expect(screen.getByRole("link", { name: "Skills" })).toHaveAttribute(
    "href",
    "#skills",
  );
});

test("hides contacts until opened and exposes disclosure state", async () => {
  render(<Header />);
  const toggle = screen.getByRole("button", { name: /get in touch/i });

  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(screen.queryByRole("link", { name: "Email" })).not.toBeInTheDocument();
  toggle.focus();
  await userEvent.tab();
  expect(screen.getByText("Email")).not.toHaveFocus();

  await userEvent.click(toggle);

  expect(toggle).toHaveAttribute("aria-expanded", "true");
  expect(
    document.getElementById(toggle.getAttribute("aria-controls")!),
  ).toBeVisible();
  expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
    "href",
    "mailto:hnatyuk.nazariy@gmail.com",
  );
  expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/nazar-hnatyuk-48699917b/",
  );
  expect(screen.getByRole("link", { name: "Telegram" })).toHaveAttribute(
    "href",
    "https://t.me/Nazar_Hnatyuk",
  );
  await userEvent.tab();
  expect(screen.getByRole("link", { name: "Email" })).toHaveFocus();

  await userEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(screen.queryByRole("link", { name: "Email" })).not.toBeInTheDocument();
});

test("closes on Escape and restores toggle focus", async () => {
  render(<Header />);
  const toggle = screen.getByRole("button", { name: /get in touch/i });
  await userEvent.click(toggle);
  await userEvent.tab();
  expect(screen.getByRole("link", { name: "Email" })).toHaveFocus();

  await userEvent.keyboard("{Escape}");

  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveFocus();
  expect(screen.queryByRole("link", { name: "Email" })).not.toBeInTheDocument();
  await userEvent.tab();
  expect(screen.getByText("Email")).not.toHaveFocus();
});

test("does not move focus on Escape while closed", async () => {
  render(<Header />);
  const about = screen.getByRole("link", { name: "About" });
  about.focus();

  await userEvent.keyboard("{Escape}");

  expect(about).toHaveFocus();
});

test("keeps an accessible name on narrow screens", () => {
  const previousWidth = window.innerWidth;
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: 375,
  });
  try {
    render(<Header />);
    expect(
      screen.getByRole("button", { name: /get in touch/i }),
    ).toHaveAttribute("aria-expanded", "false");
  } finally {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: previousWidth,
    });
  }
});

test("closes on Escape when focus has moved outside the contact menu", async () => {
  render(<Header />);
  const toggle = screen.getByRole("button", { name: /get in touch/i });
  await userEvent.click(toggle);
  screen.getByRole("link", { name: "Skills" }).focus();

  await userEvent.keyboard("{Escape}");

  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(toggle).toHaveFocus();
  expect(screen.queryByRole("link", { name: "Email" })).not.toBeInTheDocument();
});
