import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("keeps the existing section navigation", () => {
  render(<Header />);

  expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
  expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "#work");
  expect(screen.getByRole("link", { name: "Skills" })).toHaveAttribute("href", "#skills");
});
