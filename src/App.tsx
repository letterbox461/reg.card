import React from "react";
import "./styles/App.css";

const App = () => {
  const a = " carrot";

  return (
    <div className="container">
      <div className="card">
        <div className={`picHolder + ${a}`}>
          <button type="button">Купить</button>
          <button type="button">Купить в кредит</button>
        </div>
        <div className="name">Carrot 100g</div>
        <div className="price">
          <b>$399</b>
        </div>
      </div>
    </div>
  );
};

export default App;
