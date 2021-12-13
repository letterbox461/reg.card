import React from "react";
import { RatingType } from "../types";

const Rating: React.FC<RatingType> = ({ rating }) => {
  const stars: any[] = [];

  for (let j = 0; j < rating; j += 1) {
    stars.push(<i>★</i>);
  }
  for (let j = 5; j > rating; j -= 1) {
    stars.push(<i>☆</i>);
  }

  return <span>{stars}</span>;
};

export default Rating;
