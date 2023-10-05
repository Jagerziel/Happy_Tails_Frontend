import React from 'react';
import { View , Text , StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Navigation(  ) {
    const navigation = useNavigation(); 
    return (
        <View style={styles.container}>
           <Button
                title="Home"
                onPress={() => navigation.navigate('HomeScreen')}
            />    
            <Button
                title="Learning"
                onPress={() => navigation.navigate('LearningScreen')}
            /> 
            <Button
                title="Chat"
                onPress={() => navigation.navigate('ChatScreen')}
            /> 
            <Button
                title="AboutUs"
                onPress={() => navigation.navigate('AboutUsScreen')}
            /> 
            <Button
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
    },
});
  