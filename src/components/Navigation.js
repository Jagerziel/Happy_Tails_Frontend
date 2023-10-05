import React from 'react';
import { View , Text , StyleSheet, Button , TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Navigation(  ) {
    const navigation = useNavigation(); 
    
    return (
        <View style={styles.container}>
            <TouchableHighlight 
                style={styles.button}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Text>Home</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.button}
                onPress={() => navigation.navigate('LearningScreen')}
            >
                <Text>Learning</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.button}
                onPress={() => navigation.navigate('ChatScreen')}
            >
                <Text>Chat</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.button}
                onPress={() => navigation.navigate('AboutUsScreen')}
            >
                <Text>About Us</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.button}
                onPress={() => navigation.navigate('SettingsScreen')}
            >
                <Text>Settings</Text>
            </TouchableHighlight>
        </View>
    );
}

export default Navigation;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly'
    },
    button: {
        width: '1100'
    }
});
  