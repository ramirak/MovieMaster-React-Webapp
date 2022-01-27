import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import global from "../styles/global";
import Header from "../components/Header";

const Homepage = ({ navigation }) => {
  const [images, setImages] = useState([
    {
      id: 1,
      title: "Avengers",
      image: require("../assets/posters/avengers.png"),
    },
    {
      id: 2,
      title: "Batman VS Superman",
      image: require("../assets/posters/bat_vs_man.png"),
    },
    {
      id: 3,
      title: "Captain America",
      image: require("../assets/posters/capt_america.png"),
    },
    {
      id: 4,
      title: "Suicide Squad",
      image: require("../assets/posters/suic_squad.png"),
    },
    {
      id: 5,
      title: "Guardians Of The Galaxy",
      image: require("../assets/posters/guardians_galax.png"),
    },
  ]);

  return (
    <View style={global.container}>
      <ImageBackground
        source={require("../assets/bg-popcorn.jpg")}
        style={global.image}
      >
        <Header navigation={navigation} />
        <View style={styles.posters}>
          <FlatList
            columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
            numColumns={5}
            data={images}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ImageBackground
                  source={item.image}
                  imageStyle={{
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#ccc",
                  }}
                  style={{
                    width: 200,
                    height: 300,
                  }}
                >
                  <View style={styles.icons}>
                    <MaterialIcons
                      name="favorite-border"
                      size={24}
                      color="white"
                    />
                    <FontAwesome5 name="comment-dots" size={24} color="white" />
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  posters: {
    flex: 1,
    backgroundColor: "#000000a0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  icons: {
    backgroundColor: "#000000a0",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Homepage;
