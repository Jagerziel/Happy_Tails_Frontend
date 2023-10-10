// Import React
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// Import Components
import UserProfileHome from "../components/screen/UserProfileHome.js";
import PromotionsHome from "../components/screen/PromotionsHome.js";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";

function HomeScreen(props) {
  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
        <View style={[styleMaster.subParent]}>
            <UserProfileHome />
            <PromotionsHome />
        </View>
      <Navigation />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
