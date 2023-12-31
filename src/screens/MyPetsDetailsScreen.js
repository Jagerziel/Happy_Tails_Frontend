// Import React
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { colors } from "../constants/colorPalette.js";
import {
  scale_H,
  scale_V,
  scale_mod,
} from "../data/functions/normalizeScaling.js";
import { months } from "../data/data/data.js";
import ReturnArrow from '../assets/return_arrow_blue.svg'

// Import Components
import Navigation from "../components/shared/Navigation";
import StaticInputField from "../components/shared/StaticInputField.js";
import StaticInputFieldCustom from "../components/shared/StaticInputFieldCustom.js";
import StaticInputFieldArrow from "../components/shared/StaticInputFieldArrow.js";
import LoginScreenButton from "../components/shared/LoginScreenButton.js";
import LoginScreenButtonWhite from "../components/shared/LoginScreenButtonWhite.js";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { updatePetData } from "../store/reducers/petDataReducer.js";
import { updateAppointmentData } from "../store/reducers/appointmentDataReducer.js";
import { updateVaccinationsData, updatedVaccinationsData } from "../store/reducers/vaccinationsDataReducer.js"

// Import API
import { deletePet } from "../server/pet.js";
import { deleteAppointmentsByPet } from "../server/appointment.js";
import { deleteVaccinationsByPet } from "../server/vaccinations.js";

