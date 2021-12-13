import React from "react";
import ProdCard from "./components/ProdCard";
import "./styles/App.css";
import { ArrType } from "./types/index";

const App = () => {
  const goods: ArrType[] = [
    {
      id: 1,
      name: "Carrot",
      price: 399,
      image: "./img/carrot.jpg",
    },
    {
      id: 2,
      name: "Potato",
      price: 299,
      image: "./img/potato.jpg",
    },
    {
      id: 3,
      name: "Cucumber",
      price: 799,
      image: "./img/cucumber.jpg",
    },
  ];

  return (
    <div className="container">
      {goods.map((element) => (
        <ProdCard key={element.id} opt={element} />
      ))}
    </div>
  );
};

export default App;
