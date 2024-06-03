// CustomModal.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';

const CustomModal = ({ visible, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleFormSubmit = () => {
    onSubmit(formData);
    setFormData({ name: '', email: '' });
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>New Enquiry</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#999"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            placeholderTextColor="#999"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, amount: text })}
          />          
          <TextInput
            style={styles.input}
            placeholder="Date"
            placeholderTextColor="#999"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, date: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Status"
            placeholderTextColor="#999"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, status: text })}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Submit" onPress={handleFormSubmit} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={onClose} color="red" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    color:"#000",
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal:10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
    color: '#000'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default CustomModal;
