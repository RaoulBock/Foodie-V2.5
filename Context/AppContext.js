import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
  userData: null,
  setUserData: (val) => {}
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.LOGIN);
  const [showModal, setShowModal] = React.useState(false);
  const [userData, setUserData] = React.useState();

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        showModal,
        setShowModal,
        userData,
        setUserData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
