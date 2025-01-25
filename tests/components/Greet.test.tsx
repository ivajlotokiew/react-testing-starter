import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import '@testing-library/jest-dom/vitest'

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Ivo" />);

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello Ivo');
  });

  it("should render login button when name is not provided", () => {
    render(<Greet />);

    const btn = screen.getByRole('button')

    const notInDocument = expect(btn).toBeInTheDocument() ? false : true;
    expect(notInDocument).toBe(false);
    expect(btn).toHaveTextContent('Login');
  });
});
