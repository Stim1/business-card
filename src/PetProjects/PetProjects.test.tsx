import { PetProjects } from "./PetProjects";

const { renderToStaticMarkup } = jest.requireActual<
  typeof import("react-dom/server")
>("react-dom/server.node");

test("every project slide links to its project", () => {
  const container = document.createElement("div");
  container.innerHTML = renderToStaticMarkup(<PetProjects />);
  const slides = container.querySelectorAll(".slide");

  expect(slides.length).toBeGreaterThan(0);
  for (const slide of slides) {
    expect(slide.querySelector("a[href^='https://']")).not.toBeNull();
    expect(slide.querySelector(".slide-arrow")?.closest("a")).not.toBeNull();
  }
});
