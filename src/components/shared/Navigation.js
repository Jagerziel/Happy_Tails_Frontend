import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Icons
import { AntDesign, Entypo, Feather, MaterialIcons } from "@expo/vector-icons"; //Home
import HomeNavIcon from '../../assets/homeNavIcon.svg'
import HomeNavIconSelected from '../../assets/homeNavIconSelected.svg'
import PetNavIcon from '../../assets/petNavIcon.svg'
import PetNavIconSelected from '../../assets/petNavIconSelected.svg'
import BookNavIcon from '../../assets/bookNavIcon.svg'
import BookNavIconSelected from '../../assets/bookNavIconSelected.svg'
import InfoNavIcon from '../../assets/infoNavIcon.svg'
import InfoNavIconSelected from '../../assets/infoNavIconSelected.svg'




// Constants
import { colors } from "../../constants/colorPalette.js";
import { styleMaster } from "../../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../../data/functions/normalizeScaling.js";

function Navigation() {
  const navigation = useNavigation();
  const route = useRoute();

  const navbarSelections = {
    home: ["HomeScreen", "HomeAppointmentDetailsScreen", "HomeVaccinationsViewAllScreen"],
    myPets: ["MyPetsScreen", "MyPetsDetailsScreen"],
    booking: ["BookingScreen"],
    info: ["AboutUsScreen"],
    settings: ["SettingsScreen", "SettingsChangePINScreen", "SettingsECScreen", "SettingsUserInfoScreen"],
  }

  // Dynamically render color of icon on nav bar
  function iconColor(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (route.name === arr[i]) return colors.primary;
    }
    return colors.grayscale03;
  }

  function checkCurrSelection ( selectionArr ) {
    for (let i = 0; i < selectionArr.length; i++) {
      if (route.name === selectionArr[i]) return true

    }
    return false
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        {checkCurrSelection(navbarSelections.home) ?
        <HomeNavIconSelected /> : <HomeNavIcon />}
        <Text style={[styles.buttonText, { color: iconColor(navbarSelections.home) }]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MyPetsScreen")}
      >
        {checkCurrSelection(navbarSelections.myPets) ?
        <PetNavIconSelected /> : <PetNavIcon />}
        <Text style={[styles.buttonText, { color: iconColor(navbarSelections.myPets) }]}>
          My Pets
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BookingScreen")}
      >
        {checkCurrSelection(navbarSelections.booking) ?
        <BookNavIconSelected /> : <BookNavIcon />}
        <Text
          style={[styles.buttonText, { color: iconColor(navbarSelections.booking) }]}
        >
          Book
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AboutUsScreen")}
      >
        {checkCurrSelection(navbarSelections.info) ?
        <InfoNavIconSelected /> : <InfoNavIcon />}
        <Text
          style={[styles.buttonText, { color: iconColor(navbarSelections.info) }]}
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
          color={iconColor(navbarSelections.settings)}
        />
        <Text
          style={[styles.buttonText, { color: iconColor(navbarSelections.settings) }]}
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
