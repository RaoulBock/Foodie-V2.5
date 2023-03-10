import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import React from "react";
import Nav from "../Components/Nav/Nav";
import { APP_ICONS, COLORS, SETTINGS_DATASET } from "../Context/settings";
import SearchInput from "../Components/Input/SearchInput";
import { AppContext } from "../Context/AppContext";
import ImageCard from "../Components/Cards/ImageCard";
import Model from "../Components/Modal/Model";
import ModelNav from "../Components/Nav/ModelNav";
import List from "../Components/List/List";

const HomeScreen = () => {
  const { showModal, setShowModal, userData } = React.useContext(AppContext);

  return (
    <View style={styles.outline}>
      <Nav title={"FoodIe"} />
      {showModal && (
        <Model
          visible={showModal}
          onRequestClose={() => setShowModal(!showModal)}
        >
          <View style={styles.container}>
            <ModelNav
              title={"Settings"}
              onPress={() => setShowModal(!showModal)}
              icon={APP_ICONS.EXIT}
            />
            <View>
              {SETTINGS_DATASET.map((e, i) => {
                return <List key={i} item={e} />;
              })}
            </View>
          </View>
        </Model>
      )}
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Where are you looking to go ?</Text>
          <SearchInput placeholder={"Search photos"} />
        </View>

        {/* {dataset ? (
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
        )} */}

        {/* <Modal dataset={dataset} /> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fdfdfd"
  },
  section: {
    marginTop: 40,
    marginHorizontal: 20
  },
  title: {
    color: COLORS.TEXT_COLOR,
    fontWeight: "700",
    fontSize: 50
  },
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingHorizontal: 20
  }
});
