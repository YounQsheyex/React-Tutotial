import React from "react";
const Product = ({ image, price, title, children }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>${price}</p>
      {children}
    </div>
  );
};
const PropsChildren = () => {
  return (
    <div>
      <h1>List of Available Produtcs</h1>
      <div className="flex gap-3 items-center">
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/2055793/1.jpg?6628"
          }
          price={8000}
          title={"Phone"}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/3088932/1.jpg?3620"
          }
          price={12000}
          title={"Powerbank"}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/4554283/1.jpg?3620"
          }
          title={"iPhone"}
          price={2000}
        >
          <p className="text-red-900 font-bold">Black Friday Deal</p>
        </Product>
      </div>
    </div>
  );
};

export default PropsChildren;
