import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";

const App = () => {
  return (
    <View style={styles.view}>
      <View style={styles.viewBox}>
        <ImageBackground
          source={require("homework4/assets/images/img.png")}
          style={styles.img1}
        ></ImageBackground>
      </View>

      <View style={styles.viewBox}>
        <ImageBackground
          source={require("homework4/assets/images/img2.jpg")}
          style={styles.img2}
        ></ImageBackground>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
  },

  viewBox: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  img1: {
    width: 300,
    height: 300,
    overflow: "hidden",
    resizeMode: "cover",
  },

  img2: {
    width: 300,
    height: 300,
    overflow: "hidden",
    resizeMode: "cover",
  },
});
