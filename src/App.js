import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateRweet";

function App() {
  // States
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweet] = useState([]);
  const [name, setName] = useState("Asitha");

  return (
    <div>
      <h1>Hello {name}</h1>

      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweet={setTweet} />
      <TweetList name={name} tweets={tweets} setTweet={setTweet} />
    </div>
  );
}

export default App;
