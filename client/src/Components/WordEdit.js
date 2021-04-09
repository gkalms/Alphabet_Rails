import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";


export const WordEdit = () => {
  const [edit, setEdit] = useState({
    alphabet: "",
    words: "",
  });

  const history = useHistory();
  const params = useParams();

  // Code to handle the changes and commit to state
  const handleChange = (e) => {
    const newState = { ...edit };
    newState[e.target.name] = e.target.value;
    setEdit(newState);
  };

  // Code to get the selected word and associated id
  useEffect(() => {
    fetch(`/words/${params.id}`)
      .then((response) => response.json())
      .then((data) => setEdit(data));
  }, []);

  // Code to submit the changes to database via patch API
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/words/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    }).then((response) => {
      // route back to Homepage
      history.replace("/");
    });
  };

  return (
    <div>
      <h1>Edit words</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Alphabet:
          <input
            name="alphabet"
            value={edit.alphabet}
            onChange={handleChange}
          />
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
