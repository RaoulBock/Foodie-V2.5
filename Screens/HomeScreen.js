import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import Nav from "../Components/Nav/Nav";
import { COLORS } from "../Context/settings";
import SearchInput from "../Components/Input/SearchInput";
import Modal from "../Components/Modal/Modal";
import { AppContext } from "../Context/AppContext";
import ImageCard from "../Components/Cards/ImageCard";

const HomeScreen = () => {
  const { dataset } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <ScrollView>
      <View style={styles.outline}>
        <Nav title={"Picafy"} />

        <View style={styles.section}>
          <Text style={styles.title}>Find Awesome Photos</Text>
          <SearchInput placeholder={"Search photos"} />
        </View>

        {dataset ? (
          <FlatList
            data={dataset}
            renderItem={({ item }) => <ImageCard item={item} />}
            keyExtractor={(item) => `${item.id}-${item.name}`}
            initialNumToRender={5}
            onEndReachedThreshold={0.5}
            maxToRenderPerBatch={5}
            onEndReached={() => {
              setIsLoading(true);
              // fetch more data
              setIsLoading(false);
            }}
            ListFooterComponent={
              isLoading ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
              ) : null
            }
          />
        ) : (
          <Text>Something went wrong</Text>
        )}

        {/* <Modal dataset={dataset} /> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fdfdfd",
  },
  section: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  title: {
    color: COLORS.TEXT_COLOR,
    fontWeight: "700",
    fontSize: 50,
  },
});
