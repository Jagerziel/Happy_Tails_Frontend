import React from 'react';
import { View , Text , StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Navigation(  ) {
    const navigation = useNavigation(); 
    return (
        <View>
           <Button
                title="Home"
                onPress={() => navigation.navigate('HomeScreen')}
            />    
            <Button
                title="Login"
                onPress={() => navigation.navigate('LoginScreen')}
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
  