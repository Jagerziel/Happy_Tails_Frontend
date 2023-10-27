// Import React
import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import TextInputField from "../../shared/TextInputField.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";


function AddPet02( { addPetData, setAddPetData, addPetComponents, setAddPetsComponents } ) {
  console.log(addPetData)

  const [ imgSelected, setImgSelected ] = useState({
    dog: true,
    cat: false
  })
  
  useEffect(() => { 
    setAddPetData({...addPetData, type: "Dog"}) 
  }, [])
  
  function handleReturnToPrev () {
    setAddPetsComponents({...addPetComponents, AddPet01: true, AddPet02: false})
  }

  function handleNext () {
    setAddPetsComponents({...addPetComponents, AddPet02: false, AddPet03: true})
  }

  function handleSkip (key) {
    setAddPetData({...addPetData, [key]: ""})
    setAddPetsComponents({...addPetComponents, AddPet02: false, AddPet03: true})
  }

  function handlePetSelect ( type ) {
    if (type === "Dog") {
      setAddPetData({...addPetData, type: "Dog"})
      setImgSelected({dog: true, cat: false})
      console.log(`Dog button pressed`)
    }
    if (type === "Cat") {
      setAddPetData({...addPetData, type: "Cat"})
      setImgSelected({dog: false, cat: true})
      console.log(`Cat button pressed`)
    }
  }

  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
      <View style={[styleMaster.subParent, styles.subContainer]}>
        <View style={styles.returnContainer}>
          <TouchableOpacity onPress={() => handleReturnToPrev()}>
            <ReturnArrowSVG />
          </TouchableOpacity>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{`What a cute name. Is ${addPetData.name} a cat or a dog?`}</Text>
        </View>
        <View style={styles.petSelectContainer}>
          <TouchableOpacity 
            onPress={() => handlePetSelect("Dog")}
          >
            <Image 
              source={require('../../../assets/temp_pet_pic_dog.jpg')} 
              style={[styles.imgProperties, {
                borderWidth: imgSelected.dog ? scale_mod(5) : 1,
                borderColor: imgSelected.dog ? colors.primaryFade : colors.grayscale06,
              }]}/>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => handlePetSelect("Cat")}
          >
            <Image 
              source={require('../../../assets/temp_pet_pic_cat.jpg')} 
              style={[styles.imgProperties, {
                borderWidth: imgSelected.cat ? scale_mod(5) : 1,
                borderColor: imgSelected.cat ? colors.primaryFade : colors.grayscale06,
              }]}/>
          </TouchableOpacity>
          
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <LoginScreenButton 
          text={'Next'}
          handlePress={() => handleNext()}
        />
        <TouchableOpacity 
          style={styles.skipContainer} 
          onPress={() => handleSkip('type')}
        >
          <Text style={[styleMaster.defaultFont, styles.skipText]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AddPet02;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale06,
  },
  subContainer: {
    display: "flex",
    alignItems: "center",
  },
  returnContainer: {
    alignSelf: 'flex-start',
    paddingTop: scale_mod(23),
    paddingLeft: scale_mod(15),
  },
  headingContainer: {
    // borderWidth: 2,
    width: scale_mod(328),
    paddingTop: scale_mod(40),
    paddingBottom: scale_mod(80),
  },
  heading: {
    fontFamily: 'RalewayBold',
    fontSize: scale_V(26),
    color: colors.black,
    textAlign: 'left',
  },
  petSelectContainer: {
    // borderWidth: 2,
    width: '70%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  bottomContainer: {
    // borderWidth: 2,
    display: "flex",
    alignItems: "center",
    paddingBottom: scale_mod(32),
  },
  skipContainer: {
    paddingTop: scale_mod(24),
  },
  skipText: {
    color: colors.secondaryFade
  },
  imgProperties: {
    height: scale_mod(100),
    width: scale_mod(100),
    resizeMode: 'contain',
    borderRadius: scale_mod(8),
  }
});

