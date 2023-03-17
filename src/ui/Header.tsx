import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';
import Spacings from '../theme/Spacings';
const dat = ['Bilal'];
const windowwidth = Dimensions.get('window').width;
const Header = ({title}: any) => {
  return (
    <View style={styles.imgageBack}>
      <View style={styles.titleDiv}>
        <Text style={styles.titleTxt}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgageBack: {
    height: Spacings['10xl'],
    width: windowwidth,
    backgroundColor: '#296faa',
    borderBottomEndRadius: Spacings['w6xl'],
    borderBottomStartRadius: Spacings['w6xl'],
  },

  titleDiv: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTxt: {
    height: Spacings['6xl'],
    color: colors.white,
    fontWeight: '700',
    fontSize: Spacings['xxl'],
    paddingTop: Spacings.xs,
  },
});
export default Header;
