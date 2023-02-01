import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
import BlueButton from '../../../ui/BlueButton';

import EcomContext from '../../../contextApi/DataProvider';

export const Login = props => {
  const username = `Username/Email`;
  const Password = `Password`;
  const singinTxt = 'Sign In';
  const {UserAuthentic, setUserAuthentic} = useContext(EcomContext);

  return (
    <>
      <View style={styles.containerStyling}>
        <Pressable onPress={() => alert('navigate')}>
          <Text style={styles.textStyling}> login Page</Text>
        </Pressable>
        <View
          style={{
            marginLeft: rfSpacing.m,
            marginTop: rfSpacing['7xl'],
            flexDirection: 'row',
          }}>
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
        </View>
        <View
          style={{
            marginLeft: rfSpacing.m,
            marginTop: rfSpacing['4xl'],
            flexDirection: 'row',
          }}>
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
        </View>
        <View style={styles.lognDiv}>
          <BlueButton
            text="Login"
            onPress={() => setUserAuthentic(!UserAuthentic)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyling: {
    backgroundColor: '#fff',
    flex: 1,
  },
  textStyling: {
    marginTop: 20,
    textAlign: 'center',
    color: '#000',
  },
  h60: {
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
    width: rfSpacing['2H'],
  },
  lognDiv: {
    marginTop: rfSpacing['3xl'],
    height: rfSpacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
