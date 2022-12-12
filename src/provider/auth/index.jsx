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

  // const headers = {
  //   "Content-type": "application/JSON",
  //   Authorization: `Bearer ${token}`,
  // };

  const loginUser = (data, type) => {
    NoBrandApi.post(type === "user" ? `auth` : "auth/management", {
      email: data.loginEmail,
      password: data.loginPassword,
    })
      .then((response) => {
        localStorage.setItem(
          "Token",
          JSON.stringify(response.data.accessToken)
        );
        setToken(response.data.accessToken);
        if (type === "user") {
          setIsLogged(true);
          getUserData(response.data.accessToken);
        }
      })
      .catch((err) => {});
  };

  const registerUser = (data, type) => {
    NoBrandApi.post(type === "user" ? `customer` : "management", {
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

  const registerManager = (data) => {
    NoBrandApi.post("management", {
      name: data.registerName,
      phone: data.registerPhone,
      email: data.registerEmail,
      password: data.registerPassword,
      secretKey: data.registerSecretKey,
    })
      .then((response) => {
        console.log(response.data);
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
  const getUsersData = async () => {
    const tokenLocal = JSON.parse(localStorage.getItem("Token")) || [];
    const users = await NoBrandApi.get("management/customers", {
      headers: {
        Authorization: `Bearer ${tokenLocal}`,
      },
    })
      .then((response) => {
        return response.data.users;
      })
      .catch((err) => {
        console.log(err);
      });
    return users;
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        loginUser,
        registerUser,
        userLocal,
        registerManager,
        getUsersData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
