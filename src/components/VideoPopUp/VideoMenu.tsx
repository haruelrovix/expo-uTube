import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface VideoMenuProps {
  isAvailable: boolean;
  isMenuVisible: boolean;
  isPopUp?: boolean;
  onToggle: () => void;
  onAddToQueue: () => void;
  onShare: () => void;
}

const VideoMenu = ({
  isAvailable,
  isMenuVisible,
  isPopUp,
  onToggle,
  onAddToQueue,
  onShare,
}: VideoMenuProps) => {
  if (!isAvailable) return null;

  return (
    <View
      style={[styles.menuTriggerContainer, { top: isPopUp ? 260 : undefined }]}
    >
      <TouchableOpacity style={styles.menuTrigger} onPress={onToggle}>
        <Text style={styles.threeDotMenu}>⋮</Text>
      </TouchableOpacity>

      {isMenuVisible && (
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={onAddToQueue}>
            <Text style={styles.menuItemText}>▶ Add to queue</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.menuItem} onPress={onShare}>
            <Text style={styles.menuItemText}>↗ Share</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuTriggerContainer: {
    position: 'absolute',
    right: 0,
    zIndex: 6,
    flex: 1,
    width: 30,
    height: 36,
  },
  menuTrigger: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  threeDotMenu: {
    fontSize: 24,
    color: '#333',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    right: 0,
    top: 35,
  },
  menuItem: {
    padding: 15,
    paddingVertical: 12,
    alignItems: 'flex-start',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

export default VideoMenu;
