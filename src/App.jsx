// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <HeroSection></HeroSection>
      <Products></Products>
    </div>
  );
}

export default App;
