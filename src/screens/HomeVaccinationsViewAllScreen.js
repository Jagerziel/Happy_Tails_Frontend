// Import React
import React, { useEffect, useMemo, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Components
import Navigation from "../components/shared/Navigation.js";
import VaccinationsViewAllItemHome from "../components/screen/VaccinationsViewAllItemHome .js";
import VaccinationsViewAllVaccineItemHome from "../components/screen/VaccinationsViewAllVaccineItemHome.js";

// Import Constants
import { styleMaster } from "../constants/stylesMaster.js";
import { scale_H, scale_V, scale_mod } from "../data/functions/normalizeScaling.js";
import { colors } from "../constants/colorPalette.js";
import ReturnArrowSVG from "../assets/return_arrow_blue.svg"
import { sortByDate } from "../data/functions/sortData.js";

// State Management
import { useSelector, useDispatch } from "react-redux";

function HomeVaccinationsViewAllScreen(props) {
    const [ selectedPetID, setSelectedPetID ] = useState("")

    // Redux 
    const dispatch = useDispatch(); // useDispatch
    const petData = useSelector((state) => state.petData.data);
    const vaccinationsData = useSelector((state) => state.vaccinationsData.data);

    const filteredVaccinations = useMemo(() => {
        data = vaccinationsData.filter((item) => item['pet_id'] === selectedPetID)
        return sortByDate(data, 'expiration_date', 'all')
    }, [selectedPetID])

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

    function handlePetSelection ( pet_id ) {
        setSelectedPetID(pet_id)
    }

    // Flat List Separators
    const itemSeparator = () => <View style={{ marginHorizontal: scale_mod(6) }} />; // Gap for Flatlist for Pet Selection
    const itemSeparatorVaccine = () => <View style={{ marginVertical: scale_mod(6) }} />; // Gap for Flatlist for Vaccine Items

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
                <View style={styles.petSelectionContainer}>
                    <FlatList 
                        keyExtractor={(petData) => petData["_id"]}
                        ItemSeparatorComponent={itemSeparator} // Gap between items
                        data={petData} // Data
                        renderItem={(data) => 
                            <VaccinationsViewAllItemHome 
                                data={data}
                                selectedPetID={selectedPetID}
                                handlePetSelection={handlePetSelection}
                            />
                        }
                        showsHorizontalScrollIndicator = { false } // Removes Scrollbar
                        scrollEnabled={ true } // Enables Scrolling
                        horizontal // Key to making flatlist scrollable
                    />
                </View>
                <View style={styles.vaccinationDisplayContainer}>
                    <View style={styles.vaccinationTitleContainer}>
                        <Text style={[styleMaster.defaultFont, styles.vaccinationTitleFormat, styles.vaccinationTitleSection01]}>Type</Text>
                        <Text style={[styleMaster.defaultFont, styles.vaccinationTitleFormat, styles.vaccinationTitleSection02]}>Date Given</Text>
                        <Text style={[styleMaster.defaultFont, styles.vaccinationTitleFormat, styles.vaccinationTitleSection02]}>Date Due</Text>
                    </View>
                    <FlatList 
                        keyExtractor={(filteredVaccinations) => filteredVaccinations["_id"]}
                        ItemSeparatorComponent={itemSeparatorVaccine} // Gap between items
                        data={filteredVaccinations} // Data
                        renderItem={(data) => 
                            <VaccinationsViewAllVaccineItemHome 
                                data={data}
                            />
                        }
                        showsVerticalScrollIndicator = { false } // Removes Scrollbar
                        scrollEnabled={ true } // Enables Scrolling
                        vertical // Key to making flatlist scrollable
                    />
                </View>
            </View>
            <Navigation />
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
        flex: 1,
        display: "flex",
        alignItems: "center",
        paddingLeft: scale_mod(16),
        paddingRight: scale_mod(16),
        marginBottom: scale_mod(80),
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
        paddingBottom: scale_mod(40),
        alignSelf: "flex-start",
    },
        headerText: {
        fontSize: scale_V(32),
        fontFamily: "RalewayBold",
    },
    petSelectionContainer: {
        // borderWidth: 2,
        height: scale_mod(38),
        marginBottom: scale_mod(40),
    },
    vaccinationDisplayContainer: {
        // borderWidth: 2,
        width: '100%',
        borderRadius: 8,
        paddingTop: scale_mod(24),
        paddingBottom: scale_mod(24),
        paddingLeft: scale_mod(16),
        paddingRight: scale_mod(16),
        backgroundColor: colors.white,
        minHeight: scale_mod(300),
        maxHeight: scale_mod(500)
    }, 
    vaccinationTitleContainer: {
        display: 'flex',
        flexDirection: "row",
        width: '100%',
        paddingBottom: scale_mod(12.5),
        marginBottom: scale_mod(12.5),
        borderBottomWidth: 1,
        borderBottomColor: colors.greyscale08,
    },
    vaccinationTitleFormat: {
        fontFamily: 'RalewayBold',
        fontSize: scale_V(15),
    },
    vaccinationTitleSection01: {
        // borderWidth: 2,
        width: '40%',
    },
    vaccinationTitleSection02: {
        // borderWidth: 2,
        width: '30%',
    },
})