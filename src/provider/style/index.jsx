import { createContext, useState } from "react";

export const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
  const [dropLoginDownShow, setLoginDropDownShow] = useState(false);
  const [dropRegisterDownShow, setRegisterDropDownShow] = useState(false);
  const [dropDownContactShow, setDropDownContactShow] = useState(false);

  return (
    <StyleContext.Provider
      value={{
        dropLoginDownShow,
        setLoginDropDownShow,
        dropRegisterDownShow,
        setRegisterDropDownShow,
        dropDownContactShow,
        setDropDownContactShow,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
};
