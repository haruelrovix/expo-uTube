import * as React from 'react';

import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  return <Image style={styles.logo} source={require('../assets/snack-icon.png')} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default Logo;
