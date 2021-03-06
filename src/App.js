import React, { useState, useEffect } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateRweet";

function App() {
  // States
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweet] = useState([]);
  const [name, setName] = useState("Asitha");

  useEffect(() => {
    console.log("asdasd");
  }, [tweets]);
  return (
    <div>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweet={setTweet} />
      <TweetList name={name} tweets={tweets} setTweet={setTweet} />
    </div>
  );
}

export default App;
