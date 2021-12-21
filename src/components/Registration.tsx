import React, { useState, useEffect } from "react";
import MyInput from "./MyInput";
import "../styles/App.css";

const Registration = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);

  useEffect(() => {
    if (
      password === repeatPassword &&
      password !== "" &&
      name !== "" &&
      surname !== "" &&
      email !== "" &&
      email.includes("@")
    ) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  });

  const buttonHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    const userInfo = {
      name,
      surname,
      email,
      password,
    };
    console.log(userInfo);

    setName("");
    setSurname("");
    setPassword("");
    setRepeatPassword("");
    setemail("");
  };

  return (
    <div className="container">
      <form>
        <MyInput
          variant="text"
          value={name}
          placeHolder="name"
          setContent={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setName(ev.target.value)
          }
        />
        <MyInput
          variant="text"
          value={surname}
          placeHolder="surname"
          setContent={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setSurname(ev.target.value)
          }
        />
        <MyInput
          variant="email"
          placeHolder="email"
          value={email}
          setContent={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setemail(ev.target.value)
          }
        />
        <MyInput
          variant="password"
          value={password}
          placeHolder="password"
          setContent={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(ev.target.value)
          }
        />

        <MyInput
          variant="password"
          value={repeatPassword}
          placeHolder="repeat password"
          setContent={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setRepeatPassword(ev.target.value)
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
              opacity: `${password !== repeatPassword ? "100" : "0"}`,
            }}>
            Passwords don`t match!!
          </span>
        </div>
      </form>
    </div>
  );
};

export default Registration;
