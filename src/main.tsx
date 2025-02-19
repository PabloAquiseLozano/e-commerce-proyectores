import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <App />
    </QueryParamProvider>
  </BrowserRouter>,
);
