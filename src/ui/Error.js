import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-animatable';
import error from '../assets/_Error/err.jpg';
import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';
import spacing from '../theme/spacing';

const Error404 = () => {
  return (
    <View
      style={{
        opacity: 0.9,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        resizeMode="center"
        style={{height: rfSpacing['3H'], width: rfSpacing['3H']}}
        source={error}
      />
    </View>
  );
};

export default Error404;
