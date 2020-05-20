import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialFormInputs = {
  username: "",
  password: "",
};

export default function LoginForm() {
    const history = useHistory()

  const [loginInputs, setLoginInputs] = useState(initialFormInputs);
  const [isLoading, setIsLoading] = useState(false);

  const changeLogin = (event) => {
    setLoginInputs({
      ...loginInputs,
      [event.target.name]: event.target.value,
    });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    setIsLoading(true)
    axiosWithAuth()
      .post("/api/login", loginInputs)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("token", res.data.payload);
        history.push("/protected")
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        <form onSubmit={submitLogin}>
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            value={loginInputs.username}
            onChange={changeLogin}
          />
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            value={loginInputs.password}
            onChange={changeLogin}
          />
          <button>LOG IN</button>
        </form>
        {isLoading && <p>checking your info....</p>}
    </div>
  );
}