import { useEffect, useState } from "react";

export const AddWords = () => {
  const [create, setCreate] = useState({
    alphabet: "",
    words: "",
  });

  const handleChange = (e) => {
    const newState = { ...create };
    newState[e.target.name] = e.target.value;
    setCreate(newState);
  };

  useEffect(() => {
    fetch("/words")
      .then((response) => response.json())
      .then((create) => setCreate(create));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(create),
    });
  };

  return (
    <div>
      <h1>Add word</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Alphabet
          <input
            name="alphabet"
            value={create.alphabet}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Word
          <input
            name="words"
            value={create.words}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
