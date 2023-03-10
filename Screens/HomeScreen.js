import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
  RefreshControl
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
import PlacesCard from "../Components/Cards/PlacesCard";

const HomeScreen = () => {
  const {
    showModal,
    setShowModal,
    placeData,
    onRefresh,
    refreshing,
    setRefreshing
  } = React.useContext(AppContext);

  console.log(placeData);

  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredData = placeData.filter((item) => {
    item.amount.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.method_type.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <View style={styles.outline}>
      <Nav title={"MyPlace"} />
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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.section}>
          <Text style={styles.title}>What are you looking for ?</Text>
          <SearchInput placeholder={"Search photos"} />
        </View>

        <View style={styles.layer}>
          <View style={styles.layerHeader}>
            <Text style={styles.text}>Rooms</Text>
            <TouchableOpacity>
              <Text style={{ color: "#0f5298", fontWeight: "500" }}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {placeData ? (
              placeData.map((e, i) => {
                if (e.description_2 === "room")
                  return <PlacesCard key={i} item={e} />;
              })
            ) : (
              <Text>Loading...</Text>
            )}
          </ScrollView>
        </View>

        <View style={styles.layer}>
          <View style={styles.layerHeader}>
            <Text style={styles.text}>Houses</Text>
            <TouchableOpacity>
              <Text style={{ color: "#0f5298", fontWeight: "500" }}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {placeData ? (
              placeData.map((e, i) => {
                if (e.description_2 === "house")
                  return <PlacesCard key={i} item={e} />;
              })
            ) : (
              <Text>Loading...</Text>
            )}
          </ScrollView>
        </View>

        <View style={styles.layer}>
          <View style={styles.layerHeader}>
            <Text style={styles.text}>Students</Text>
            <TouchableOpacity>
              <Text style={{ color: "#0f5298", fontWeight: "500" }}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {placeData ? (
              placeData.map((e, i) => {
                if (e.description_2 === "student")
                  return <PlacesCard key={i} item={e} />;
              })
            ) : (
              <Text>Loading...</Text>
            )}
          </ScrollView>
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
  },
  text: {
    fontWeight: "500",
    color: "#404040"
  },
  layerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  layer: {
    marginVertical: 20,
    paddingHorizontal: 2
  }
});
