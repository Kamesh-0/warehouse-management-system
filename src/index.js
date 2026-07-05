import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider
    clientId="831198790842-5kq9h5ahmqega5f917hdvsojfr6co8o2.apps.googleusercontent.com"
  >
    <App />
  </GoogleOAuthProvider>
);