import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useParams } from "react-router";

import { AddWords } from "./Addwords";
import { EditWords } from "./Editwords";
import { DeleteWord } from "./Deletewords";
import { ListWords } from "./ListWords";

const AlphaWordContainer = () => {
  const [wordslist, setWordsList] = useState([]);
  const [editWord, setEditWord] = useState({ alphabet: "", words: "" });
  const [deleteWord, setDeleteWord] = useState({ alphabet: "", words: "" });

  /* Populate list*/
  useEffect(() => {
    fetch("/words")
      .then((response) => response.json())
      .then((wordslist) => setWordsList(wordslist));
  }, []);

  /*Add New words*/
  const handleWordsSubmit = (alphabet, words) => {
    const newWord = { alphabet: alphabet, words: words };
    const addWords = [...wordslist];
    addWords.push(newWord);
    setWordsList(addWords);
    fetch("/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    });
  };

  const params = useParams();

  /*Edit words*/
  useEffect(() => {
    fetch(`/words/${params.id}`)
      .then((response) => response.json())
      .then((data) => setEditWord(data));
  }, []);

  const handleWordClick = (wordIndex) => {
    const word = wordslist[wordIndex];
    /* set to-be-state*/
    setEditWord(word);
    setDeleteWord(word);
};
  
  const handleEditWord = (word) => {
    const findWord = wordslist.findIndex((wordEl) => {
        return wordEl._id === word._id;
    });
    const fixWords = [...wordslist];
    fixWords[findWord] = word;
    setWordsList(fixWords);
    fetch(`/words/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(word),
    }).then((response) => {
      console.log('PUT response:', response);
  })
};

  // Delete words
  const handleDeleteWord = (word) => {
    const findWord = wordslist.findIndex((wordEl) => {
      return wordEl._id === word._id;
    });
    const removeWord = [...wordslist];
    removeWord[findWord] = word;
    setWordsList(removeWord);
    fetch(`/words/${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(word),
    }).then((response) => {
      console.log("PUT response:", response);
    });
  };

  return (
    <Router>
      <div>
        <Link to="/AddWords">Add</Link>
        <Link to="/EditWords">Edit</Link>
        <Link to="/DeleteWord">Delete</Link>
        <Link to="/ListWords">List</Link>
        <ListWords words={wordslist} handleClick={handleWordClick} />
        <Switch>
          <Route path="/AddWords">
            <AddWords submit={handleWordsSubmit} />
          </Route>
          <Route path="/EditWords">
            <EditWords submit={handleEditWord} word={editWord} />
          </Route>
          <Route path="/DeleteWord">
            <DeleteWord submit={handleDeleteWord} word={deleteWord} />
          </Route>
          <Route path="/ListWords">
            <ListWords words={wordslist} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export { AlphaWordContainer };
