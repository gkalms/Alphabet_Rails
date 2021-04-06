import React, { useEffect, useState } from 'react';


const EditWords = (props) => {
  const [formState, setFormState] = useState({
    alphabet: "",
    words: ""
  });

  useEffect(() => {
    setFormState(props.word);
  }, [props.word]);

  const handleChange = (e) => {
    const newState = {...formState }
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(formState);
  };

    return (
      <div>
        <h2>Update word</h2>
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
            Update
      </button>
        </form>
      </div>
    );
  };

  export { EditWords };