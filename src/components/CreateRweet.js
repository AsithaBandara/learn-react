import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ textInput, setTextInput, tweets, setTweet }) => {
  // Functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const createTweetHandler = (e) => {
    e.preventDefault();
    setTweet([...tweets, { id: uuidv4(), message: textInput }]);
    setTextInput("");
  };

  return (
    <form onSubmit={createTweetHandler}>
      <textarea value={textInput} onChange={userInputHandler} cols="30" rows="5"></textarea>
      <button>Create</button>
    </form>
  );
};

export default CreateTweet;
