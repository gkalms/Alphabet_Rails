import React from "react";

export const ListWords = (props) => {
    return (
      <ul>
        {props.words.map((el, index) => (
          <li key={index} onClick={() => props.handleClick(index)}>
            alphabet: {el.alphabet} - words: {el.words}
          </li>
        ))}
      </ul>
    );
  };