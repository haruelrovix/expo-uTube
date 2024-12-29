import { StyleSheet, Text, View } from 'react-native';

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
    top: 20,
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Header;
