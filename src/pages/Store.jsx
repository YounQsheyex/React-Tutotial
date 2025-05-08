import React from "react";
import Auth from "../components/GetAuthors";
import { useAppContext } from "../hooks/useAppContext";

const Store = () => {
  return (
    <div>
      <Auth />
    </div>
  );
};

export default Store;
