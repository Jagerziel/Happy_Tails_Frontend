import React from 'react';
import { View , Text , StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

// Icons
import { AntDesign, Entypo, Feather, MaterialIcons } from '@expo/vector-icons' //Home

// Colors
import { colors } from '../constants/colorPalette.js';


function Navigation(  ) {
    const navigation = useNavigation()
    const route = useRoute() 


    // Dynamically render color of icon on nav bar
    function iconColor (name) {
        if (route.name === name) return colors.primary
        return colors.grayscale03
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <AntDesign name="home" size={24} color={iconColor('HomeScreen')} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('MyPetsScreen')}
            >
                <MaterialIcons name="pets" size={24} color={iconColor('MyPetsScreen')} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('BookingScreen')}
            >
                <AntDesign name="calendar" size={26} color={iconColor('BookingScreen')} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('AboutUsScreen')}
            >
                <Entypo name="star" size={27} color={iconColor('AboutUsScreen')} />
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('SettingsScreen')}
            >
                <Feather name="settings" size={24} color={iconColor('SettingsScreen')} />
            </TouchableOpacity>
        </View>
    );
}

export default Navigation;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 70,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },
    button: {
        
    }
});
  