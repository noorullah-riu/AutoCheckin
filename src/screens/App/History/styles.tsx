import {Dimensions, StyleSheet} from 'react-native';

import colors from '../../../theme/colors';

import rfSpacing from '../../../theme/rfSpacing';
import Spacings from '../../../theme/Spacings';
const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    padding: Spacings.m,
    alignItems: 'center',
  },
  itemDiv: {
    marginTop: Spacings.m,
    paddingVertical: Spacings.m,
    width: windowwidth - Spacings['w6xl'],
    backgroundColor: colors.white,
    borderRadius: Spacings.wm,
    alignSelf: 'center',

    borderWidth: 1,
  },
  cName: {
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: Spacings.xl,
    textAlign: 'center',
  },
  cnameDiv1: {
    flexDirection: 'row',
    paddingHorizontal: Spacings.wxl,
  },
  f1: {
    flex: 1,
  },
  cName1: {
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: Spacings.xl,
  },
  fRow: {
    flexDirection: 'row',
  },
  s12: {
    marginLeft: Spacings.wxl,
    fontSize: Spacings.l,
    marginTop: Spacings.xs,
    color: colors.grey,
  },
  yellowTxt: {
    fontSize: Spacings.m,
    color: colors.meeting,
    fontWeight: '700',
    textAlign: 'right',
    marginRight: Spacings['wxl'],
  },
  s13: {
    marginLeft: Spacings.wxl,
    fontSize: Spacings.l,
    color: colors.grey,
  },
  s15: {
    marginLeft: Spacings.wxl,
    fontSize: Spacings.l,
    fontWeight: '500',
    color: colors.Indigo,
  },
  txtDate: {
    marginTop: Spacings.xl,
    color: colors.white,
    alignSelf: 'center',
  },
  item1Div: {
    marginTop: Spacings['4xl'],
    width: Spacings['w2H'],
    height: Spacings['7xl'],
    borderRadius: Spacings.m,
    backgroundColor: colors.Indigo,
  },

  // cnameDiv: {
  //   flexDirection: 'row',
  //   marginTop: Spacings.m,
  //   marginBottom: Spacings.m,
  //   paddingVertical: Spacings.m,
  //   backgroundColor: colors.white,
  //   marginHorizontal: Spacings['8xl'],
  //   borderWidth: 2,
  //   borderColor: colors.new_black,
  // },

  yellowTxt1: {
    fontSize: Spacings.m,
    color: colors.Rajah,
    fontWeight: '700',
    textAlign: 'right',
    marginRight: Spacings['wxl'],
  },
});
