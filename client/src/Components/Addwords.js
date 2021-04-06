import React, { useState } from 'react';

export const AddWords = (props) => {

  const [formState, setFormState] = useState({
    alphabet: "",
    words: ""
  })

  const handleChange = (e) => {

    const newState = { ...formState }
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(formState.alphabet, formState.words);
  }

  return (
    <div>
      <h2>Add word</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Letter
        <input name="alphabet" value={formState.alphabet} onChange={handleChange}></input>
        </label>
        <label>
          Word
        <input name="words" value={formState.words} onChange={handleChange}></input>
        </label>
        <button type="submit">
          Submit
      </button>
      </form>
    </div>
  );
};