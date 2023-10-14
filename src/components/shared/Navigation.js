import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Icons
import { AntDesign, Entypo, Feather, MaterialIcons } from "@expo/vector-icons"; //Home

// Constants
import { colors } from "../../constants/colorPalette.js";
import { styleMaster } from "../../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../../data/functions/normalizeScaling.js";

function Navigation() {
  const navigation = useNavigation();
  const route = useRoute();

  // Dynamically render color of icon on nav bar
  function iconColor(name) {
    if (route.name === name) return colors.primary;
    return colors.grayscale03;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <AntDesign name="home" size={scale_mod(24)} color={iconColor("HomeScreen")} />
        <Text style={[styles.buttonText, { color: iconColor("HomeScreen") }]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MyPetsScreen")}
      >
        <MaterialIcons
          name="pets"
          size={scale_mod(24)}
          color={iconColor("MyPetsScreen")}
        />
        <Text style={[styles.buttonText, { color: iconColor("MyPetsScreen") }]}>
          My Pets
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BookingScreen")}
      >
        <AntDesign
          name="calendar"
          size={scale_mod(26)}
          color={iconColor("BookingScreen")}
        />
        <Text
          style={[styles.buttonText, { color: iconColor("BookingScreen") }]}
        >
          Book
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AboutUsScreen")}
      >
        <Entypo name="star" size={scale_mod(27)} color={iconColor("AboutUsScreen")} />
        <Text
          style={[styles.buttonText, { color: iconColor("AboutUsScreen") }]}
        >
          About Us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SettingsScreen")}
      >
        <Feather
          name="settings"
          size={scale_mod(24)}
          color={iconColor("SettingsScreen")}
        />
        <Text
          style={[styles.buttonText, { color: iconColor("SettingsScreen") }]}
        >
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Navigation;

const styles = StyleSheet.create({
  container: {
    width: '100%' + styleMaster.parent.padding * 2, 
    aspectRatio: 5.36/1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    position: "absolute", // Align navBar on bottom of screen
    bottom: scale_mod(0), // Align navBar on bottom of screen
  },
  button: {
    display: "flex",
    alignItems: "center",
  },
  buttonText: {
    fontSize: scale_V(10),
  },
});
