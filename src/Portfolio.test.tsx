import { render, screen } from "@testing-library/react";
import { MainPart } from "./MainPart";
import { TechnologiesPart } from "./TechnologiesPart";

test("serves the current CV through a local download link", () => {
  render(<MainPart />);

  expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
    "href",
    "/business-card/downloads/Hnatyuk_N_Fullstack_Dev_CV_updated.pdf",
  );
  expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
    "download",
    "Hnatyuk_N_Fullstack_Dev_CV_updated.pdf",
  );
});

test("renders the CV profile and experience", () => {
  render(
    <>
      <MainPart />
      <TechnologiesPart />
    </>,
  );

  expect(
    screen.getByText(
      /Full Stack Developer with 3 years of commercial experience/,
    ),
  ).toBeInTheDocument();
  expect(screen.getByText(/Lviv, Ukraine.*remotely/)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Breeze" })).toBeInTheDocument();
  expect(screen.getByText(/Mar 2024.*Present/)).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "WEB DEV & SEO" }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Sep 2023.*Mar 2024/)).toBeInTheDocument();
});

test("renders current skills, English level and education from the CV", () => {
  render(<TechnologiesPart />);

  expect(
    screen.getByText(/TypeScript, JavaScript.*HTML5, CSS3, Sass/),
  ).toBeInTheDocument();
  expect(screen.getByText(/React, Redux, Next.js/)).toBeInTheDocument();
  expect(
    screen.getByText(/Node.js, Express.*REST APIs.*WebSockets/),
  ).toBeInTheDocument();
  expect(screen.getByText(/Codex and Claude/)).toBeInTheDocument();
  expect(
    screen.getByText(/English: Upper-Intermediate \(B2\)/),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Lviv Polytechnic National University/),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/International Economics.*2017.*2021/),
  ).toBeInTheDocument();
});
