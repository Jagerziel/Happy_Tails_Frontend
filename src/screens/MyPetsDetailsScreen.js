import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { colors } from "../constants/colorPalette.js";
import {
  scale_H,
  scale_V,
  scale_mod,
} from "../data/functions/normalizeScaling.js";
import { months } from "../data/data/data.js";

// Import Components
import StaticInputField from "../components/shared/StaticInputField.js";
import StaticInputFieldCustom from "../components/shared/StaticInputFieldCustom.js";
import StaticInputFieldArrow from "../components/shared/StaticInputFieldArrow.js";
import LoginScreenButton from "../components/shared/LoginScreenButton.js";

function MyPetsDetailsScreen( { route, navigation } ) {
  const { data } = route.params
  // console.log(data)

  function arrowNext ( path ) {
    console.log(`${path} button pressed`)
  }

  function deactivate ( command ) {
    /* 
    **************************************************
    ERASE STORED DATA FOR PET
    **************************************************
    */
    console.log(`${command} button pressed`)
  }

  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
      <ScrollView style={[styleMaster.subParent]}>
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
        <View>
          <Text style={[styleMaster.defaultFont, styles.subHeader]}>Microchip</Text>
          <StaticInputField name={data.microchip} />
        </View>
        <View>
          <Text style={[styleMaster.defaultFont, styles.subHeader]}>Date of Birth</Text>
          <View style={styles.dateContainer}>
            <StaticInputFieldCustom name={data.dob.slice(0,4)} width={100} />
            <StaticInputFieldCustom name={months[data.dob.slice(5,7)]} width={160} />
            <StaticInputFieldCustom name={data.dob.slice(8,10)} width={100} />
          </View>
        </View>
        <View style={styles.arrowInputFieldGap}>
            <StaticInputFieldArrow name={"Vaccination"} arrowNext={() => arrowNext('Vaccination')} path={'Vaccination'}/>
        </View>
        <View style={styles.arrowInputFieldGap}>
            <StaticInputFieldArrow name={"Labratory"} arrowNext={() => arrowNext('Labratory')} path={'Labratory'}/>
        </View>
        <View style={styles.arrowInputFieldGap}>
            <StaticInputFieldArrow name={"Invoices"} arrowNext={() => arrowNext('Invoices')} path={'Invoices'}/>
        </View>
        <View style={styles.arrowInputFieldGap}>
            <StaticInputFieldArrow name={"Clinic Visits History"} arrowNext={() => arrowNext('Clinic Visits History')} path={'Clinic Visits History'}/>
        </View>
        <View style={styles.deactivateContainer}>
          <LoginScreenButton text={'Deactivate Profile'} handlePress={() => deactivate('Deactivate')}/>
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
    backgroundColor: "#eee",
  },
  petContainer: {
    // borderWidth: 2,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: scale_mod(62),
    paddingBottom: scale_mod(24),
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
    fontSize: scale_V(26),
    fontFamily: 'RalewayBold'
  },
  subHeader: {
    fontSize: scale_V(14),  
    paddingTop: scale_mod(4),
    paddingBottom: scale_mod(10),
  },
  dateContainer: {
    // borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: "space-between",
    aspectRatio: 6.83/1,
  },
  arrowInputFieldGap: {
    paddingBottom: scale_mod(8)
  },
  deactivateContainer: {
    width: '100%',
    display: "flex",
    alignItems: 'center',
    paddingTop: scale_mod(26),
  }
});
