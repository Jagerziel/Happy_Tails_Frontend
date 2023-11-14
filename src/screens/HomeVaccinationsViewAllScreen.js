// Import React
import React, { useEffect, useMemo, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Components
import Navigation from "../components/shared/Navigation.js";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";
import ReturnArrowSVG from "../assets/return_arrow_blue.svg"
import { sortByDateAndTime } from "../data/functions/sortData.js";

// State Management
import { useSelector, useDispatch } from "react-redux";

function HomeVaccinationsViewAllScreen(props) {
    const [ selectedPetID, setSelectedPetID ] = useState("")

    // Redux 
    const dispatch = useDispatch(); // useDispatch
    const petData = useSelector((state) => state.petData.data);
    const vaccinationsData = useSelector((state) => state.vaccinationsData.data);

    const filteredVaccinations = useMemo(() => {
        return vaccinationsData.filter((item) => item['pet_id'] === selectedPetID)
    }, [selectedPetID])

    console.log(filteredVaccinations)

    useEffect(() => {
        if (petData.length > 0) setSelectedPetID(petData[0]["_id"])
    }, [])
    // console.log(selectedPetID)
    // Navigation
    const navigation = useNavigation();
    const route = useRoute();

    function handleReturnToPrev () {
        navigation.navigate("HomeScreen")
    }

    function handlePetSelection () {
        
    }

    return (
        <SafeAreaView style={[styleMaster.parent, styles.container]}>
            <View style={[styleMaster.subParent, styles.subContainer]}>
                <View style={styles.returnContainer}>
                    <TouchableOpacity onPress={() => handleReturnToPrev()}>
                        <ReturnArrowSVG />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={[styleMaster.defaultFont, styles.headerText]}>Vaccination</Text>
                </View>






            </View>
        </SafeAreaView>
    );
}

export default HomeVaccinationsViewAllScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grayscale06,
    },
    subContainer: {
        // borderWidth: 2,
        display: "flex",
        alignItems: "center",
        paddingLeft: scale_mod(16),
        paddingRight: scale_mod(16),
    },
        returnContainer: {
        alignSelf: 'flex-start',
        paddingBottom: scale_mod(12),
    },
        headerContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        paddingBottom: scale_mod(24),
        alignSelf: "flex-start",
    },
        headerText: {
        fontSize: scale_V(32),
        fontFamily: "RalewayBold",
    },
})