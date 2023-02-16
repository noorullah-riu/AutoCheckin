import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';
const dat = ['Bilal'];
const windowwidth = Dimensions.get('window').width;
const LoginHeader = ({title}: any) => {
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
    height: rfSpacing['8xl'],
    width: windowwidth,
    backgroundColor: colors.white,
    borderBottomEndRadius: rfSpacing['6xl'],
    borderBottomStartRadius: rfSpacing['6xl'],
  },

  titleDiv: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTxt: {
    height: rfSpacing['6xl'],
    color: '#296faa',
    fontWeight: '700',
    fontSize: rfSpacing['xxl'],
    paddingTop: rfSpacing.xs,
  },
});
export default LoginHeader;
