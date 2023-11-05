// Import React
import React, { useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";


// Import Constants
import { styleMaster } from "../../../constants/stylesMaster.js";
import { colors } from "../../../constants/colorPalette.js";
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling.js";

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton.js";
import TextInputField from "../../shared/TextInputField.js";
import SymptomsItem from "./SymptomsItem.js";
import TextInputFieldCustom from "../../shared/TextInputFieldCustom.js";
import ReturnArrowSVG from "../../../assets/return_arrow_blue.svg";
import PaperClipSVG from "../../../assets/paperclip.svg"

function Booking01( { bookComponent, setBookComponent, bookingData, setBookingData, symptoms, setSymptoms } ) {
    const [ disableNext, setDisableNext ] = useState(true)
    const [ notes, setNotes ] = useState("")


    function handleReturnToPrev () {
        setBookComponent({...bookComponent, "BookingMain": true, "Booking01": false}) // navigate
    }

    async function handleNext () {
        await setBookComponent({...bookComponent, "Booking01": false, "Booking02": true}) // navigate

        /*
        Store the title in typeEntry.  Loop through the symptoms and pull all selected symptoms to be included in the title.
        */
        let typeEntry = "" 
        
        for (let i = 0; i < symptoms.length; i++) {
            if (symptoms[i].status === true) {
                typeEntry += `${symptoms[i].name}, `
            }
        }
        
        typeEntry = typeEntry.slice(0, typeEntry.length - 2)
        await setBookingData({...bookingData, type: typeEntry, notes: notes})
    }


    useEffect(() => {
        let disabled = true

        for (let i = 0; i < symptoms.length; i++) {
            if (symptoms[i].status === true) {
                disabled = false
                break
            }
        }

        setDisableNext(disabled)
    }, [symptoms, notes])

    function handleTextInput ( key, text ) {
        setNotes(text)
    }

    function handleAttach () {
        Alert.alert(`Under Construction`,`Add an attachment feature coming soon!`)
    }
    // console.log(bookingData)

    return (
        <SafeAreaView style={[styles.container, styleMaster.parent]}>
            <View style={[styleMaster.subParent, styles.subContainer]}>
                <View>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity  
                            style={styles.returnContainer} 
                            onPress={() => handleReturnToPrev()}
                        >
                            <ReturnArrowSVG />
                        </TouchableOpacity>
                        <Text style={[styleMaster.defaultFont, styles.headerText]}>
                            Booking Appointment
                        </Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={[styleMaster.defaultFont, styles.titleText]}>How can we help?</Text>
                    </View>
                    <View style={styles.symptomsParentContainer}>
                        <FlatList
                            keyExtractor={(symptoms) => symptoms.idx} // Key
                            data={symptoms} // Data
                            renderItem={(data) => <SymptomsItem data={data} symptoms={symptoms} setSymptoms={setSymptoms}/>} // Component to be rendered
                            contentContainerStyle={styles.symptomsContainer}
                            numColumns={3}
                        />
                    </View>
                    <View style={styles.textInput}>
                        <TextInputFieldCustom 
                            handleTextInput={handleTextInput} 
                            placeholder={"Please provide any details for us to understand it better."} 
                            name={"Not Applicable for Direct Update of String"}
                            width={343} 
                            height={143}
                        />
                    </View>
                    <Text style={[styleMaster.defaultFont, styles.subTitle]}>Attach Documents</Text>
                    <Text style={[styleMaster.defaultFont, styles.subText]}>Please, attach any relevant documents.</Text>
                    <TouchableOpacity style={styles.attachContainer} onPress={handleAttach}>
                        <PaperClipSVG />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <LoginScreenButton
                    text={"Next"}
                    handlePress={() => handleNext()}
                    disabled={disableNext}
                    />
                </View>
            </View>
        </SafeAreaView>
    )

    
}

export default Booking01

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        flex: 1,
        backgroundColor: colors.grayscale06,
      },
      subContainer: {
        display: "flex",
        justifyContent: 'space-between'
      },
      headerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: scale_mod(65),
      },
      returnContainer: {
        // borderWidth: 2,
        width: scale_mod(20)
      },
      headerText: {
        width: '100%',
        includeFontPadding: false,
        textAlign: "center",
        textAlign: "center",
        paddingRight: scale_mod(20), //Offsets space taken by return arrow
        fontFamily: "RalewayBold",
        fontSize: scale_V(17),
      },
      titleContainer: {
        paddingBottom: scale_mod(20), // Prev Assumed Value 40 from docs
      },
      titleText: {
        fontSize: scale_V(26),
        fontFamily: "RalewayBold"
      },
      symptomsParentContainer: {
        width: '100%',
        display: "flex",
      },
      symptomsContainer: {
        // borderWidth: 2,
        flexDirection: 'column', 
        alignSelf: "center"     
      },
      textInput: {
        alignSelf: "center",
        paddingTop: scale_mod(14),
      },    
      subTitle: {
        fontFamily: "RalewayBold",
        fontSize: scale_V(21),
        paddingTop: scale_mod(21),
    },
    subText: {
        fontSize: scale_V(14),
        paddingTop: scale_mod(8),
      },
      attachContainer: {
        paddingTop: scale_mod(18),
        padding: scale_mod(14),
      },
      buttonContainer: {
        alignSelf: "center",
        paddingBottom: scale_mod(34),
      }
})