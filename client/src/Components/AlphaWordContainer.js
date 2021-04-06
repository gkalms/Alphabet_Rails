import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useParams } from "react-router";

import { AddWords } from "./Addwords";
import { EditWords } from "./Editwords";
import { DeleteWord } from "./Deletewords";
import { ListWords } from "./ListWords";



const AlphaWordContainer = () => {
    /* set up state variables to handle changes - added words */
    const [wordslist, setWordsList] = useState([]);
    const [updateWord, setUpdateWord] = useState({alphabet: "" , words: ""});
    const [deleteWord, setDeleteWord] = useState({alphabet: "" , words: "" });

    /*Adding New words*/
    const handleWordsSubmit = (alphabet, words) => {
        const newWord = { alphabet: alphabet, words: words }; /* will read new entry and put in temp variable*/
        const addWords = [...wordslist] /*bring in state variable*/
        addWords.push(newWord); /* add new word to temp variable"*/
        setWordsList(addWords); /* update state - update list/array of words*/
        /* Then add new word to database*/
        fetch("/words", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newWord),
        });
    };
    /* Read from database and populate word list*/
    useEffect(() => {
        fetch("/words", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((wordslist) => {
                // call to set state
                setWordsList(wordslist);
            });
    }, []);

    const params = useParams();

    /*Editing words*/
    //  When you click on a word on the list - find the index(unique key identifying the word)
    const handleWordClick = (wordIndex) => {
        const word = wordslist[wordIndex];
        /* set to-be-state*/
        setUpdateWord(word);
        setDeleteWord(word);
    };
    const handleEditWord = (word) => {
        const findWord = wordslist.findIndex((wordEl) => {
            return wordEl._id === word._id;
        });
        const addWords = [...wordslist];
        addWords[findWord] = word
        setWordsList(addWords);
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
        removeWord[findWord] = word
        setWordsList(removeWord);
        fetch(`/words/${params.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(word),
        }).then((response) => {
            console.log('PUT response:', response);
        })
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
                        <EditWords submit={handleEditWord} word={updateWord} />
                    </Route>
                    <Route path="/DeleteWord">
                        <DeleteWord submit={handleDeleteWord} word={deleteWord} />
                    </Route>
                    <Route path="/ListWords">
                        <ListWords words={wordslist} />
                    </Route>
                </Switch>
            </div>
        </Router >
    );
};

export { AlphaWordContainer };