import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import reportWebVitals from "./reportWebVitals";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  createHttpLink,
} from "@apollo/client";

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage["jwt-token"] || ""; // can use context api
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  } else {
    return {
      ...headers,
    };
  }
});

const httpLink = createHttpLink({ uri: "http://localhost:4000/" });
const client = new ApolloClient({
  // uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  // link: httpLink,
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
