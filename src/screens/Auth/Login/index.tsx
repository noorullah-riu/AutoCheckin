import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
import BlueButton from '../../../ui/BlueButton';
//import ax
import EcomContext from '../../../contextApi/DataProvider';
import Header from '../../../ui/Header';
import axios from 'axios';
export const Login = props => {
  const username = `Username/Email`;
  const Password = `Password`;
  const singinTxt = 'Sign In';
  const {UserAuthentic, setUserAuthentic} = useContext(EcomContext);


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

    axios.post('/GeeksforGeeks', {
      articleID: 'articleID',
      title: 'Axios in React Native'
  })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
  return (
    <>
      <View
        style={{
          flex: 1,

          backgroundColor: '#fff',
        }}>
        <Header title={'Login'} />
        <View style={styles.containerStyling}>
          <View style={styles.h60}>
            <Text style={styles.singinTxt}>{username}</Text>
          </View>
          <View style={styles.inputEmail}>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={colors.new_black}
              placeholder="User Name/Email"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.h60}>
            <Text style={styles.singinTxt}>{Password}</Text>
          </View>
          <View style={styles.inputEmail}>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={colors.new_black}
              placeholder="Password"
              keyboardType="visible-password"
            />
          </View>
          <View style={styles.lognDiv}>
            <BlueButton
              text="Login"
              onPress={() => setUserAuthentic(!UserAuthentic)}
            />
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
    color: '#000',
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
    color: colors.Boulder,
    fontSize: rfSpacing.xl,
    fontWeight: '600',
  },
  inputStyle: {
    color: colors.activity_Date,
    fontSize: rfSpacing.xl,
    borderBottomColor: colors.font_grey,
    borderBottomWidth: rfSpacing['3xxs'],
  },
  inputEmail: {
    height: rfSpacing['6xl'],
    marginLeft: rfSpacing.m,
    width: RFPercentage(40),
    borderWidth: 1,
    borderColor: colors.new_black,
  },
  lognDiv: {
    marginTop: RFPercentage(7),
    height: rfSpacing['7xl'],
    alignItems: 'center',
  },
});
