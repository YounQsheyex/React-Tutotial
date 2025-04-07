import React from "react";

const Contact = () => {
  return (
    <div className="conatainer py-10">
      <form className="w-full max-w-[600px] mx-auto shadow-lg rounded-lg p-5 flex flex-col gap-5">
        <input type="text" placeholder="Full Name" className="myInput" />
        <input type="email" placeholder="Email Adress" className="myInput" />
        <textarea
          placeholder="Type your message"
          className="myInput h-[100px] max-h-[120px]"
        ></textarea>
        <div className="flex items-center gap-2.5">
          <input type="checkbox" />
          <label htmlFor="mailing">Join Our Mailing List</label>
        </div>
        <button className="bg-black text-white w-full h-[40px] rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
