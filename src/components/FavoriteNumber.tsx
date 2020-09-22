import React, { useState } from "react";
import { useFavoriteNumber } from "./useFavoriteNumber";

const FavoriteNumber = () => {
  const { number, setNumber } = useFavoriteNumber();

  return (
    <div>
      favorite number.
      <input
        data-testid="favorite-number"
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
    </div>
  );
};

export { FavoriteNumber };
