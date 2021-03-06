import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setTweet }) => {
  return (
    <div className="tweetlist">
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} name={name} tweet={tweet} setTweet={setTweet} tweets={tweets} />;
      })}
    </div>
  );
};

export default TweetList;
