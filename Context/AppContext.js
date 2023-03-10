import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
  userData: null,
  setUserData: (val) => {},
  placeData: null,
  setPlaceData: (val) => {}
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.LOGIN);
  const [showModal, setShowModal] = React.useState(false);
  const [userData, setUserData] = React.useState();
  const [placeData, setPlaceData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    try {
      var myHeaders = new Headers();

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      fetch("https://foodie-kgss.onrender.com/places", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // console.log(result);
          setPlaceData(result);
        })
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(`error, something went wrong ${error}`);
    }
  }, [setPlaceData]);

  const fetchPlaceData = async () => {
    try {
      const myHeaders = new Headers();

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      const response = await fetch(
        "https://foodie-kgss.onrender.com/places",
        requestOptions
      );
      const result = await response.json();
      setPlaceData(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  React.useEffect(() => {
    fetchPlaceData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchPlaceData().then(() => setRefreshing(false));
  };

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        showModal,
        setShowModal,
        userData,
        setUserData,
        placeData,
        setPlaceData,
        onRefresh,
        refreshing,
        setRefreshing
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
