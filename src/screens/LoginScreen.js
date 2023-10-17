// Import React
import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { colors } from "../constants/colorPalette.js";
import {
  scale_H,
  scale_V,
  scale_mod,
} from "../data/functions/normalizeScaling.js";
import { styleMaster } from "../constants/stylesMaster.js";

import { getUsers, deleteUser } from "../server/user.js";
import api from "../server/apiConfig.js";
import axios from "axios";

// Components
import LoginScreenButton from "../components/shared/LoginScreenButton.js";

function LoginScreen(props) {
  // Navigation
  const navigation = useNavigation();
  const route = useRoute();

  const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     getUsers(setUserData);
//     // deleteUser("652d6e847186ffc8ccb2b125");
//   }, []);
//   console.log(userData);

  function handlePress(target) {
    if (target === "Create Account") {
      navigation.navigate("CreateAccountScreen");
    }
    if (target === "Login") {
      navigation.navigate("LoginAccountScreen");
    }
    console.log(`${target} button pressed`);
  }

  function handleSkip() {
    navigation.navigate("HomeScreen");
  }

  return (
    <View style={[styleMaster.parent, styles.container]}>
      <View style={styles.subContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Welcome to Happy Tails</Text>
        </View>
        <View style={styles.buttonContainer}>
          <LoginScreenButton
            text={"Create an Account"}
            handlePress={() => handlePress("Create Account")}
          />
          <View style={styles.padding}></View>
          <LoginScreenButton
            text={"Log In"}
            handlePress={() => handlePress("Login")}
          />
          <View style={styles.padding}></View>
          <View style={styles.skipContainer}>
            <TouchableOpacity onPress={() => handleSkip()}>
              <Text style={[styleMaster.defaultFont, styles.skipText]}>
                Later
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    // borderWidth: 2,
    height: "100%",
    width: "100%",
  },
  headingContainer: {
    // borderWidth: 2,
    paddingTop: scale_mod(84),
    paddingBottom: scale_mod(80),
  },
  heading: {
    fontFamily: "RalewayBold",
    fontSize: scale_V(52),
    color: colors.black,
    textAlign: "center",
  },
  buttonContainer: {
    // borderWidth: 2,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  padding: {
    paddingTop: scale_mod(24),
  },
  skipContainer: {
    paddingTop: scale_mod(8),
    paddingBottom: scale_mod(8),
  },
  skipText: {
    color: colors.grayscale03,
  },
});
