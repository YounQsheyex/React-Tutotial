import React from "react";
import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import { useFetch } from "../hooks/useFetch";

const url = "https://dummyjson.com/recipes";

const Receipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setRecipes(data.recipes);
    };
    fetchRecipes();
  });
  if (loading) {
    return (
      <div>
        <FadeLoader color="#ddd000" />
      </div>
    );
  }
  return (
    <div className="max-w-[1800px] p-10">
      <h1>Recipes</h1>
      <section className="flex flex-col flex-wrap items-center gap-10 px-3">
        {recipes.map((recipe, index) => {
          const {
            name,
            ingredients,
            instructions,
            prepTimeMinutes,
            image,
            mealType,
          } = recipe;
          return (
            <div key={index}>
              <h1 className="font-bold text-2xl mb-2">{name}</h1>
              <img src={image} alt={name} className="w-full h-[50%]" />
              <div>
                <h1 className="capitalize font-bold text-xl mt-4">
                  Ingredients
                </h1>

                {ingredients.map((ingredient, index) => {
                  return <li key={index}>{ingredient}</li>;
                })}
              </div>
              <div>
                <h1 className="font-bold text-2xl my-4">Instructions</h1>
                {instructions.map((instruction, index) => {
                  return <li key={index}>{instruction}</li>;
                })}
              </div>
              <div className="mt-4">
                <p className="font-bold">
                  Preparation Time:{prepTimeMinutes} mins
                </p>
              </div>
              <div>
                <h1 className="font-bold text-2xl mt-4">Meal Type</h1>
                {mealType.map((meal, index) => {
                  return <p key={index}>{meal}</p>;
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Receipe;

// name image ingredients instruction prparation time
