import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface VideoActionButtonsProps {
  onWatchLater: () => void;
  onAddToQueue: () => void;
}

const VideoActionButtons = ({
  onWatchLater,
  onAddToQueue,
}: VideoActionButtonsProps) => (
  <View style={styles.actionButtonsContainer}>
    <TouchableOpacity style={styles.actionButton} onPress={onWatchLater}>
      <Text style={styles.actionButtonIcon}>⏰</Text>
      <Text style={styles.actionButtonText}>Watch later</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton} onPress={onAddToQueue}>
      <Text style={styles.actionButtonIcon}>▶</Text>
      <Text style={styles.actionButtonText}>Add to queue</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    position: 'relative',
    marginTop: 68,
    zIndex: 3,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  actionButtonText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 8,
  },
  actionButtonIcon: {
    fontSize: 20,
  },
});

export default VideoActionButtons;
