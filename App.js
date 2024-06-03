// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'; 
import TableComponent from './src/component/TableComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TableComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;