// Import React
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Components
import Navigation from "../components/shared/Navigation";
import StaticInputFieldArrow from "../components/shared/StaticInputFieldArrow.js";


// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";

function SettingsScreen(props) {
  // Navigation
  const navigation = useNavigation();
  const route = useRoute();

  function handleLogout () {
    /* 
    **************************************************
      ERASE STORED DATA
    **************************************************
    */
    navigation.navigate("LoginScreen")
    console.log('logged out')
  }

  function arrowNext ( path ) {
    console.log(`${path} button pressed`)
  }


  return (
    <SafeAreaView style={[styleMaster.parent, styles.container]}>
      <ScrollView style={[styleMaster.subParent]}>
        <View style={styles.headerContainer}>
          <Text style={[styleMaster.defaultFont, styles.headerText]}>Settings</Text>
          <TouchableOpacity onPress={() => handleLogout()}>
            <Text style={[styleMaster.defaultFont, styles.logoutText]}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styleMaster.defaultFont, styles.title]}>General</Text>
        <View style={styles.staticInputContainer}>
          <StaticInputFieldArrow name={"PIN"} arrowNext={() => arrowNext('PIN')} path={'PIN'}/>
        </View>

        <Text style={[styleMaster.defaultFont, styles.title]}>User Details</Text>
        <View style={styles.staticInputContainer}>
          <StaticInputFieldArrow name={"User info"} arrowNext={() => arrowNext('User Info')} path={'User Info'}/>
        </View>
        <View style={styles.staticInputContainer}>
          <StaticInputFieldArrow name={"Invoices"} arrowNext={() => arrowNext('Invoices')} path={'Invoices'}/>
        </View>
        <View style={styles.staticInputContainer}>
          <StaticInputFieldArrow name={"Payment methods"} arrowNext={() => arrowNext('Payment methods')} path={'Payment methods'}/>
        </View>
        <View style={styles.staticInputContainer}>
          <StaticInputFieldArrow name={"Emergency Contact"} arrowNext={() => arrowNext('Emergency Contact')} path={'Emergency Contact'}/>
        </View>


      </ScrollView>
      <Navigation />
    </SafeAreaView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    // alignItems: "center",
    // justifyContent: "center",
  },
  headerContainer: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    paddingBottom: scale_mod(4),
  },
  headerText: {
    fontSize: scale_V(32),
    fontFamily: "RalewayBold",
  },
  logoutText: {
    fontFamily: "RobotoLight",
    color: colors.black,
    paddingRight: scale_mod(7),
  },
  title: {
    fontSize: scale_V(21),
    fontFamily: "RalewayBold",
    paddingTop: scale_mod(28),
    paddingBottom: scale_mod(8),
  },
  staticInputContainer: {
    paddingTop: scale_mod(8),
  }
});
