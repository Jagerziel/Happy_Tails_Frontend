import React from 'react';
import { View , Text , StyleSheet, Button , TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons' //Home


function Navigation(  ) {
    const navigation = useNavigation(); 
    
    return (
        <View style={styles.container}>
            <TouchableHighlight 
                style={styles.button}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <AntDesign name="home" size={24} color="black" />
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.button}
                onPress={() => navigation.navigate('LearningScreen')}
            >
                <Ionicons name="school-outline" size={26} color="black" />
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.button}
                onPress={() => navigation.navigate('ChatScreen')}
            >
                <Ionicons name="chatbox-outline" size={22} color="black" />
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.button}
                onPress={() => navigation.navigate('AboutUsScreen')}
            >
                <Entypo name="star" size={27} color="black" />
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.button}
                onPress={() => navigation.navigate('SettingsScreen')}
            >
                <Feather name="settings" size={24} color="black" />
            </TouchableHighlight>
        </View>
    );
}

export default Navigation;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 70,
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'

    },
    button: {
        
    }
});
  