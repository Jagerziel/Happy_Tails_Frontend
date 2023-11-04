import React from "react";
import { Modal, StyleSheet, View } from "react-native";

function ConfirmApptModal( { modalController, setModalController, modalName } ) {
    return (
        <View style={styles.modalPositioning}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => 
                    setModalController({...modalController, [modalName] : false})}
            >
                
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