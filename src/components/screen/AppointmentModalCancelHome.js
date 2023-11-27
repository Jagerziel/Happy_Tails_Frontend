// Import React
import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Import Constants
import { scale_H, scale_V, scale_mod} from '../../data/functions/normalizeScaling.js'
import { styleMaster } from "../../constants/stylesMaster.js";
import { colors } from "../../constants/colorPalette.js";
import WarningSVG from '../../assets/warning_orange.svg'
import { weekday } from "../../data/data/data.js";

// Import Components
import LoginScreenButtonCustom from "../shared/LoginScreenButtonCustom.js";
import LoginScreenButtonWhiteCustom from "../shared/LoginScreenButtonWhiteCustom.js";

// State Management
import { useSelector, useDispatch } from "react-redux";
import { updateAppointmentData } from "../../store/reducers/appointmentDataReducer.js";

// Import API
import { deleteAppointment } from "../../server/appointment.js";

function AppointmentModalCancelHome( { modalController, setModalController, modalName, currPetSelectionNameType, bookingData } ) {
    // Handle Date Objects
    const reformatDate = `${bookingData.date.slice(5,7)}/${bookingData.date.slice(8, 10)}/${bookingData.date.slice(0,4)}`
    const dateForParse = bookingData.date.replaceAll("/","-")
    const convertDate = new Date(Date.parse(`${dateForParse}T00:00:00`))
    const dayOfWeek = weekday[convertDate.getDay()]

    // Navigation
    const navigation = useNavigation()
    const route = useRoute()
    
    // Redux 
    const dispatch = useDispatch(); // useDispatch
    const appointmentData = useSelector((state) => state.appointmentData.data); // Retrieve Appointment data


    // console.log(bookingData['_id'])
    // console.log(appointmentData.filter((data) => data['_id'] !== bookingData['_id']))
    async function handleCancel () {
        console.log('Cancel Button Pressed to remove data')
        setModalController({...modalController, [modalName]: false, cancelConfirmButton: true })
        
        /*  
            REMOVE DATA FROM DB AND REDUX
        */
        await deleteAppointment(bookingData['_id']) // Erase from database
        
        const updatedAppointmentData = await appointmentData.filter((data) => data['_id'] !== bookingData['_id'])
        
        
        dispatch(updateAppointmentData(updatedAppointmentData))
        
        console.log('cancelling')
    }

    function handleReturn () {
        setModalController({...modalController, [modalName]: false})
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalController[modalName]}
            onRequestClose={() => 
                setModalController({...modalController, [modalName] : false})}
        >
            <View style={styles.modalPositioning}>
                <View style={styles.modal}>
                    <View style={styles.contentContainer}>
                        <WarningSVG />
                        <View style={styles.textHolderContainer}>
                            <View style={[styles.textHolder]}>
                                <Text style={[styleMaster.defaultFont, styles.title]}>
                                    {`Are you sure you want to cancel ${currPetSelectionNameType[0]}'${currPetSelectionNameType[0][currPetSelectionNameType[0].length - 1] === 's' ? "" : 's'} appointment?`}
                                </Text>
                            </View>
                            <View style={styles.textHolderSubcontainer}>
                                <View style={[styles.textHolder]}>
                                    <Text style={[styleMaster.defaultFont, styles.content]}>
                                        {
                                            `on ${dayOfWeek}, ${reformatDate} at ${bookingData.time}`
                                        }
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <LoginScreenButtonCustom
                            text={"Cancel Appointment"}
                            handlePress={() => handleCancel()}
                            disabled={false}
                            width={297}
                        />
                        <View style={styles.buttonSpacer}></View>
                        <LoginScreenButtonWhiteCustom
                            text={"Go Back"}
                            handlePress={() => handleReturn()}
                            width={297}
                        />
                    </View>
                </View>
            </View>
            
        </Modal>
    );
}

export default AppointmentModalCancelHome;

const styles = StyleSheet.create({
    modalPositioning: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.20)',
    },
    modal : {
        // borderWidth: 2,
        backgroundColor: colors.white,
        width: scale_mod(328),
        aspectRatio: 0.816/1,
        paddingTop: scale_mod(34),
        paddingBottom: scale_mod(34),
        paddingLeft: scale_mod(16),
        paddingRight: scale_mod(16),
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    contentContainer: {
        // borderWidth: 2,
        flex: 1,
        width: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textHolderContainer: {
        // borderWidth: 2,
        width: '100%',
        flex: 1,
        marginTop: scale_mod(24),
    },
    textHolderSubcontainer: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
    },
    textHolder: {
        width: '100%',
    },
    title: {
        // borderWidth: 2,
        fontFamily: 'RalewayBold',
        fontSize: scale_V(21),
    },
    content: {
        // borderWidth: 2,
        fontFamily: 'RobotoLight',
        fontSize: scale_V(17),
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
    },
    buttonSpacer: {
        paddingTop: scale_mod(16),
    },
})