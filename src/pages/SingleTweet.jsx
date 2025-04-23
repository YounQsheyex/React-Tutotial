import React from "react";
import { Link } from "react-router-dom";

const SingleTweet = () => {
  return (
    <div className="py-4">
      <Link to="/timeline" className="btn btn-accent">
        Back to Timeline
      </Link>
    </div>
  );
};

export default SingleTweet;
