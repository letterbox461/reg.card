import React from "react";
import { ProdInfoType } from "../types/index";

const ProdInfo: React.FC<ProdInfoType> = ({ name, price }) => {
  return (
    <div>
      <div>{`${name} 100g`}</div>
      <div>
        <b>{`$ ${price}`}</b>
      </div>
    </div>
  );
};

export default ProdInfo;
