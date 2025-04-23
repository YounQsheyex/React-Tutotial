import { useGetData } from "./useGetData";

const url = "https://dummyjson.com/products";
const ExampleFetch = () => {
  const { isError, isLoading, data:{product} } = useGetData(url);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <h1>Error occured while fetching data</h1>;
  }

  return (
    <div>
      <h1>List Of Products</h1>
      {
        product.map
      }
    </div>
  );
};

export default ExampleFetch;

//products [] -fetch req to the api->  product(api)
// loading true ---------> false
// error false --------> true
