import {StyleSheet, Platform} from 'react-native';
import {Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light_grey,
  },

  errorPass: {
    fontSize: wp('3%'),
    color: colors.tomato,
    marginLeft: wp('5%'),
    //  marginTop: rfSpacing.m,
  },

  forgotPassTxt: {
    // fontWeight: 'bold',
    // textAlign: 'right',
    marginLeft: wp('5%'),
    color: '#006a66',
    fontSize: wp('3.5%'),
  },

  errorEmail: {
    fontSize: wp('3%'),
    color: colors.tomato,
    marginLeft: wp('5%'),
  },
  headerDiv: {
    backgroundColor: '#006a66',
    height: hp('10%'),
    marginTop: hp('1%'),
    flexDirection:"row",
  },
  sendtoTxt: {
    color: '#b9b9b9',
    marginTop: hp('0.8%'),
    fontSize: hp('2%'),
  },
  loginTxt: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: wp('1%'),
  },
  loginTxt3: {
    fontSize: wp('4%'),
   // fontWeight: 'bold',
    color: 'white',
    paddingVertical: wp('1%'),
  },
  loginContainer: {
    backgroundColor: 'white',
    height: hp('90%'),
    paddingHorizontal:wp('5%'),
    borderTopRightRadius: wp('10%'),
    borderTopLeftRadius: wp('10%'),
  },
  loginTxt2: {
    fontSize: wp('4.5%'),
    color: '#333',
   // textAlign: 'center',
    marginVertical: hp('3%'),
  },

  dropdown: {
    marginTop: wp('0.5%'),
    paddingLeft: wp('3%'),
    borderColor: 'grey',
    borderWidth: wp('0.2%'),
    borderRadius: 0,
    minHeight: hp('5%'),
  },
  emailTxt: {fontSize: wp('3.5%'), color: '#949494', paddingBottom: wp('1%')},
  txtInput: {
    borderColor: '#aaa',
    color:"#111",
    borderWidth: wp('0.2%'),
    paddingVertical: hp('0.5%'),
    paddingLeft: wp('3%'),
  },
  passDiv: { marginTop: wp('1%')},
  buttonDiv: {
    height: hp('6%'),
    alignItems: 'center',
    marginTop:hp('5%'),
  },
  floginDiv: {
    alignItems: 'center',
    marginTop: wp('3%'),
  },
  floginTxt: {fontSize: wp('3.5%'), color: '#949494', paddingBottom: 10},
  iconDiv: { alignItems: 'center',justifyContent:"center",marginVertical: hp('5%')},
  iconimgStyle: {height: wp('50'), width: wp('50%')},
  loginwithDiv: {
    marginVertical: wp('2%'),
    flexDirection: 'row',
  },
  loginwithTxt: {
    fontSize: wp('3%'),
    textAlign: 'center',
    color: '#949494',
  },
  fpDiv: {marginHorizontal: wp('0%'), paddingVertical: wp('3%')},
  sIcon: {flex: 1, alignItems: 'center'},
  simgStyle: {height: wp('10%'), width: wp('10%')},
  f1: {flex: 1},
  lDiv: {
    marginTop: wp('2.5%'),
    flexDirection: 'row',
  },
  l2DIv: {flex: 1, alignItems: 'flex-end'},
  lTxt: {fontSize: wp('3.5%'), color: '#949494', paddingBottom: 0},
  signupTxt: {
    fontSize: wp('3.5%'),
    marginLeft: wp('1%'),
    color: '#006a66',
    paddingBottom: 10,
  },

  logoImgStyle: {height: wp('15%'), width: wp('15%')},
  screenDiv: {
    flex: 1,
    backgroundColor: '#006a66',
    paddingTop: Platform.OS === 'ios' ? hp('3%') : 0,
  },
  iconDirec: {
    flexDirection: 'row',
    marginTop: 0,
  },
  choseBtnDivs: {
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center",
    marginVertical: hp('1%'),
  },
  f1Center: {
    flex: 1,
  },
  line1: {
    flex:1,
     borderColor: '#aaa',
    borderBottomWidth: 0.5,
  marginLeft: wp('5%'),
  marginRight: wp('1%'),
  },
  cretTxt: {
   flexWrap:"wrap",
    color: 'grey',
    fontSize: hp('1.6%'),
  },
  line2: {
    borderColor: '#aaa',
    borderBottomWidth: 0.5,
    flex:1,
  marginRight: wp('5%'),
  marginLeft: wp('1%'),

  },
});
