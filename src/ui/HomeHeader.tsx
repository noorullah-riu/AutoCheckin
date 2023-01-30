import React from 'react';
import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import buleBack from '../assets/_Header/background.png';
import gp_logo from '../assets/_Login/gp_logo.png';

import {moderateScale} from 'react-native-size-matters';
import size from '../theme/spacing';
import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';
const dat = ['Bilal'];

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const HomeHeader = ({
  menuImg,
  title,
  menuPress,
  addPress,
  loginUserData,
}: any) => {
  return (
    <ImageBackground
      source={buleBack}
      style={styles.imgageBack}
      resizeMode="stretch">
      <View style={styles.parentDiv}>
        <Pressable onPress={menuPress} style={styles.menuIcon}>
          <Image source={menuImg} style={styles.iconSize} />
        </Pressable>
        <View style={styles.titleDiv}>
          <Text style={styles.titleTxt}>{title}</Text>
        </View>
        <Pressable onPress={loginUserData} style={styles.iconAdd}></Pressable>
        <View style={styles.titleDiv1}>
          <Text style={styles.titleTxt}>{loginUserData}</Text>
        </View>
      </View>
      <Pressable onPress={addPress} style={styles.logoDiv}>
        <Image source={gp_logo} resizeMode="contain" style={styles.logoImg} />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    height: rfSpacing['5xl'],
    width: rfSpacing['5xl'],
  },
  logoDiv: {
    alignItems: 'center',
  },
  logoImg: {
    width: rfSpacing['1.5H'],
  },
  imgageBack: {
    height: rfSpacing['1.5H'],
    width: windowwidth,
  },
  parentDiv: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: rfSpacing.s,
  },
  menuIcon: {
    flex: 1,
    paddingTop: rfSpacing['5xl'],
    alignItems: 'flex-end',
  },
  titleDiv: {
    flex: 3,
    paddingTop: rfSpacing['5xl'],
    marginLeft: size.s,
  },
  titleDiv1: {
    flex: 1,
    paddingTop: rfSpacing['5xl'],
    marginRight: size.l,
  },
  titleTxt: {
    height: rfSpacing['6xl'],
    color: colors.white,
    fontWeight: '700',
    fontSize: rfSpacing['xxl'],
    paddingTop: rfSpacing.xs,
  },
  iconAdd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: rfSpacing['4xl'],
  },
});
export default HomeHeader;
