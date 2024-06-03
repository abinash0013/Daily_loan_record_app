import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';

const DropdownComponent = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const placeholder = {
    label: 'Select an item...',
    value: null,
    color: '#9EA0A4',
  };

  const items = [
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose an item:</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={items}
        onValueChange={(value) => setSelectedValue(value)}
        style={pickerSelectStyles}
        value={selectedValue}
        useNativeAndroidPickerStyle={false}
      />
      {selectedValue && <Text style={styles.selectedValue}>Selected: {selectedValue}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  selectedValue: {
    marginTop: 20,
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default DropdownComponent;
