import React from "react";
import ProdCard from "./components/ProdCard";
import "./styles/App.css";
import { ArrType } from "./types/index";

const App = () => {
  const goods: ArrType[] = [
    { id: 1, name: "carrot", price: 399 },
    { id: 2, name: "potato", price: 299 },
    { id: 3, name: "cucumber", price: 799 },
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
