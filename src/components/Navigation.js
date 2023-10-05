import React from 'react';
import { View , Text , StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Navigation(  ) {
    const navigation = useNavigation(); 
    
    return (
        <View style={styles.container}>
           <Button style={styles.button}
                title="Home"
                onPress={() => navigation.navigate('HomeScreen')}
            />    
            <Button style={styles.button}
                title="Learning"
                onPress={() => (navigation.navigate('LearningScreen'))}
            /> 
            <Button style={styles.button}
                title="Chat"
                onPress={() => navigation.navigate('ChatScreen')}
            /> 
            <Button style={styles.button}
                title="AboutUs"
                onPress={() => navigation.navigate('AboutUsScreen')}
                
            /> 
            <Button style={styles.button}
                title="Settings"
                onPress={() => navigation.navigate('SettingsScreen')}
            /> 
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
      flexDirection: 'row'
    },
    button: {
        width: '10%'
    }
});
  