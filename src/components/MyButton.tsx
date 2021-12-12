import React from "react";
import { ButtonType } from "../types";

const MyButton: React.FC<ButtonType> = ({ label }) => {
  return <button type="button">{label}</button>;
};

export default MyButton;
