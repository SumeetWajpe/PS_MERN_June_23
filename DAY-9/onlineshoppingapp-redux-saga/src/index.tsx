import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
