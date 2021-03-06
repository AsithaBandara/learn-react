import React from "react";

const Tweet = ({ name, tweet, setTweet, tweets }) => {
  // functions
  const deleteTweethandler = (id) => {
    setTweet(tweets.filter((tweet) => tweet.id !== id));
  };

  return (
    <div className="tweet">
      <h3>{tweet.message}</h3>
      <h6>Created by: {name}</h6>
      <button onClick={() => deleteTweethandler(tweet.id)}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
