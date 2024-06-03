import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; 
import CustomModal from './ModalComponent';
 
const TableTwo = () => {
    const [data, setData] = useState(tableData); 
    const [modalVisible, setModalVisible] = useState(false);
    const tableData = [
      { id: 1, name: 'Dinesh', amount: '14352', status: 'CR' },
      { id: 2, name: 'Himanshu', amount: '89736', status: 'DR' },
      { id: 3, name: 'Abinash', amount: '36421', status: 'CR' },
      { id: 4, name: 'Amit', amount: '19234', status: 'DR' }, 
      { id: 5, name: 'Dinesh', amount: '14352', status: 'CR' },
      { id: 6, name: 'Himanshu', amount: '89736', status: 'DR' },
      { id: 7, name: 'Abinash', amount: '36421', status: 'CR' },
      { id: 8, name: 'Amit', amount: '19234', status: 'DR' }, 
      { id: 9, name: 'Dinesh', amount: '14352', status: 'CR' },
      { id: 10, name: 'Himanshu', amount: '89736', status: 'DR' },
      { id: 11, name: 'Abinash', amount: '36421', status: 'CR' },
      { id: 12, name: 'Amit', amount: '19234', status: 'DR' }, 
      { id: 13, name: 'Dinesh', amount: '14352', status: 'CR' },
      { id: 14, name: 'Himanshu', amount: '89736', status: 'DR' },
      { id: 15, name: 'Abinash', amount: '36421', status: 'CR' },
      { id: 16, name: 'Amit', amount: '19234', status: 'DR' }, 
      { id: 17, name: 'Dinesh', amount: '14352', status: 'CR' },
      { id: 18, name: 'Himanshu', amount: '89736', status: 'DR' },
      { id: 19, name: 'Abinash', amount: '36421', status: 'CR' },
      { id: 20, name: 'Amit', amount: '19234', status: 'DR' }, 
      { id: 21, name: 'Dinesh', amount: '14352', status: 'CR' },
      { id: 22, name: 'Himanshu', amount: '89736', status: 'DR' },
      { id: 23, name: 'Abinash', amount: '36421', status: 'CR' },
      { id: 24, name: 'Amit', amount: '19234', status: 'DR' }, 
      { id: 25, name: 'Dinesh', amount: '14352', status: 'CR' },
      { id: 26, name: 'Himanshu', amount: '89736', status: 'DR' },
      { id: 27, name: 'Abinash', amount: '36421', status: 'CR' },
      { id: 28, name: 'Amit', amount: '19234', status: 'DR' }, 
    ];
    const getCurrentDate = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are zero indexed
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
    const handlePress = () => {
      setModalVisible(true);
    };
    const handleFormSubmit = (formData) => {
      console.log('Form submitted:', formData);
    };
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.dateText}>Date: {getCurrentDate()}</Text>
        </View>
        <ScrollView>
          <View style={styles.table}>
            {/* Table Header */}
            <View style={[styles.row]}>
              <Text style={[styles.cell, styles.header, {borderColor:"#fff"}]}>Date</Text>
              <Text style={[styles.cell, styles.header, {borderColor:"#fff"}]}>Name</Text>
              <Text style={[styles.cell, styles.header, {borderColor:"#fff"}]}>Amount</Text>
              <Text style={[styles.cell, styles.header, {borderColor:"#fff"}]}>Status</Text>
            </View>

            {/* Table Rows */}
            {tableData.map((row, index) => (
              <View
                key={row.id}
                style={[
                  styles.row,
                  index % 2 === 0 ? styles.evenRow : styles.oddRow,
                ]}
              >
                <Text style={styles.cell}>{row.id}</Text>
                <Text style={styles.cell}>{row.name}</Text>
                <Text style={styles.cell}>{row.amount}</Text>
                <Text style={styles.cell}>{row.status}</Text>
              </View>
            ))}
          </View>          
          <View style={styles.iconContainer}> 
            <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
            <Text style={styles.floatingButtonIcon}>+</Text>
            </TouchableOpacity>
            <CustomModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onSubmit={handleFormSubmit}
            />
          </View>
        </ScrollView>
      </>
    )
}
const styles = StyleSheet.create({ 
    table: {
      borderWidth: 1,
      borderColor: '#000',
      margin:10
    },
    row: {
      flexDirection: 'row',
    },
    cell: {
      flex: 1,
      padding: 10,
      borderWidth: 0.5,
      borderColor: '#000',
      textAlign: 'center',
      color: "#367588"
    },
    header: {
      // backgroundColor: '#f4f4f8',
      backgroundColor: '#000',
      fontWeight: 'bold',
      color:"#fff"
    },
    evenRow: {
      backgroundColor: '#f4f4f8',
      opacity:0.9
    },
    oddRow: {
      backgroundColor: '#fff',
      opacity:0.9

    },
    dateText: {
      fontSize: 14,
      fontWeight: 'bold',
      textAlign:"center",
      padding:10
    },
    iconContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }, 
    floatingButton: {
      position: 'absolute',
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
      backgroundColor: '#6200ee',
      borderRadius: 30,
      elevation: 8,
    },
    floatingButtonIcon:{
      fontSize:25,
      color:"#fff"

    }
})

export default TableTwo