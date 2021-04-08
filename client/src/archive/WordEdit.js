import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

export const WordEdit = () => {
  const [edit, setEdit] = useState({
    alphabet: "",
    words: "",
  });

  const history = useHistory();
  const params = useParams();

  console.log("params:", params);

  const handleChange = (e) => {
    const newState = { ...edit };
    newState[e.target.name] = e.target.value;
    setEdit(newState);
  };

  useEffect(() => {
    fetch(`/words/${params.id}`)
      .then((response) => response.json())
      .then((data) => setEdit(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/words/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    }).then((response) => {
      console.log("PUT response:", response);
      history.replace("/")
    });
  };

  return (
    <div>
      <h1>Edit words</h1>
      <form onSubmit={handleSubmit}>
          <label>
              Alphabet:
              <input name="alphabet" value={edit.alphabet} onChange={handleChange} />
              </label>
              <label>
              Word:
              <input name="words" value={edit.words} onChange={handleChange} />
          </label>
          <button type="submit">Update</button>
      </form>
    </div>
  );
};
