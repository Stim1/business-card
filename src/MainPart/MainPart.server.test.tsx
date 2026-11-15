/** @jest-environment node */
import { renderToStaticMarkup } from "react-dom/server";
import { MainPart } from "./MainPart";

test("server-renders meaningful hero content before JavaScript runs", () => {
  const html = renderToStaticMarkup(<MainPart />);

  expect(html).toContain(
    "Full Stack Developer with 3 years of commercial experience",
  );
  expect(html).toContain("Lviv, Ukraine");
});
