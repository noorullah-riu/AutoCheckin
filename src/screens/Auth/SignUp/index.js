import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const SignUp = props => {
  return (
    <View style={styles.containerStyling}>
      <Text style={styles.textStyling}> SignUp folder</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  containerStyling: {
    background: '#0000FF',
  },
  textStyling: {
    marginBottom: 20,
    color: '#000',
  },
});




