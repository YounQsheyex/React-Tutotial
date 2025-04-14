import React from "react";
import { useEffect, useState } from "react";

const url = "https://dummyjson.com/products";

const FetchData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.products);
      setProducts(data.products);
    };
    getProducts();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto p-10">
      <h1>List of Products</h1>
      <section className="flex items-center gap-2.5 flex-wrap ">
        {products.map((product) => {
          const {
            images,
            title,
            price,
            id,
            stock,
            warrantyInformation,
            rating,
          } = product;
          return (
            <div
              key={id}
              className="w-full max-w-[320px] h-[370px] shadow-md px-2.5 "
            >
              <img
                src={images[0]}
                alt={title}
                className="w-full object-cover h-[70%] "
              />
              <p className="text-xl font-semibold">{title}</p>
              <div className="flex gap-4 items-center justify-between">
                <p className="text-2xl font-bold">${price}</p>
                <p className={stock >= 30 ? "text-green-400" : "text-red-500"}>
                  {stock}-Items left
                </p>
              </div>
              <p>{warrantyInformation}</p>
              <p className={rating < 3.5 ? "text-red-400" : "text-green-600"}>
                {rating}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchData;
