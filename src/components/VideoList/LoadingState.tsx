import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingState = () => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color="#000" />
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingState;
