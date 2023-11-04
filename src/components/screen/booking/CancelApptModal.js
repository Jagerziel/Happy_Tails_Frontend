// Import React
import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

// Import Constants
import { scale_H, scale_V, scale_mod } from "../../../data/functions/normalizeScaling";
import { styleMaster } from "../../../constants/stylesMaster";
import { colors } from "../../../constants/colorPalette";
import WarningSVG from '../../../assets/warning.svg'

// Import Components
import LoginScreenButton from "../../shared/LoginScreenButton";
import LoginScreenButtonCustom from "../../shared/LoginScreenButtonCustom";
import LoginScreenButtonWhite from "../../shared/LoginScreenButtonWhite";

function CancelApptModal( { modalController, setModalController, modalName } ) {

    function handleCancel () {
        console.log('Cancel button pressed')
    }

    function handleReturn () {
        console.log('Return button pressed')
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
                        <Text>Hello</Text>

                    </View>
                    <View style={styles.buttonContainer}>
                        <LoginScreenButtonCustom
                            text={"Confirm Appointment"}
                            handlePress={() => handleCancel()}
                            disabled={false}
                            width={297}
                        />
                        <View style={styles.buttonSpacer}></View>
                        <LoginScreenButtonWhite
                            text={"Cancel"}
                            handlePress={() => handleReturn()}
                        />
                    </View>
                </View>
            </View>
            
        </Modal>
    );
}

export default CancelApptModal;

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
        display: "flex",
        alignItems: "center",
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
    },
    buttonSpacer: {
        paddingTop: scale_mod(16),
      },
})