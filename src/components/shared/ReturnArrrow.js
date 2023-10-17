// Import React
import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// Import Constants
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';
import { styleMaster } from '../../constants/stylesMaster.js';
// Import Assets
import Return_Arrow from '../../assets/return_arrow.svg'
import { useNavigation, useRoute } from "@react-navigation/native";


function ReturnArrow( { navLink,  height, width } ) {
    // Navigation
    const navigation = useNavigation();
    const route = useRoute();

    function handleNavigation(destination) {
        navigation.navigate(destination);
      }
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => (handleNavigation(navLink))}
        >
           <Return_Arrow 
                height={scale_mod(height)}
                width={scale_mod(width)}
           /> 
        </TouchableOpacity>
    );
}

export default ReturnArrow;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
    },
    
});
  