import React from "react";

type InputType = {
  variant: string;
  setContent: Function;
  value: string;
  placeHolder: string;
};

const MyInput: React.FC<InputType> = ({
  variant,
  setContent,
  value,
  placeHolder,
}) => {
  return (
    <div>
      <input
        type={variant}
        placeholder={placeHolder}
        value={value}
        onChange={(ev) => setContent(ev)}
      />
      <span style={{ opacity: value === "" ? "100%" : "0%" }}>
        Field {placeHolder} shouldn`t be empty!
      </span>
    </div>
  );
};

export default MyInput;
