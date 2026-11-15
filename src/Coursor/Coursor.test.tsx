import { fireEvent, render } from "@testing-library/react";
import { Coursor } from "./Coursor";

function setPointerPreferences(finePointer = true, reducedMotion = false) {
  // JSDOM does not implement matchMedia; mouse events and DOM remain real.
  window.matchMedia = jest.fn((query: string) => ({
    matches: query.includes("prefers-reduced-motion")
      ? reducedMotion
      : finePointer,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
}

test("follows the mouse, expands over interactive elements, and hides on exit", () => {
  setPointerPreferences();
  const { container, unmount } = render(
    <>
      <Coursor />
      <a href="#about">
        <span>About</span>
      </a>
      <button>Contact</button>
    </>,
  );
  const cursor = container.querySelector(".cursor");
  const linkText = container.querySelector("a span")!;
  const button = container.querySelector("button")!;

  fireEvent.mouseMove(linkText, { clientX: 120, clientY: 80 });
  expect(cursor).toHaveStyle({ left: "120px", top: "80px", opacity: "1" });
  expect(cursor).toHaveClass("cursorActive");
  expect(document.documentElement).toHaveClass("customCursorEnabled");

  fireEvent.mouseMove(document.body, { clientX: 200, clientY: 100 });
  expect(cursor).not.toHaveClass("cursorActive");
  fireEvent.mouseOver(button);
  expect(cursor).toHaveClass("cursorActive");
  fireEvent.mouseLeave(document.documentElement);
  expect(cursor).toHaveStyle({ opacity: "0" });
  expect(document.documentElement).not.toHaveClass("customCursorEnabled");

  fireEvent.mouseMove(button, { clientX: 100, clientY: 50 });
  unmount();
  expect(document.documentElement).not.toHaveClass("customCursorEnabled");
  fireEvent.mouseMove(document.body, { clientX: 300, clientY: 100 });
  expect(document.documentElement).not.toHaveClass("customCursorEnabled");
});

test.each([
  [false, false],
  [true, true],
])(
  "keeps the native cursor for fine pointer %s and reduced motion %s",
  (finePointer, reducedMotion) => {
    setPointerPreferences(finePointer, reducedMotion);
    const { container } = render(<Coursor />);
    fireEvent.mouseMove(document.body, { clientX: 120, clientY: 80 });
    expect(container.querySelector(".cursor")).toHaveStyle({ opacity: "0" });
    expect(document.documentElement).not.toHaveClass("customCursorEnabled");
  },
);
