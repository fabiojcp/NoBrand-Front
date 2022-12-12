import { createContext, useState, useEffect } from "react";
import { NoBrandApi } from "../../services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const tokenLocal = JSON.parse(localStorage.getItem("Token")) || [];
  const userLocal = JSON.parse(localStorage.getItem("User")) || {};

  const [token, setToken] = useState(tokenLocal);
  const [user, setUser] = useState(userLocal);

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Token")) setIsLogged(true);
    setUser(userLocal);
  }, []);

  const headers = {
    "Content-type": "application/JSON",
    Authorization: `Bearer ${token}`,
  };

  const loginUser = (data) => {
    NoBrandApi.post(`auth`, {
      email: data.loginEmail,
      password: data.loginPassword,
    })
      .then((response) => {
        localStorage.setItem(
          "Token",
          JSON.stringify(response.data.accessToken)
        );
        setToken(response.data.accessToken);
        setIsLogged(true);
        getUserData(response.data.accessToken);
      })
      .catch((err) => {});
  };

  const registerUser = (data) => {
    NoBrandApi.post(`customer`, {
      name: data.registerName,
      phone: data.registerPhone,
      email: data.registerEmail,
      password: data.registerPassword,
    })
      .then((response) => {
        localStorage.setItem("User", JSON.stringify(response.data.user));
        setToken(response.data.accessToken);
        setIsLogged(true);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const getUserData = (token) => {
    NoBrandApi.get("customer", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        localStorage.setItem("User", JSON.stringify(response.data));
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, loginUser, registerUser, userLocal }}
    >
      {children}
    </AuthContext.Provider>
  );
};
