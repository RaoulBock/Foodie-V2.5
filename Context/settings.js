export const APP_PAGES = {
  APP: {
    HOME: "HOME",
  },
};

export const COLORS = {
  BACKGROUND: "#ffffff",
  TEXT_COLOR: "#404040",
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
};
