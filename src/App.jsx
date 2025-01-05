import React from "react";
import Nav from "./Components/Nav";
import About from "./Components/About";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <About />
      </BrowserRouter>
    </>
  );
}
export default App;
