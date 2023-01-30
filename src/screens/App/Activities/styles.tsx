import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../../theme/colors';

import rfSpacing from '../../../theme/rfSpacing';
const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    padding: rfSpacing.m,
    alignItems: 'center',
  },
  itemDiv: {
    marginTop: rfSpacing.m,
    paddingVertical: rfSpacing.m,
    width: windowwidth - rfSpacing['6xl'],
    backgroundColor: colors.white,
    borderRadius: rfSpacing.m,
    alignSelf: 'center',
  },
  cName: {
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: rfSpacing.xl,
    textAlign: 'center',
  },
  cnameDiv1: {
    flexDirection: 'row',
    paddingHorizontal: rfSpacing.xl,
  },
  f1: {
    flex: 1,
  },
  cName1: {
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: rfSpacing.xl,
  },
  fRow: {
    flexDirection: 'row',
  },
  s12: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    marginTop: rfSpacing.xs,
    color: colors.grey,
  },
  yellowTxt: {
    fontSize: rfSpacing.m,
    color: colors.Rajah,
    fontWeight: '700',
    marginTop: rfSpacing.m,
    textAlign: 'right',
    marginRight: rfSpacing['xl'],
  },
  s13: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    color: colors.grey,
  },
  s15: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    fontWeight: '500',
    color: colors.Indigo,
  },
  txtDate: {
    marginTop: rfSpacing.xl,
    color: colors.white,
    alignSelf: 'center',
  },
  item1Div: {
    marginTop: rfSpacing['4xl'],
    width: rfSpacing['2H'],
    height: rfSpacing['7xl'],
    borderRadius: rfSpacing.m,
    backgroundColor: colors.Indigo,
  },

  cnameDiv: {
    flexDirection: 'row',
    marginTop: rfSpacing.m,
    marginBottom: rfSpacing.m,
    paddingVertical: rfSpacing.m,
    backgroundColor: colors.white,
    marginHorizontal: rfSpacing['8xl'],
  },

  boldText: {
    fontSize: rfSpacing['4xxm'],
    color: 'red',
    marginVertical: rfSpacing.xxl,
  },

  yellowTxt1: {
    fontSize: rfSpacing.m,
    color: colors.Rajah,
    fontWeight: '700',
    marginTop: rfSpacing.xxs,
    textAlign: 'right',
    marginRight: rfSpacing['xl'],
  },
});
