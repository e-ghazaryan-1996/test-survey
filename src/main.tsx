import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import router from "@/router/routes";
import MuiCustomizedTheme from "./components/provider/mui-customized";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/api/graphql/config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MuiCustomizedTheme>
        <RouterProvider router={router} />
      </MuiCustomizedTheme>
    </ApolloProvider>
  </React.StrictMode>
);
