import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';

const BlueButton = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonBgStyle}>
      <Text style={styles.buttonTextStyle}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBgStyle: {
    backgroundColor: colors.primaryBlue,
    width: rfSpacing['2H'],
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rfSpacing.m,
  },
  buttonTextStyle: {
    fontSize: rfSpacing['3xl'],
    fontWeight: '900',
    color: colors.white,
  },
});

export default BlueButton;
