import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const WordEdit = () => {
  const [edit, setEdit] = useState({
    alphabet: "",
    words: "",
  });
  const params = useParams();
  console.log("params:", params);

  useEffect(() => {
    fetch(`/words/${params.id}`)
      .then((response) => response.json())
      .then((data) => setEdit(data));
  }, []);

  return (
    <div>
      <h1>Edit words</h1>
      <form>
          <label>
              Alphabet:
              <input value={edit.alphabet} />
              </label>
              <label>
              Word:
              <input value={edit.words} />
          </label>
      </form>
    </div>
  );
};
