import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

import { colors } from '../../constants/colorPalette.js';

function ToggleButton ( { toggleFunc } ) {
    const [ isEnabled, setIsEnabled ] = useState(false);
    function toggleSwitch () {
        setIsEnabled( prev => !prev )
        toggleFunc()
    }

    return (
        <View style={styles.container}>
        <Switch
            trackColor={{false: '#767577', true: "#3E43BE"}}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ToggleButton;