import React from "react";
import MyButton from "./MyButton";
import { GoodsType } from "../types";
import ProdInfo from "./ProdInfo";

const ProdCard: React.FC<GoodsType> = ({ opt }) => {
  const { name, price, image } = opt;
  return (
    <div className="card">
      <div className="picHolder" style={{ backgroundImage: `url(${image})` }}>
        <MyButton label="Купить" />
        <MyButton label="Купить в кредит" />
      </div>
      <ProdInfo name={name} price={price} />
    </div>
  );
};

export default ProdCard;
