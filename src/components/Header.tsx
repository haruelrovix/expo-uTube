import { Platform, StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>▶️ uTube</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'web' ? 10 : 0,
    paddingBottom: 10,
    backgroundColor: Platform.OS === 'web' ? 'transparent' : '#FFF',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Header;
