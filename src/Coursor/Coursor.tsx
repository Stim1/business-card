"use client";

import { useEffect, useRef } from "react";
import "./Coursor.scss";

const clickables =
  'a, input[type="text"], input[type="email"], input[type="number"], input[type="submit"], input[type="image"], label[for], select, textarea, button, .link';

export const Coursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const enabled = () => finePointer.matches && !reducedMotion.matches;
    const hide = () => {
      cursor.style.opacity = "0";
      cursor.classList.remove("cursorActive");
      root.classList.remove("customCursorEnabled");
    };
    const updateActive = (event: MouseEvent) => {
      if (!enabled()) return;
      cursor.classList.toggle(
        "cursorActive",
        event.target instanceof Element && !!event.target.closest(clickables),
      );
    };
    const move = (event: MouseEvent) => {
      if (!enabled()) return;
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.style.opacity = "1";
      root.classList.add("customCursorEnabled");
      updateActive(event);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", updateActive);
    root.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    finePointer.addEventListener("change", hide);
    reducedMotion.addEventListener("change", hide);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", updateActive);
      root.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      finePointer.removeEventListener("change", hide);
      reducedMotion.removeEventListener("change", hide);
      hide();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor"
      aria-hidden="true"
      style={{ opacity: 0 }}
    >
      <div className="cursorInner" />
      <div className="cursorOuter" />
    </div>
  );
};
