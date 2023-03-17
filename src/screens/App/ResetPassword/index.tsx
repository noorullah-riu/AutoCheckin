import React, {useCallback, useContext, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Alert,
  TextInput,
} from 'react-native';
import colors from '../../../theme/colors';
import BlueButton from '../../../ui/BlueButton';
import Header from '../../../ui/Header';
import Modal from 'react-native-modal';
import InputWithTitle from './InputWTitle';
import axios from 'axios';
import EcomContext from '../../../contextApi/DataProvider';
import Spacings from '../../../theme/Spacings';

export const ResetPassword = props => {
  const {Data} = useContext(EcomContext);
  const [OldPassword, setOldPassword] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const funPostCheckOut = () => {
    if (ConfirmPassword != NewPassword) {
      Alert.alert('Password and confirm password does not match');
    } else {
      axios
        .post('https://time.vmivmi.co:8092/api/VMI/ChangePassword', {
          employeeid: Data?.employeeid,
          username: Data?.username,
          OldPassword: OldPassword,
          NewPassword: NewPassword,
        })
        .then(function (response) {
          Alert.alert(response.data.ErrorMessage);
          setOldPassword("");
          setNewPassword("");
          setConfirmPassword("");
        })
        .catch(function (error) {
           Alert.alert(error.response.data.ErrorMessage);
          console.log(error);
        });
    }
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.containerStyling}>
      {/* <Modal isVisible={isModalVisible}>
        <View
          style={{
            //     height:300,
            paddingVertical: Spacings['4xl'],
            backgroundColor: '#fff',
            //     justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: Spacings.xxl}}>
            Checked Out Successfully
          </Text>
          <Text>Date:{date}</Text>
          <Text>Time:{time}</Text>
 

          <View style={styles.lognDiv}>
            <BlueButton text="Okay" onPress={toggleModalBtn} />
          </View>
        </View>
      </Modal> */}
      <Header title={'Reset Password'} />
      <View
        style={{
          marginTop: Spacings['4xl'],
          marginHorizontal: Spacings['w5xl'],
        }}>
        <InputWithTitle
          Name={'Old Password'}
          PlaceHolder={'Old Password'}
          value={OldPassword}
          setVal={setOldPassword}
        />
        <InputWithTitle
          Name={'New Password'}
          PlaceHolder={'New Password'}
          value={NewPassword}
          setVal={setNewPassword}
        />
        <InputWithTitle
          Name={'Confirm Password'}
          PlaceHolder={'Confirm Password'}
          value={ConfirmPassword}
          setVal={setConfirmPassword}
        />
      </View>

      <View style={styles.lognDiv}>
        <BlueButton text="Confirm" onPress={() => funPostCheckOut()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyling: {
    backgroundColor: '#fff',
    flex: 1,
  },
  textStyling: {
    marginTop: Spacings['4xl'],
    textAlign: 'center',
    color: '#000',
  },
  h60: {
    height: Spacings['6xl'],
  },
  singinTxt: {
    textAlignVertical: 'center',
    height: Spacings['6xl'],
    color: colors.Boulder,
    fontSize: Spacings.xl,
    fontWeight: '600',
  },
  singinTxt2: {
    textAlignVertical: 'center',
    height: Spacings['6xl'],
    color: colors.Boulder,
    fontSize: Spacings.xl,
    fontWeight: '600',
    paddingRight: Spacings['w9xl'],
  },
  placeholderStyles: {
    color: '#296faa',
  },

  dropdown: {
    marginTop: Spacings['3xl'],
    paddingLeft: Spacings['w4xl'],
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 0,
    minHeight: Spacings['7xl'],
  },
  inputEmail: {
    height: Spacings['6xl'],
    justifyContent: 'center',
  },
  inputStyle: {
    width: Spacings['w1.2H'],
    color: colors.activity_Date,
    fontSize: Spacings.xl,
    borderColor: colors.font_grey,
    borderWidth: Spacings['w3xxs'],
  },
  inputStyle2: {
    color: colors.activity_Date,
    fontSize: Spacings.xl,
    borderColor: colors.font_grey,
    borderWidth: Spacings['w3xxs'],
  },
  lognDiv: {
    marginTop: Spacings['10xl'],
    height: Spacings['7xl'],
    alignItems: 'center',
  },
});
