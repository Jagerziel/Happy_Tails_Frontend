import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Import constants and SVGs
import { colors } from '../../constants/colorPalette.js';
import { styleMaster } from '../../constants/stylesMaster.js';
import { scale_H, scale_V, scale_mod } from '../../data/functions/normalizeScaling.js';



function PetItemMyPets( { data } ) {

    return (
        <View style={styles.container}>
            {
                data.item.type === "Dog" ?
                <Image source={require(`../../assets/temp_pet_pic_dog.jpg`)} style={styles.petImg}/> :
                <Image source={require(`../../assets/temp_pet_pic_cat.jpg`)} style={styles.petImg}/>
            }
            <View style={styles.textContainer}>
                <Text style={[styleMaster.defaultFont, styles.text]}>{data.item.name}</Text>
            </View>
        </View>
    );
}

export default PetItemMyPets;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        width: '100%',
        height: scale_mod(100),
        display: 'flex',
        flexDirection: 'row'
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
    }

})