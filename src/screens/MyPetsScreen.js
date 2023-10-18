import React, { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CommonActions, useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { colors } from "../constants/colorPalette.js";
import {
  scale_H,
  scale_V,
  scale_mod,
} from "../data/functions/normalizeScaling.js";
import { styleMaster } from "../constants/stylesMaster.js";
import { petData } from "../data/testingData/testingData";

// Import Components
import Navigation from "../components/shared/Navigation";
import LoginScreenButton from "../components/shared/LoginScreenButton";
import PetItemMyPets from "../components/screen/PetItemMyPets.js";

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

  // Navigation
  const navigation = useNavigation()
  const route = useRoute()

  const itemSeparator = () => <View style={{ marginVertical: scale_mod(24) }} />; // Gap for Flatlist

  function handleAddPet (target) {
    // navigation.navigate("AddPet01Screen", { 
    //   addPetData: addPetData,
    //   setAddPetData: setAddPetData
    // })
    
    console.log(`${target} button pressed`);
  }

  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
        <View style={[styleMaster.subParent, styles.subContainer]}>
          <View style={styles.headingContainer}>
            <Text style={[styleMaster.defaultFont, styles.heading]}>Your Pets</Text>
          </View>
          <View style={styles.petsContainer}>
            <View>
              <FlatList
                keyExtractor={(petData) => petData.uid} // Key
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
    </SafeAreaView>
  );
}

export default MyPetsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  subContainer: {
    // borderWidth: 2,
    height: '100%',
    width: '100%',
  },
  headingContainer: {
    // borderWidth: 2,
    // borderColor: 'red',
    paddingTop: scale_mod(46),
    paddingBottom: scale_mod(40),
  },
  heading: {
    fontSize: scale_V(32),
    fontFamily: "RalewayBold",
  },
  petsContainer: {
    // borderWidth: 2,
    height: scale_mod(474),
    borderRadius: scale_mod(7),
    marginBottom: scale_mod(24),
  },
  buttonContainer: {
    alignSelf: "center"
  }
});
