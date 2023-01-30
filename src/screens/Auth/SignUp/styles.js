import {StyleSheet, Platform} from 'react-native';
import {Dimensions} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../../../theme/colors';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoDiv: {
    backgroundColor: colors.new_black,
    height: verticalScale(120),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: windowwidth,
    width: windowwidth,
  },
  taglineDiv: {
    height: verticalScale(80),
    justifyContent: 'center',
  },
  tagLine: {
    color: '#428bca',
    fontSize: moderateScale(16),
    textAlign: 'center',
    paddingTop: moderateScale(10),
  },
  singinTxt: {
    color: '#428bca',
    fontSize: moderateScale(22),
    fontWeight:"bold",
    marginLeft: moderateScale(20),
  },
  choseBtnDiv: {
    height: verticalScale(50),
    flexDirection: 'row',
  },
  f1Center: {
    flex: 1,
    alignItems: 'center',
  },
  choseTxt: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    color: '#fff',
  },
  choseBtnAct: {
    backgroundColor: '#428bca',
    width: windowwidth / 2.5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  choseBtnInact: {
    backgroundColor: '#D6D6D6',
    width: windowwidth / 2.5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  inputEmail: {
    height: verticalScale(80),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    justifyContent: 'center',
  },
  inputPassword: {
    flexDirection: 'row',
    height: verticalScale(50),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    justifyContent: 'center',
  },
  eyeDiv: {
    flex: 1,
    justifyContent: 'center',

    borderBottomColor: '#aaa',
    borderBottomWidth: moderateScale(1),
  },
  forgotPassDiv: {
    height: verticalScale(50),
    justifyContent: 'center',
    marginBottom: moderateScale(10),
  },
  forgotPassTxt: {
    textAlign: 'right',
    marginRight: moderateScale(20),
    color: '#428bca',
    fontSize: moderateScale(12),
  },
  lognDiv: {
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  h20: {
    height: verticalScale(20),
  },
  signupTxt: {
    textAlign: "right",
    fontSize: moderateScale(12),
    color: '#111',
  },
  signupTxtEnd: {
    //textAlign: "right",
    fontWeight:"bold",
    fontSize: moderateScale(12),
    color: '#428bca',
  },
  h50f2: {
    height: verticalScale(50),
    flex: 2,
  },
  h50f1: {
    height: verticalScale(50),
    flex: 1,
  },
  h80: {
    height: verticalScale(80),
  },
  h60: {
    height: verticalScale(60),
  },
  h20w20:{
    height: moderateScale(20), width: moderateScale(20)
  },
  inputStyle: {
    borderBottomColor: '#aaa',
    borderBottomWidth: moderateScale(1),
  },
f9:{
  flex: 9
},
errorPass:{
  fontSize: 10,
  color: 'red',
  marginLeft: 20,
  marginTop: 10,
},
errorEmail:{
  fontSize: 10, color: 'red', marginLeft: 20
}

});
