import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-animatable';
import logo from '../assets/_Splash/gp_logo.png';
import SplashLogo from '../assets/_Drawer/sp.png';
import spacing from '../theme/spacing';
import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';

const Splash = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        //    zIndexv1,
      }}>
      <Image
        resizeMode="contain"
        style={{height: rfSpacing['2H'], width: rfSpacing['2H']}}
        source={SplashLogo}
      />
    </View>
  );
};

export default Splash;
