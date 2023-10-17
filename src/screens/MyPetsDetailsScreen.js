import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "../components/shared/Navigation";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { colors } from "../constants/colorPalette.js";
import {
  scale_H,
  scale_V,
  scale_mod,
} from "../data/functions/normalizeScaling.js";

// Import Components
import StaticInputField from "../components/shared/StaticInputField.js";

function MyPetsDetailsScreen( { route, navigation } ) {
  const { data } = route.params
  console.log(data)

  return (
    <SafeAreaView style={[styles.container, styleMaster.parent]}>
      <View style={[styleMaster.subParent]}>
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
        <StaticInputField name={'TESTING'} />
      </View>
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
  }
});
