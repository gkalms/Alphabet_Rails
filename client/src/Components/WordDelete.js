import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";


export const WordDelete = () => {
  const [remove, setDelete] = useState({
    alphabet: "",
    words: "",
  });

  const history = useHistory();
  const params = useParams();

  // Code to handle the changes and commit to state
  const handleChange = (e) => {
    const newState = { ...remove };
    newState[e.target.name] = e.target.value;
    setDelete(newState);
  };

  // Code to get the selected word and associated id
  useEffect(() => {
    fetch(`/words/${params.id}`)
      .then((response) => response.json())
      .then((data) => setDelete(data));
  }, []);

  // Code to submit the changes to database via patch API
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/words/${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(remove),
    }).then((response) => {
      // route back to Homepage
      history.replace("/");
    });
  };

  return (
    <div>
      <h1>Delete words</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Alphabet:
          <input
            name="alphabet"
            value={remove.alphabet}
            onChange={handleChange}
          />
        </label>
        <label>
          Word:
          <input name="words" value={remove.words} onChange={handleChange} />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};
