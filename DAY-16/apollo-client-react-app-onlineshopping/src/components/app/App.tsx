import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../graphql/querries";
import { useEffect } from "react";

function App() {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  useEffect(() => {
    console.log(data);
  }, []);

  return <div className="App"></div>;
}

export default App;
