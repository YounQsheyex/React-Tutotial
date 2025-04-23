import React from "react";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

const AxiosExample = () => {
  const getdata = async () => {
    //using axios to get data
    // const {data} = await axios("https://dummyjson.com/products");
    const {data}=await axiosInstance("/products")
    console.log(data);
  };
  getdata();
  return <div>AxiosExample</div>;
};

export default AxiosExample;
