import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-animatable';
import error from '../assets/_Error/noItem.jpg';
import AppHeader from './AppHeader';
import back from '../assets/_Header/back-button.png';
import search from '../assets/_Header/search.png';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import rfSpacing from '../theme/rfSpacing';

const ErrorNoItem = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="center"
          style={{height: rfSpacing['3H'], width: rfSpacing['3H']}}
          source={error}
        />
      </View>
    </>
  );
};

export default ErrorNoItem;
