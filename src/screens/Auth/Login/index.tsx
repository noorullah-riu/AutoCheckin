import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
import BlueButton from '../../../ui/BlueButton';
import logo from '../../../Assets/Home/logo.jpeg';
const windowwidth = Dimensions.get('window').width;
import EcomContext from '../../../contextApi/DataProvider';
import Header from '../../../ui/Header';
import axios from 'axios';
import LoginHeader from '../../../ui/LoginHeader';
import WhiteButton from '../../../ui/WhiteButton';

export const Login = props => {
  const username = `Username/Email`;
  const Password = `Password`;
  const singinTxt = 'Sign In';
  const {UserAuthentic, setUserAuthentic, Data, setData} =
    useContext(EcomContext);

  const [EmailIn, setEmailIn] = useState('');
  const [PasswordIn, setPasswordIn] = useState('');

  /*   axios.get('/GeeksforGeeks', {
    params: {
        articleID: articleID
    }
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    }); */

  const funPostLogin = () => {
    setUserAuthentic(!UserAuthentic);
    // if (EmailIn || PasswordIn == '') {
    //   Alert.alert('Inputs Are Must');
    // } else {
    //   axios
    //     .post('VMI/ValidateLogin', {
    //       articleID: 'articleID',
    //       title: 'Axios in React Native push',
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //       setData(response);
    //       setUserAuthentic(!UserAuthentic);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#296faa',
        }}>
        <LoginHeader title={'Login'} borderColor={colors.white} />
        <Image resizeMode="stretch" style={styles.imgStyle} source={logo} />
        <View style={styles.containerStyling}>
          <View style={styles.h60}>
            <Text style={styles.singinTxt}>{username}</Text>
          </View>

          <View style={styles.inputEmail}>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={'#296faa'}
              placeholder="User Name/Email"
              keyboardType="email-address"
              value={EmailIn}
              onChangeText={EmailIn => setEmailIn(EmailIn)}
            />
          </View>

          <View style={styles.h60}>
            <Text style={styles.singinTxt}>{Password}</Text>
          </View>
          <View style={styles.inputEmail}>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={'#296faa'}
              placeholder="Password"
              keyboardType="visible-password"
              value={PasswordIn}
              onChangeText={PasswordIn => setPasswordIn(PasswordIn)}
            />
          </View>

          <View style={styles.lognDiv}>
            <WhiteButton text="Login" onPress={() => funPostLogin()} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyling: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyling: {
    marginTop: 20,
    textAlign: 'center',
    color: '#296faa',
  },

  imgStyle: {
    width: rfSpacing['2.5H'],
    alignSelf: 'center',
    marginTop: rfSpacing['4xl'],
    borderRadius: rfSpacing.m,
    height: rfSpacing['2.5H'],
  },
  h60: {
    marginLeft: RFPercentage(7),
    alignSelf: 'flex-start',
    height: rfSpacing['6xl'],
  },
  singinTxt: {
    width: rfSpacing['1.2H'],
    textAlignVertical: 'center',
    height: rfSpacing['6xl'],
    color: colors.white,
    fontSize: rfSpacing.xl,
    fontWeight: '600',
  },
  inputStyle: {
    color: '#296faa',
    fontSize: rfSpacing.xl,
  },
  inputEmail: {
    height: rfSpacing['6xl'],
    width: rfSpacing['3H'],
    borderWidth: 1,
    borderColor: colors.new_black,
    backgroundColor: colors.white,
  },
  lognDiv: {
    marginTop: RFPercentage(7),
    height: rfSpacing['7xl'],
    alignItems: 'center',
  },
});
