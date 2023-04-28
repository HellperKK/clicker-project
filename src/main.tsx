import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import Navbar from "./Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Navbar />
  </Provider>
);
