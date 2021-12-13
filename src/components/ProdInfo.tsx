import React from "react";
import { ProdInfoType } from "../types/index";

const ProdInfo: React.FC<ProdInfoType> = ({ name, price }) => {
  return (
    <div>
      <div>{`${name} 1шт`}</div>
      <div>
        <b>{`$ ${price}`}</b>
      </div>
    </div>
  );
};

export default ProdInfo;
