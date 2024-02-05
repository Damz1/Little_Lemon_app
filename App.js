import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomScreen";

export default function App() {
  return (
    <>
      <View style={styles.BodyContainer}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={styles.FooterContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  BodyContainer: {
    flex: 1,
    backgroundColor: "#333333",
  },
  FooterContainer: {
    backgroundColor: "#333333",
  },
});
