import React from 'react';

import { Pressable, StyleSheet, Text } from 'react-native';

interface HoverInfoProps {
  isInfoHovered: boolean;
  handleHoverIn: () => void;
}

const HoverInfo = ({ isInfoHovered, handleHoverIn }: HoverInfoProps) => {
  if (!isInfoHovered) return null;

  return (
    <Pressable style={styles.container} onHoverIn={handleHoverIn}>
      <Text style={styles.text}>Keep hovering to Play</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    top: -20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 8,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default HoverInfo;
