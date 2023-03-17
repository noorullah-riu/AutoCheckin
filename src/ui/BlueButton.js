import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';
import Spacings from '../theme/Spacings';

const BlueButton = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonBgStyle}>
      <Text style={styles.buttonTextStyle}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBgStyle: {
    backgroundColor: '#296faa',
    width: Spacings['w2H'],
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Spacings.wm,
  },
  buttonTextStyle: {
    fontSize: Spacings.xxl,//Spacings['3xl'],
    fontWeight: '600',
    color: colors.white,
  },
});

export default BlueButton;
