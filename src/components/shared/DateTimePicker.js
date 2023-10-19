// Import React
import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

//  Import Constants
import { styleMaster } from "../../constants/stylesMaster";
import { scale_H, scale_V, scale_mod } from "../../data/functions/normalizeScaling";
import { colors } from "../../constants/colorPalette";
import { months } from "../../data/data/data.js";

const DateTimePicker = ( { name, handleDate } ) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text , setText] = useState(name)


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const numericDate = date.toISOString().replace('-', '/').split('T')[0].replace('-', '/')
    const textReplace = `${months[numericDate.slice(5,7)]} ${numericDate.slice(8, 10)}, ${numericDate.slice(0,4)}`
    
    setText(textReplace) // Sets text on screen
    handleDate(numericDate) // Sends date back to parent

    hideDatePicker(); // Hides Date Picker
  };

  return (
    <View>
      <TouchableOpacity 
        style={styles.container}
        onPress={showDatePicker}
      >
        <Text style={[styleMaster.defaultFont, styles.textField]}>{text}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        maximumDate={new Date()}
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