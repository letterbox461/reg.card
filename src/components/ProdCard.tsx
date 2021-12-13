import React, { Suspense } from "react";
import { GoodsType } from "../types";
import ProdInfo from "./ProdInfo";
import Rating from "./Rating";

const ImageHolder = React.lazy(() => import("./ImageHolder"));

const ProdCard: React.FC<GoodsType> = ({ opt }) => {
  const { name, price, image, rating } = opt;
  return (
    <div className="card">
      <Suspense fallback={<div>Загрузка...</div>}>
        <ImageHolder image={image} />
      </Suspense>
      <Rating rating={rating} />
      <ProdInfo name={name} price={price} />
    </div>
  );
};

export default ProdCard;
