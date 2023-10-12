// Import React
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// Import Components
import UserProfileHome from "../components/screen/UserProfileHome.js";
import PromotionsHome from "../components/screen/PromotionsHome.js";
import AppointmentsHome from "../components/screen/AppointmentsHome.js";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";

// Other Hooks


function HomeScreen(props) {
  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
        <View style={[styleMaster.subParent]}>
            <UserProfileHome />
            <PromotionsHome />
            <AppointmentsHome />
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
