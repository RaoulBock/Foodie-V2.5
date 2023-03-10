export const APP_PAGES = {
  APP: {
    HOME: "HOME",
    LOGIN: "LOGIN",
    CREATE: "CREATE"
  }
};

export const COLORS = {
  BACKGROUND: "#ffffff",
  TEXT_COLOR: "#404040"
};

import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";

export const APP_ICONS = {
  MENU: (
    <Ionicons
      name={"ios-menu-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 28 }}
    />
  ),
  SEARCH: (
    <Ionicons
      name={"ios-search-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 28 }}
    />
  ),
  HEART: (
    <Ionicons
      name={"ios-heart-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 28 }}
    />
  ),
  LIKED: <Ionicons name={"ios-heart"} style={{ color: "red", fontSize: 28 }} />,
  DOWNLOAD: (
    <Ionicons
      name={"ios-download-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 28 }}
    />
  ),
  EXIT: (
    <Ionicons
      name={"ios-close-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 28 }}
    />
  ),
  USER: (
    <Ionicons
      name={"ios-person-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 28 }}
    />
  ),
  KEY: (
    <Ionicons
      name={"ios-key-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 28 }}
    />
  ),
  MONEY: (
    <Ionicons
      name={"ios-cash-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 28 }}
    />
  ),
  LAYER: (
    <Ionicons
      name={"ios-layers-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 28 }}
    />
  ),
  LOGOUT: (
    <Ionicons
      name={"ios-log-out"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 28 }}
    />
  ),
  ARROW: (
    <Ionicons
      name={"ios-chevron-forward-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 28 }}
    />
  ),
  BED: (
    <Ionicons
      name={"bed-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 14 }}
    />
  ),
  BATH: (
    <MaterialCommunityIcons
      name={"bathtub-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 14 }}
    />
  ),
  FEET: (
    <MaterialCommunityIcons
      name={"social-distance-6-feet"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 14 }}
    />
  ),
  CUBE: (
    <Ionicons name={"ios-cube"} style={{ color: "#ed6f2c", fontSize: 14 }} />
  ),
  CREATE: (
    <Ionicons
      name={"ios-create-outline"}
      style={{ color: COLORS.TEXT_COLOR, fontSize: 25 }}
    />
  ),
  BACK: (
    <Ionicons name={"ios-arrow-back"} style={{ color: "#fff", fontSize: 25 }} />
  )
};

export const SETTINGS_DATASET = [
  {
    id: 1,
    name: "Profile",
    icon: APP_ICONS.USER
  },
  {
    id: 2,
    name: "Password",
    icon: APP_ICONS.KEY
  },
  {
    id: 3,
    name: "Billing",
    icon: APP_ICONS.MONEY
  },
  {
    id: 4,
    name: "My Orders",
    icon: APP_ICONS.LAYER
  },
  {
    id: 5,
    name: "Logout",
    icon: APP_ICONS.LOGOUT
  }
];

export const METHOD_TYPE = [
  {
    id: 1,
    name: "Rent"
  },
  {
    id: 2,
    name: "Annual"
  }
];

export const PAYMENT_METHOD = [
  {
    id: 1,
    name: "/PM"
  },
  {
    id: 2,
    name: "Annual"
  }
];
