import React from "react";

const SingleProduct = ({ image, price, title }) => {
  return (
    <div>
      <img src={image} alt={title} className="w-[300px]" />
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-2xl font-bold">${price}</p>
    </div>
  );
};

const JumiaClone = () => {
  return (
    <div>
      <h1>ALL PRODUCT</h1>
      <div className="flex items-center gap-3">
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/4471583/1.jpg?5817"
          }
          price={12000}
          title={"Hikers 32 TV"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/5518204/1.jpg?1787"
          }
          price={165000}
          title={"TCL 32 Smart TV"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/26/0996104/1.jpg?8010"
          }
          price={15000}
          title={"Century 50 Inches"}
        />
      </div>
    </div>
  );
};

export default JumiaClone;
