export const APP_PAGES = {
  APP: {
    HOME: "HOME"
  }
};

export const COLORS = {
  BACKGROUND: "#ffffff",
  TEXT_COLOR: "#404040"
};

import { Ionicons } from "react-native-vector-icons";

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
  )
};

export const SETTINGS_DATASET = [
  {
    id: 1,
    name: "Profile"
  },
  {
    id: 2,
    name: "Password"
  },
  {
    id: 3,
    name: "Billing"
  },
  {
    id: 4,
    name: "My Orders"
  }
];
