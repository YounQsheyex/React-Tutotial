import React from "react";
import MyStore from "../components/MyStore";
import { useAppContext } from "../hooks/useAppContext";

const About = () => {
  const { value1 } = useAppContext();
  return (
    <div>
      <h1 className="text-3xl text-center mb-5">{value1}</h1>
      <MyStore />
    </div>
  );
};

export default About;
