import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS, COLORS } from "../../Context/settings";
import { AppContext } from "../../Context/AppContext";

const ImageCard = ({ item }) => {
  const { isLiked, setIsLiked } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <View style={styles.grid}>
        <Image
          source={{ uri: item.user.profile_image.large }}
          style={styles.profile_image}
        />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={styles.username}>{item.user.username}</Text>
          <Text style={styles.text}>{item.created_at}</Text>
        </View>
      </View>
      <View>
        <Image source={{ uri: item.urls.raw }} style={styles.image} />
      </View>
      <View
        style={[
          styles.grid,
          { alignItems: "center", justifyContent: "space-between" },
        ]}
      >
        {isLiked === false ? (
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Text>{APP_ICONS.HEART}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Text>{APP_ICONS.LIKED}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <Text>{APP_ICONS.DOWNLOAD}</Text>
        </TouchableOpacity>
      </View>
      {/* <Image source={img} style={styles.img} /> */}
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  outline: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  grid: {
    flexDirection: "row",
  },
  text: {
    color: "gray",
  },
  profile_image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  username: {
    fontWeight: "600",
    fontSize: 23,
    color: COLORS.TEXT_COLOR,
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginVertical: 10,
  },
});
