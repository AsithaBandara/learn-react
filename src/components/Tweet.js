import React from "react";
import styled from "styled-components";

const Tweet = ({ name, tweet, setTweet, tweets }) => {
  // functions
  const deleteTweethandler = (id) => {
    setTweet(tweets.filter((tweet) => tweet.id !== id));
  };

  return (
    <StyledTweet>
      <h3 className="title">{tweet.message}</h3>
      <h6>Created by: {name}</h6>
      <button onClick={() => deleteTweethandler(tweet.id)}>Delete</button>
      <button>Like</button>
    </StyledTweet>
  );
};

const StyledTweet = styled.div`
  .title {
    color: chocolate;
  }
`;

export default Tweet;
