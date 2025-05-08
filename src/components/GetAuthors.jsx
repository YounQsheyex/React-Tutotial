import React from "react";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import { useAppContext } from "../hooks/useAppContext";
const url = "https://example-data.draftbit.com/authors?_limit=10";
const GetAuthors = () => {
  const { value1, value2 } = useAppContext();

  const [authors, setAuthors] = useState([]);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    const getAuthors = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setIsLoading(false);
      setAuthors(data);
    };
    getAuthors();
  }, []);
  if (loading) {
    return (
      <div>
        <FadeLoader color="#fff000" />
      </div>
    );
  }
  return (
    <div className="max-w-[1240px] mx-auto p-10">
      <h1 className="font-extrabold text-center text-6xl mb-10">
        {value1} {value2}
      </h1>
      <h1 className="font-extrabold text-center text-6xl mb-10">Authors</h1>
      <section className="flex items-center flex-wrap gap-4">
        {authors.map((author, index) => {
          const { person, imgUrl, professions, sourceUrl, description } =
            author;
          return (
            <div
              key={index}
              className="w-full max-w-[320px] h-[460px] shadow-lg px-2.5"
            >
              <img src={imgUrl} alt={person} className="h-[320px] w-full" />
              <p className="font-bold text-2xl my-1.5">{person}</p>
              <p className="capitalize text-lg">{professions}</p>
              <p className="italic text-sm capitalize">{description}</p>
              <a
                href={sourceUrl}
                target="blank"
                className="underline mt-3 text-red-400 font-medium"
              >
                Read More
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default GetAuthors;
