import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { FavoriteWords } from "../FavoriteWords";
describe("Favorite Words Test", () => {
  test("input words", () => {
    const { getByTestId, debug } = render(<FavoriteWords />);
    const input = getByTestId(/favorite-words/i);
    fireEvent.change(input, {
      target: {
        value: "sample",
      },
    });
    debug();
  });
});
