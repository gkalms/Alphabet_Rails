import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const WordList = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch("/words")
      .then((response) => response.json())
      .then((data) => setWords(data));
  }, []);
  return (
    <div>
      <ul>
        {
        words.map((el) => (
          <li key={el.id}>
            <Link to={`/words/edit/${el.id}`}>{el.words}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
