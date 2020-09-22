import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { FavoriteNumber } from "../FavoriteNumber";
describe("Favorite Number Test", () => {
  test("input number", () => {
    const { getByTestId, debug } = render(<FavoriteNumber />);
    const input = getByTestId(/favorite-number/i) as HTMLInputElement;
    fireEvent.change(input, {
      target: {
        value: 11,
      },
    });
    debug();
    expect(input.value).toBe("11");
  });
});
