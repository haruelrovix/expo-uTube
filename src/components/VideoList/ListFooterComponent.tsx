import React from 'react';

import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface ListFooterComponentProps {
  isLoading: boolean;
}

const ListFooterComponent = ({ isLoading }: ListFooterComponentProps) => {
  if (!isLoading) return null;

  return (
    <View style={styles.loadingFooter}>
      <ActivityIndicator size="large" color="#333" style={styles.loadingIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingFooter: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingIndicator: {
    transform: [{ scale: 1.5 }],
  },
});

export default ListFooterComponent;
