import React from "react";
import MyButton from "./MyButton";

import { GoodsType } from "../types/types";

const ProdCard: React.FC<GoodsType> = ({ opt }) => {
  const { id, name, price } = opt;
  return (
    <div id={id.toString()} className="card">
      <div className={`picHolder ${name}`}>
        <MyButton label="Купить" />
        <MyButton label="Купить в кредит" />
      </div>
      <div className="name">{`${name} 100g`}</div>
      <div className="price">
        <b>{`$${price}`}</b>
      </div>
    </div>
  );
};

export default ProdCard;
