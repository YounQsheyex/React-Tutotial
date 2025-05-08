import React from "react";
import { Link, useParams } from "react-router-dom";
import { tweets } from "../data";

// useParams-

const SingleTweet = () => {
  const { id } = useParams();

  const tweet = tweets.find((singleTweet) => singleTweet.id === id);
  console.log(tweet);

  return (
    <div className="container py-10">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-2xl">{tweet.profileName}</h1>
          <p>@{tweet.handle}</p>
        </div>
        <div className="flex gap-3">
          <p>{tweet.likes} likes</p>
          <p>{tweet.comments.length} comments</p>
        </div>
        <h1 className="font-bold">Comments</h1>
        <div className="flex flex-col gap-3">
          {tweet.comments.map((comment, id) => {
            return <p key={id}>{comment}</p>;
          })}
        </div>
      </div>
      <Link to="/timeline" className="btn btn-accent mt-5">
        Back to Timeline
      </Link>
    </div>
  );
};

export default SingleTweet;
