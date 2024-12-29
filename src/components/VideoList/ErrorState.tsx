import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

interface ErrorStateProps {
  error: unknown;
}

interface ErrorWithResponse {
  response?: {
    data?: {
      error?: string;
    };
  };
}

const ErrorState = ({ error }: ErrorStateProps) => {
  console.info(error);

  const isErrorWithResponse = (err: unknown): err is ErrorWithResponse =>
    typeof err === 'object' && err !== null && 'response' in err;

  const text = isErrorWithResponse(error)
    ? error.response?.data?.error || 'Failed to load videos. Please try again.'
    : 'Failed to load videos. Please try again.';

  return (
    <View style={styles.center}>
      <Text style={styles.error}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: '#FF0000',
    fontSize: 16,
  },
});

export default ErrorState;
