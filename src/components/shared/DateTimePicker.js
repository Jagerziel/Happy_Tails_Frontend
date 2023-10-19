// Import React
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

//  Import Constants
import { styleMaster } from "../../constants/stylesMaster";
import { scale_H, scale_V, scale_mod } from "../../data/functions/normalizeScaling";
import { colors } from "../../constants/colorPalette";

const DateTimePicker = ( {name} ) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity 
        style={styles.container}
        onPress={showDatePicker}
      >
        <Text style={[styleMaster.defaultFont, styles.textField]}>{name}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
    container: {
        borderWidth: scale_mod(2),
        borderColor: colors.grayscale03,
        width: scale_mod(328),
        aspectRatio: 6.83/1,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 12,
        paddingLeft: scale_mod(15),
        backgroundColor: colors.white,
        paddingTop: 0,
    },
    textField: {
        textAlign: 'left',
        fontSize: scale_V(15),
        includeFontPadding: false, // Removes default padding for Text 
        fontFamily: 'RobotoLight',
    }  
});