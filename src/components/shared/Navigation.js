import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Icons
import { AntDesign, Entypo, Feather, MaterialIcons } from "@expo/vector-icons"; //Home

// Colors
import { colors } from "../../constants/colorPalette.js";

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
        <AntDesign name="home" size={24} color={iconColor("HomeScreen")} />
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
          size={24}
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
          size={26}
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
        <Entypo name="star" size={27} color={iconColor("AboutUsScreen")} />
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
          size={24}
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
    // flex: 1,
    height: 70,
    width: "100%",
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    position: "absolute", // Align navBar on bottom of screen
    bottom: 0, // Align navBar on bottom of screen
  },
  button: {
    display: "flex",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
  },
});
