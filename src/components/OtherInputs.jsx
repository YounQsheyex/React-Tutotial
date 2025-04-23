import React from "react";
import { useState } from "react";

const OtherInputs = () => {
  const [review, setReview] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [picture, setPicture] = useState(null);
  const handleForm = (e) => {
    e.preventDefault();
  };
  const [preview, setPreview] = useState(null);
  const handleFileChange = (e) => {
    setPicture(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div>
      <form className="myform" onSubmit={handleForm}>
        <label htmlFor="pic">Upload Photo</label>
        <input
          type="file"
          id="pic"
          className="myInput"
          onChange={handleFileChange}
          accept="image/*"
        />
        {preview && (
          <img
            src={preview}
            alt="your photo"
            className="h-16 w-16 object-cover rounded-md"
          />
        )}
        <textarea
          placeholder="Write A Review"
          className="myInput"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <input
          type="checkbox"
          id="agree"
          value={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label htmlFor="agree">Agree to Terms and Conditions</label>
        {/* <p className="text-red-400">{error}</p> */}
        <button type="submit" className="mybtn block mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OtherInputs;
