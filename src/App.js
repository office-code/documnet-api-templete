import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/login.css'
import "react-toastify/dist/ReactToastify.css";
import Router from './routes';
import "../src/assets/css/introduction.css"
import "../src/assets/css/methods.css"
import GoToTop from "../src/GoToTop";

function App() {
  return (
    <>
    <GoToTop />
    <Router />
    </>
  );
}

export default App;
