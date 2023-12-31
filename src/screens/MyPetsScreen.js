import React, { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

// Import Constants
import { colors } from "../constants/colorPalette.js";
import {
  scale_H,
  scale_V,
  scale_mod,
} from "../data/functions/normalizeScaling.js";
import { styleMaster } from "../constants/stylesMaster.js";

// Import Components
import Navigation from "../components/shared/Navigation";
import LoginScreenButton from "../components/shared/LoginScreenButton";
import PetItemMyPets from "../components/screen/PetItemMyPets.js";
import AddPet01 from "../components/screen/addPet/AddPet01.js";
import AddPet02 from "../components/screen/addPet/AddPet02.js";
import AddPet03 from "../components/screen/addPet/AddPet03.js";
import AddPet04 from "../components/screen/addPet/AddPet04.js";
import AddPet05 from "../components/screen/addPet/AddPet05.js";
import AddPet06 from "../components/screen/addPet/AddPet06.js";
import AddPet07 from "../components/screen/addPet/AddPet07.js";
import AddPet08 from "../components/screen/addPet/AddPet08.js";
import AddPet09 from "../components/screen/addPet/AddPet09.js";
import AddPet10 from "../components/screen/addPet/AddPet10.js";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { updatePetData } from "../store/reducers/petDataReducer.js";

function MyPetsScreen(props) {
  const [ addPetData ,  setAddPetData ] = useState({
    name: "",
    type: "",
    dob: "",
    breed: "",
    image: "",
    sex: "",
    weight: "",
    allergies: "",
    medications: "",
    laboratory: "",
    microchip: "",
    visit_history: "",
    primary_color: "",
    notes: "",
    primary_vet: "",
    user_id: "",
    spayed: "", //NEWLY ADDED FIELD
  })

  const [ addPetComponents , setAddPetsComponents ] = useState({
    MyPetsScreen: true,
    AddPet01: false,
    AddPet02: false,
    AddPet03: false,
    AddPet04: false,
    AddPet05: false,
    AddPet06: false,
    AddPet07: false,
    AddPet08: false,
    AddPet09: false,
    AddPet10: false,
  })

  // React Redux
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.userData.data)
  const petData = useSelector((state) => state.petData.data);
  // console.log(petData)
  const itemSeparator = () => <View style={{ marginVertical: scale_mod(12) }} />; // Gap for Flatlist

  function handleAddPet (target) {
    setAddPetsComponents({...addPetComponents, MyPetsScreen: false, AddPet01: true})
  }

  return (
    <>
      {addPetComponents.MyPetsScreen &&
      <SafeAreaView style={[styles.container, styleMaster.parent]}>
        <View style={[styleMaster.subParent, styles.subContainer]}>
          <View style={styles.headingContainer}>
            <Text style={[styleMaster.defaultFont, styles.heading]}>Your Pets</Text>
          </View>
          <View style={styles.petsContainer}>
            <View>
              <FlatList
                keyExtractor={(petData) => petData["_id"]} // Key
                ItemSeparatorComponent={itemSeparator} // Gap between items
                data={petData} // Data
                renderItem={(data) => <PetItemMyPets data={data}/>} // Component to be rendered
                showsVerticalScrollIndicator = { false } // Removes Scrollbar
                scrollEnabled={ true } // Enables Scrolling
                vertical // Key to making flatlist scrollable
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <LoginScreenButton
              text={"Add a new Pet"}
              handlePress={() => handleAddPet("Add a new Pet")}
            />
          </View>
        </View>
        <Navigation />
      </SafeAreaView>}
      {addPetComponents.AddPet01 && 
      <AddPet01 addPetData={addPetData} setAddPetData={setAddPetData} addPetComponents={addPetComponents} setAddPetsComponents={setAddPetsComponents}/>}
      {addPetComponents.AddPet02 && 
      <AddPet02 addPetData={addPetData} setAddPetData={setAddPetData} addPetComponents={addPetComponents} setAddPetsComponents={setAddPetsComponents}/>}
      {addPetComponents.AddPet03 && 
      <AddPet03 addPetData={addPetData} setAddPetData={setAddPetData} addPetComponents={addPetComponents} setAddPetsComponents={setAddPetsComponents}/>}
      {addPetComponents.AddPet04 && 
      <AddPet04 addPetData={addPetData} setAddPetData={setAddPetData} addPetComponents={addPetComponents} setAddPetsComponents={setAddPetsComponents}/>}
      {addPetComponents.AddPet05 && 
      <AddPet05 addPetData={addPetData} setAddPetData={setAddPetData} addPetComponents={addPetComponents} setAddPetsComponents={setAddPetsComponents}/>}
      {addPetComponents.AddPet06 && 
      <AddPet06 addPetData={addPetData} setAddPetData={setAddPetData} addPetComponents={addPetComponents} setAddPetsComponents={setAddPetsComponents}/>}
      {addPetComponents.AddPet07 && 
      <AddPet07 addPetData={addPetData} setAddPetData={setAddPetData} addPetComponents={addPetComponents} setAddPetsComponents={setAddPetsComponents}/>}
      {addPetComponents.AddPet08 && 
      <AddPet08 addPetData={addPetData} setAddPetData={setAddPetData} addPetComponents={addPetComponents} setAddPetsComponents={setAddPetsComponents}/>}
      {addPetComponents.AddPet09 && 
      <AddPet09 addPetData={addPetData} setAddPetData={setAddPetData} addPetComponents={addPetComponents} setAddPetsComponents={setAddPetsComponents}/>}
      {addPetComponents.AddPet10 && 
      <AddPet10 
        addPetData={addPetData} 
        setAddPetData={setAddPetData} 
        addPetComponents={addPetComponents} 
        setAddPetsComponents={setAddPetsComponents} 
        userData={userData} 
        petData={petData}
        updatePetData={updatePetData}  
      />}   
    </>
  );
}

export default MyPetsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
  },
  subContainer: {
    // borderWidth: 2,
    height: '100%',
    width: '100%',
  },
  headingContainer: {
    // borderWidth: 2,
    // borderColor: 'red',
    // paddingTop: scale_mod(46),
    paddingBottom: scale_mod(24),
  },
  heading: {
    fontSize: scale_V(32),
    fontFamily: "RalewayBold",
    color: colors.darkBlue02,
  },
  petsContainer: {
    // borderWidth: 2,
    height: scale_mod(528),
    borderRadius: scale_mod(7),
    marginBottom: scale_mod(24),
  },
  buttonContainer: {
    // paddingTop: scale_mod(10),
    alignSelf: "center"
  }
});
