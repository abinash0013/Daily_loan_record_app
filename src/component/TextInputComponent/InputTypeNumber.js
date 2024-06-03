// NumberInput.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputTypeNumber = ({ value, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={(text) => {
        // Ensure only numeric values are accepted
        if (/^\d*\.?\d*$/.test(text)) {
          onChange(text);
        }
      }}
      keyboardType="numeric"
      placeholder="Enter a number"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default InputTypeNumber;
