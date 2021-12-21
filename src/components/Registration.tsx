import React, { useState, useEffect } from "react";
import MyInput from "./MyInput";
import "../styles/App.css";
import UserInfoInterface from "../types";

const Registration = () => {
  const [userInfo, setUserInfo] = useState<UserInfoInterface>({
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [buttonStatus, setButtonStatus] = useState<boolean>(false);

  useEffect(() => {
    if (
      userInfo.password === userInfo.repeatPassword &&
      userInfo.password !== "" &&
      userInfo.name !== "" &&
      userInfo.surname !== "" &&
      userInfo.email !== "" &&
      userInfo.email.includes("@")
    ) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  });

  const buttonHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    console.log(userInfo);
    setUserInfo({
      ...userInfo,
      name: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: "",
    });
  };

  return (
    <div className="container">
      <form>
        <MyInput
          variant="text"
          value={userInfo.name}
          placeHolder="name"
          setContent={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setUserInfo({ ...userInfo, name: ev.target.value })
          }
        />
        <MyInput
          variant="text"
          value={userInfo.surname}
          placeHolder="surname"
          setContent={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setUserInfo({ ...userInfo, surname: ev.target.value })
          }
        />
        <MyInput
          variant="email"
          placeHolder="email"
          value={userInfo.email}
          setContent={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setUserInfo({ ...userInfo, email: ev.target.value })
          }
        />
        <MyInput
          variant="password"
          value={userInfo.password}
          placeHolder="password"
          setContent={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setUserInfo({ ...userInfo, password: ev.target.value })
          }
        />

        <MyInput
          variant="password"
          value={userInfo.repeatPassword}
          placeHolder="repeat password"
          setContent={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setUserInfo({ ...userInfo, repeatPassword: ev.target.value })
          }
        />
        <div>
          <button
            type="button"
            onClick={(ev) => {
              buttonHandler(ev);
            }}
            disabled={!buttonStatus}>
            Submit
          </button>
          <span
            style={{
              opacity: `${
                userInfo.password !== userInfo.repeatPassword ? "100" : "0"
              }`,
            }}>
            Passwords don`t match!!
          </span>
        </div>
      </form>
    </div>
  );
};

export default Registration;
