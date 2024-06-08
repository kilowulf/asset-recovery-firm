import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

/* npm uninstall tailwindcss postcss autoprefixer # erase these dependencies from package.json completely
npm install -D tailwindcss postcss@8.1 # and reinstall it
npx tailwindcss -i ./src/index.css -o ./src/style.css --watch.  
i then changed th eimport statement in index.js  
for import ./index.css to ./styles.css.  */

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
