import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface IHeader {
  title: string;
}

const Header = ({title}: IHeader) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    padding: 10,
    backgroundColor: '#800080',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 20,
  },
});
