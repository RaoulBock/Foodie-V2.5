import React from "react";
import { APP_PAGES } from "./settings";
import Config from "react-native-config";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [dataset, setDataset] = React.useState();

  React.useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "ugid=2143d552ae7715bf0a63a1ded4c48d455531977");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api.unsplash.com/photos/?client_id=1TfWTUmQQS-rWWL4rDtMUYulMyNrUlXKx6VEYkA6cNY`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setDataset(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        dataset,
        setDataset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
