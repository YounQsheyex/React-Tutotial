import React, { useEffect } from "react";
import { useRef } from "react";

// useRef will not cause a re-render when the value changes
// useRef can hold mutable values (not triger re-render)
// target dom element (form input)
const SimpleRef = () => {
  const headingContainer = useRef(null);
  console.log(headingContainer.current);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="container">
      <h1 ref={headingContainer} className="text-3xl text-center">
        Use Ref
      </h1>
      <form className="myform">
        <label htmlFor="sub" className="mylabel">
          Subscribe to Newsletter
        </label>
        <input
          ref={inputRef}
          type="email"
          className="input"
          placeholder="Email Address"
        />
        <button className="mybtn mt-4">Subscribe</button>
      </form>
    </div>
  );
};

export default SimpleRef;
