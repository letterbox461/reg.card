import React from "react";
import MyButton from "./MyButton";
import { ImageType } from "../types";

const ImageHolder: React.FC<ImageType> = ({ image }) => {
  return (
    <div className="picHolder" style={{ backgroundImage: `url(${image})` }}>
      <MyButton label="Купить" />
      <MyButton label="Купить в кредит" />
    </div>
  );
};

export default ImageHolder;
