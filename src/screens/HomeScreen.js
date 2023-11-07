// Import React
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

// Import Components
import UserProfileHome from "../components/screen/UserProfileHome.js";
import PromotionsHome from "../components/screen/PromotionsHome.js";
import AppointmentsHome from "../components/screen/AppointmentsHome.js";
import VaccinationsHome from "../components/screen/VaccinationsHome.js";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { colors } from "../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { Dimensions } from 'react-native'

// State Management
import { useSelector, useDispatch } from "react-redux";

function HomeScreen(props) {
  // Redux - Get All Loaded Data
  const userData = useSelector((state) => state.userData.data);
  const petData = useSelector((state) => state.petData.data);
  const vaccinationsData = useSelector((state) => state.vaccinationsData.data);
  const appointmentData = useSelector((state) => state.appointmentData.data);

  // Shortened Information to pass as props to get Pet Names tied to Appointments and Vaccinations
  const petIDs = {}
  for (let i = 0; i < petData.length; i++) {
    petIDs[petData[i]["_id"]] = [petData[i]["name"], petData[i]["type"]] 
  }
  // console.log(petIDs)

  return (
    <SafeAreaView style={[styleMaster.parent, styles.container]}>
        <ScrollView style={[ styles.subContainer ]}>
            <UserProfileHome userData={userData} />
            <PromotionsHome />
            <AppointmentsHome 
              petIDs={petIDs} 
              appointmentData={appointmentData} 
            />
            <VaccinationsHome 
              petIDs={petIDs} 
              vaccinationsData={vaccinationsData} 
            />
            <View style={styles.navPaddingShadow}>
            </View>
        </ScrollView>
      <Navigation />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
  },
  subContainer: {

    maxHeight: Dimensions.get('window').height,
    padding: scale_mod(13),
    display: "flex",
    flexDirection: "column",
  },
  navPaddingShadow: {
    // borderWidth: 2,
    // borderColor: '#CCCCCC',
    height: scale_mod(80),
    zIndex: -1,
  }
});
