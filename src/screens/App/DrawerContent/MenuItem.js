import React, {useState} from 'react';
import {Image, StyleSheet, Pressable, View, Text} from 'react-native';
import colors from '../../../theme/colors';

import rfSpacing from '../../../theme/rfSpacing';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from '../screens/App/DrawerContent';

const MenuItem = ({img, title, onPress, props, onSelect}) => {
  const Drawer = createDrawerNavigator();
  const [selectedMenuItem, setselectedMenuItem] = useState(0);
  return (
    <>
      <Pressable
        onPress={onPress}
        style={
          selectedMenuItem === Drawer.Screen
            ? styles.Container
            : styles.Container1
        }>
        <View style={styles.imgDiv}>
          <Image style={styles.imgStyle} resizeMode="contain" source={img} />
        </View>
        <View style={styles.titleDv}>
          <Text style={styles.titleTxt}>{title}</Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  titleDv: {
    flex: 6,
    justifyContent: 'center',
  },
  titleTxt: {
    fontSize: rfSpacing.xl,
    fontWeight: '500',
    color: colors.Indigo,
  },
  imgStyle: {
    fontWeight: '500',
    height: rfSpacing['4xxm'],
    width: rfSpacing['4xxm'],
    marginLeft: 12,
  },
  imgDiv: {
    flex: 1,
    justifyContent: 'center',
  },
  Container: {
    marginLeft: rfSpacing['4xl'],
    marginVertical: rfSpacing.m,
    flexDirection: 'row',
    backgroundColor: colors.grey,
  },
  Container1: {
    marginLeft: rfSpacing['4xl'],
    marginVertical: rfSpacing.m,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
});

export default MenuItem;
