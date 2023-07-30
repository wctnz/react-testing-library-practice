import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./useReducer";

describe("useReducer", () => {
    it("hook testing", () => {
      render(<Counter />);
      expect(screen.getByRole("heading")).toHaveTextContent("0");
      userEvent.click(screen.getByTestId("plus-one"));
      expect(screen.getByRole("heading")).toHaveTextContent("1");
      fireEvent.click(screen.getByTestId("minus-one"));
      expect(screen.getByRole("heading")).toHaveTextContent("0");
    });
  });