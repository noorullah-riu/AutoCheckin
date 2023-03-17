// import {StyleSheet, Platform} from 'react-native';
// import {Dimensions} from 'react-native';
// import {color} from 'react-native-reanimated';
// import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
// import {TextSize} from 'victory-native';
// import colors from '../../../theme/colors';
// import rfSpacing from '../../../theme/rfSpacing';
// import spacing from '../../../theme/spacing';

// const windowwidth = Dimensions.get('window').width;
// const windowheight = Dimensions.get('window').height;

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.light_grey,
//   },
//   logoDiv: {
//     backgroundColor: colors.white,
//     height: rfSpacing['1H'],
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   imgView: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   ImageStyleLogo: {
//     height: rfSpacing['7mxl'],
//     width: rfSpacing['7mxl'],
//   },

//   logoText: {
//     color: colors.Danube,
//     marginLeft: rfSpacing['4xl'],
//     fontSize: rfSpacing['4xxsl'],
//     fontWeight: 'bold',
//   },
//   imageStyle: {
//     height: windowwidth,
//     width: windowwidth,
//   },
//   tagLine: {
//     color: colors.Indigo,
//     fontSize: rfSpacing.s,
//     marginLeft: rfSpacing['4xl'],
//     fontWeight: '500',
//     textAlign: 'center',
//   },
//   taglineDiv: {
//     //  height: spacing['6xl'],
//     justifyContent: 'center',
//   },

//   singinTxt: {
//     color: colors.Indigo,
//     fontSize: rfSpacing['4xl'],
//     fontWeight: 'bold',
//     marginLeft: rfSpacing['4xl'],
//   },
//   choseBtnDiv: {
//     height: rfSpacing['6xl'],
//     width: windowwidth,
//     flexDirection: 'row',
//   },
//   f1Center: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   choseTxtAct: {
//     fontSize: rfSpacing.l,
//     fontWeight: 'bold',
//     color: colors.white,
//   },
//   choseTxtInAct: {
//     fontSize: rfSpacing.l,
//     fontWeight: 'bold',
//     color: colors.font_grey,
//   },
//   choseBtnAct: {
//     backgroundColor: colors.primaryBlue,
//     width: windowwidth / 2.2,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: rfSpacing.m,
//   },
//   choseBtnInact: {
//     backgroundColor: colors.white,
//     width: windowwidth / 2.2,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: rfSpacing.m,
//   },

//   usernameText: {
//     color: colors.Indigo,
//     fontSize: rfSpacing.xl,
//     fontWeight: '500',
//     marginLeft: rfSpacing['4xl'],
//   },
//   inputEmail: {
//     height: rfSpacing['6xl'],
//     marginLeft: rfSpacing['4xl'],
//     marginRight: rfSpacing['4xl'],
//     justifyContent: 'center',
//   },
//   passwordText: {
//     color: colors.Indigo,
//     fontSize: rfSpacing.xl,
//     fontWeight: '500',
//     marginLeft: rfSpacing['4xl'],
//   },
//   inputPassword: {
//     flexDirection: 'row',
//     height: rfSpacing['6xl'],
//     marginLeft: rfSpacing['4xl'],
//     marginRight: rfSpacing['4xl'],
//     justifyContent: 'center',
//   },
//   eyeDiv: {
//     flex: 1,
//     justifyContent: 'center',
//     borderBottomColor: colors.font_grey,
//     borderBottomWidth: rfSpacing['3xxs'],
//   },
//   forgotPassDiv: {
//     height: rfSpacing['5xl'],
//     justifyContent: 'center',
//     marginBottom: rfSpacing.m,
//   },
//   forgotPassTxt: {
//     fontWeight: 'bold',
//     textAlign: 'right',
//     marginRight: rfSpacing['4xl'],
//     color: colors.primaryBlue,
//     fontSize: rfSpacing.l,
//   },
//   lognDiv: {
//     height: rfSpacing['7xl'],
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   h20: {
//     height: rfSpacing['4xl'],
//   },
//   signupTxt: {
//     textAlign: 'right',
//     fontSize: rfSpacing.l,
//     color: colors.font_grey,
//   },
//   signupTxtEnd: {
//     fontWeight: 'bold',
//     fontSize: rfSpacing.l,
//     color: colors.primaryBlue,
//   },
//   h50f2: {
//     height: rfSpacing['7xl'],
//     flex: 2,
//   },
//   h50f1: {
//     height: rfSpacing['7xl'],
//     flex: 1,
//   },
//   h80: {
//     height: rfSpacing['9xl'],
//   },
//   h60: {
//     marginTop: rfSpacing['7xl'],
//     height: rfSpacing['7xl'],
//   },
//   h70: {
//     marginTop: rfSpacing['4xl'],
//     flex: 1,
//   },
//   h20w20: {
//     height: rfSpacing['3xl'],
//     width: rfSpacing['3xl'],
//   },
//   inputStyle: {
//     color: colors.activity_Date,
//     fontSize: rfSpacing.xl,

//     borderBottomColor: colors.font_grey,
//     borderBottomWidth: rfSpacing['3xxs'],
//   },
//   f9: {
//     flex: 9,
//   },
//   errorPass: {
//     fontSize: rfSpacing.m,
//     color: colors.tomato,
//     marginLeft: rfSpacing['4xl'],
//     marginTop: rfSpacing.m,
//   },
//   errorEmail: {
//     fontSize: rfSpacing.m,
//     color: colors.tomato,
//     marginLeft: rfSpacing['4xl'],
//   },
// });
