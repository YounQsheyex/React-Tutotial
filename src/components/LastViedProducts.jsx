import React from "react";
import MyStoreSingleProduct from "./MyStoreSingleProduct";

const LastViedProducts = () => {
  const lastViewedProducts = [
    {
      id: 1,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/5004353/1.jpg?0685",
      title: "Pearl And Titanium",
      price: 12000,
    },
    {
      id: 2,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/8815363/1.jpg?6449",
      title: "Mens Casual ",
      price: 15000,
    },
    {
      id: 3,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/191166/1.jpg?0765",
      title: "Speakers",
      price: 18000,
    },
  ];
  return (
    <div className="max-w-[1300px]  mx-auto p-[10px] mt-10">
      <div className="text-3xl text-black bg-amber-50 p-2 rounded-t-2xl font-bold mb-2">
        <h1>Last Viewed</h1>
      </div>
      <section className="flex gap-2 items-center">
        {lastViewedProducts.map((product) => {
          return <MyStoreSingleProduct key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default LastViedProducts;
