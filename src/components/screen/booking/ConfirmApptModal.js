import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

function ConfirmApptModal( { modalController, setModalController, modalName, currPetSelectionType, bookingData, setBookingData } ) {
    return (
        <View style={styles.modalPositioning}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalController[modalName]}
                onRequestClose={() => 
                    setModalController({...modalController, [modalName] : false})}
            >
                <Text>Hello</Text>
            </Modal>
        </View>
    );
}

export default ConfirmApptModal;

const styles = StyleSheet.create({
    modalPositioning: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})