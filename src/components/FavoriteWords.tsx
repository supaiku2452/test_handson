import React, { useState } from "react";

const FavoriteWords = () => {
  const [words, setWords] = useState("");

  return (
    <div>
      favorite words.
      <input
        data-testid="favorite-words"
        type="text"
        value={words}
        onChange={(e) => setWords(e.target.value)}
      />
    </div>
  );
};

export { FavoriteWords };