function MyPetsDetailsScreen( { route, navigation } ) {
  const { data } = route.params
  // console.log(data)
  // Redux 
  const dispatch = useDispatch(); // useDispatch
  const petData = useSelector((state) => state.petData.data); // Retrieve Pet Data
  const vaccinationsData = useSelector((state) => state.vaccinationsData.data); // Retrieve Vaccinations data
  const appointmentData = useSelector((state) => state.appointmentData.data); // Retrieve Appointment data

  function arrowPrevious () {
    navigation.navigate('MyPetsScreen')
  }

  function arrowNext ( path ) {
    console.log(`${path} button pressed`)
  }
  async function deactivate ( command ) {
    /* 
    **************************************************
    ERASE STORED DATA FOR PET, ASSOCIATED VACCINATIONS AND APPOINTMENTS
    **************************************************
    */
    console.log(`${command} button pressed`)
    const petIDToBeDeactivated = data["_id"]


    // // Handle Deletion of Pet Data
    const updatedPetData = await petData.filter((data) => data["_id"] !== petIDToBeDeactivated) // Filter data to be replaced in Redux
    await deletePet(petIDToBeDeactivated) // Erase from database
    dispatch(updatePetData(updatedPetData)) // Erase from Redux

    // // Handle Deletion of All Associated Appointments
    const updatedAppointmentData = await appointmentData.filter((data) => data["pet_id"] !== petIDToBeDeactivated) // Filter data to be replaced in Redux
    await deleteAppointmentsByPet(petIDToBeDeactivated) // Erase from database
    dispatch(updateAppointmentData(updatedAppointmentData)) // Erase from Redux

    // Handle Deletion of All Associated Vaccinations
    const updatedVaccinationsData = await vaccinationsData.filter((data) => data["pet_id"] !== petIDToBeDeactivated) // Filter data to be replaced in Redux
    await deleteVaccinationsByPet(petIDToBeDeactivated) // Erase from database
    dispatch(updateVaccinationsData(updatedVaccinationsData)) // Erase from redux

    // Navigate back to MyPetsScreen
    navigation.navigate("MyPetsScreen")
  }

  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
      <ScrollView style={[styleMaster.subParent]}>
        <View>
          <TouchableOpacity onPress={() => arrowPrevious()}>
            <ReturnArrow />
          </TouchableOpacity>
        </View>
        <View style={styles.petContainer}>
        <View>
                {
                    data.type === "Dog" ?
                    <Image source={require(`../assets/temp_pet_pic_dog.jpg`)} style={styles.petImg}/> :
                    <Image source={require(`../assets/temp_pet_pic_cat.jpg`)} style={styles.petImg}/>
                }
            </View>
            <View style={styles.textContainer}>
                <Text style={[styleMaster.defaultFont, styles.text]}>{data.name}</Text>
            </View>
        </View>
        <View>
          <Text style={[styleMaster.defaultFont, styles.subHeader]}>Name</Text>
          <StaticInputField name={data.name} />
        </View>
        <View>
          <Text style={[styleMaster.defaultFont, styles.subHeader]}>Species</Text>
          <StaticInputField name={data.type} />
        </View>
        <View>
          <Text style={[styleMaster.defaultFont, styles.subHeader]}>Primary Color</Text>
          <StaticInputField name={data.primary_color} />
        </View>
        <View>
          <Text style={[styleMaster.defaultFont, styles.subHeader]}>Gender</Text>
          <StaticInputField name={data.sex} />
        </View>
        <View>
          <Text style={[styleMaster.defaultFont, styles.subHeader]}>Is Your Pet Spayed?</Text>
          <StaticInputField name={data.spayed} />
        </View>
        <View>
          <Text style={[styleMaster.defaultFont, styles.subHeader]}>Weight</Text>
          <StaticInputField name={data.weight} />
        </View>
        {/* <View>
          <Text style={[styleMaster.defaultFont, styles.subHeader]}>Microchip</Text>
          <StaticInputField name={data.microchip} />
        </View> */}
        <View>
          <Text style={[styleMaster.defaultFont, styles.subHeader]}>Date of Birth</Text>
          <View style={styles.dateContainer}>
            <StaticInputFieldCustom name={data.dob.slice(0,4)} width={100} />
            <StaticInputFieldCustom name={months[data.dob.slice(5,7)]} width={160} />
            <StaticInputFieldCustom name={data.dob.slice(8,10)} width={100} />
          </View>
        </View>
        <View style={styles.arrowInputFieldGap}>
            <StaticInputFieldArrow name={"Medications"} arrowNext={() => arrowNext('Medications')} path={'Medications'} svg={"PillIcon"}/>
        </View>
        <View style={styles.arrowInputFieldGap}>
            <StaticInputFieldArrow name={"Labratory"} arrowNext={() => arrowNext('Labratory')} path={'Labratory'} svg={"LabratoryIcon"}/>
        </View>
        <View style={styles.arrowInputFieldGap}>
            <StaticInputFieldArrow name={"Vaccination"} arrowNext={() => arrowNext('Vaccination')} path={'Vaccination'} svg={"VaccinationIcon"}/>
        </View>
        <View style={styles.arrowInputFieldGap}>
            <StaticInputFieldArrow name={"Allergies"} arrowNext={() => arrowNext('Allergies')} path={'Allergies'} svg={"AllergiesIcon"}/>
        </View>
        <View style={styles.arrowInputFieldGap}>
            <StaticInputFieldArrow name={"Invoices"} arrowNext={() => arrowNext('Invoices')} path={'Invoices'} svg={"InvoicesIcon"}/>
        </View>
        <View style={styles.arrowInputFieldGap}>
            <StaticInputFieldArrow name={"Clinic Visits History"} arrowNext={() => arrowNext('Clinic Visits History')} path={'Clinic Visits History'} svg={"ClinicIcon"}/>
        </View>
        <View style={styles.deactivateContainer}>
          <LoginScreenButtonWhite text={'Deactivate Profile'} handlePress={() => deactivate('Deactivate')}/>
        </View>
        {/* Override Nav Bar */}
        <View style={{paddingTop: 120}}></View>
      </ScrollView>
      <Navigation />
    </SafeAreaView>
  );
}

export default MyPetsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
  },
  petContainer: {
    // borderWidth: 2,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: scale_mod(34),
    paddingBottom: scale_mod(8),
  },
  petImg: {
    height: scale_mod(100),
    width: scale_mod(100),
    resizeMode: 'cover',
    borderRadius: scale_mod(7),
  },
  textContainer: {
    paddingLeft: scale_mod(16),
    justifyContent: 'center',
  },
  text: {
    fontSize: scale_V(21),
    fontFamily: 'RalewaySemiBold',
    color: colors.darkBlue02,
  },
  subHeader: {
    fontSize: scale_V(14),  
    paddingTop: scale_mod(16),
    paddingBottom: scale_mod(8),
    fontFamily: "RalewayBold",
    color: colors.grayscale02,
  },
  dateContainer: {
    // borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: "space-between",
    aspectRatio: 6.83/1,
    marginBottom: scale_mod(12),
  },
  arrowInputFieldGap: {
    paddingBottom: scale_mod(12)
  },
  deactivateContainer: {
    width: '100%',
    display: "flex",
    alignItems: 'center',
    paddingTop: scale_mod(20),
  }
});
