import { createContext, useContext, useState } from "react";

const Portfoliocontext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (value) => {
    setTheme(value);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      console.log(theme);
      //   document.body.style.backgroundColor = "black";
    } else {
      setTheme("light");
      console.log(theme);
      document.body.style.backgroundColor = "white";
    }
  };
  const value = {
    theme,
    changeTheme,
    toggleTheme,
  };
  return (
    <Portfoliocontext.Provider value={value}>
      {children}
    </Portfoliocontext.Provider>
  );
};

const PortfolioHook = () => {
  const context = useContext(Portfoliocontext);
  if (context == undefined) {
    return "hook is not working ";
  }
  return context;
};

export default PortfolioHook;
