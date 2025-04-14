import React from "react";
import { useState } from "react";
const films = [
  {
    id: 1,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_.jpg",
    title: "Mission Imposible",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucw6f3xlMEHw6lO0dy6odi13rouclQnv3qA&s",
    title: "Die Hard",
  },
  {
    id: 3,
    image:
      "https://preview.redd.it/r41qc1r118991.jpg?auto=webp&s=82a58d35557caad0737d5716a01f8f43683984f6",
    title: "Mortal Kombat",
  },
];
const ExampleArray = () => {
  const [movies, setMovies] = useState([]);

  if (movies.length === 0) {
    return (
      <div className="w-full max-w-[400px] mx-auto my-4 p-2.5 text-center shadow-2xl">
        <h1>NO MOVIES FOUND YET</h1>
        <button onClick={() => setMovies(films)} className="mybtn">
          Get Movies
        </button>
      </div>
    );
  }

  return (
    <div className="w-[500px] mx-auto">
      <h1 className="mb-4 font-bold text-3xl">Movies Available</h1>
      <div className="flex gap-3 ">
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className="w-full max-w-[300px]"
            >
              <img src={movie.image} alt={movie.title} className="w-[full] object-cover h-[200px] " />
              <p>{movie.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExampleArray;
