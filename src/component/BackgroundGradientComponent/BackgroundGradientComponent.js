import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundGradient = ({ colors, style, children }) => {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.gradient, style]}
    >
      <View style={styles.container}>
        {children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20, // Adjust as needed
    paddingTop: 40, // Adjust as needed
  },
});

export default BackgroundGradient;
