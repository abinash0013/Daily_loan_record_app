import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputTypeText = ({ 
  label, 
  placeholder, 
  onTextChange, 
  validationFunction, 
  errorMessage,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  style,
  inputStyle,
  labelStyle,
  errorStyle
}) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleTextChange = (inputText) => {
    setText(inputText);
    if (validationFunction && !validationFunction(inputText)) {
      setError(errorMessage);
    } else {
      setError('');
    }
    if (onTextChange) {
      onTextChange(inputText);
    }
  };

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        value={text}
        onChangeText={handleTextChange}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
      />
      {error ? <Text style={[styles.error, errorStyle]}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export default InputTypeText;
