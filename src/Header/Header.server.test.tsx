/** @jest-environment node */
import { renderToString } from "react-dom/server";
import { Header } from "./Header";

test("renders without browser globals", () => {
  expect(() => renderToString(<Header />)).not.toThrow();
});
