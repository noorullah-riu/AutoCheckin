import React, {useContext, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Alert,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import colors from '../../../theme/colors';
import Loader from '../../../ui/Loader';
import logo from '../../../Assets/Home/logo.jpeg';
import EcomContext from '../../../contextApi/DataProvider';
import axios from 'axios';
import LoginHeader from '../../../ui/LoginHeader';
import WhiteButton from '../../../ui/WhiteButton';
import Spacings from '../../../theme/Spacings';
import {storeDataLogin} from '../../../storage';
import {getDataContext} from '../../../storage';

export const Login = props => {
  const username = `Username`;
  const Password = `Password`;
  const singinTxt = 'Sign In';
  const {UserAuthentic, setUserAuthentic, Data, setData} =
    useContext(EcomContext);

  const [EmailIn, setEmailIn] = useState('');

  const [PasswordIn, setPasswordIn] = useState('');
  const [loading, setloading] = useState(false);
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

  const getData = async () => {
    const resp = await getDataContext();
    if (resp) {
      setData(resp);
      console.log('-------reesp', resp?.username);
      console.log('-------reesp', resp?.Password);
      setEmailIn(resp?.username);
      setPasswordIn(resp?.Password);
      //     setUserAuthentic(!UserAuthentic);
    }
  };

  const funPostLogin = () => {
    if (EmailIn == '' || PasswordIn == '') {
      Alert.alert('Inputs Are Must');
    } else {
      setloading(true);
      axios
        .post('https://time.vmivmi.co:8092/api/VMI/ValidateLogin', {
          username: EmailIn, //'IMV0150D'
          password: PasswordIn, //'IMV0858N',
        })
        .then(function (response) {
          console.log(response?.data);
          setloading(false);
          Alert.alert('Success', `Welcome ${response?.data?.employeename}`);
          setData(response?.data);
          setUserAuthentic(!UserAuthentic);
          storeDataLogin(response?.data);
        })
        .catch(function (error) {
       //   setloading(false);
        console.log(error.response);
          if (error?.response?.data?.Message) {
            Alert.alert("Application is not accessible in this region");
          } else {
           Alert.alert(error?.response?.data?.Status);
          }
          setloading(false);
          //  Alert.alert('Error Loading ,Plz Try with different Credantials');
        });
    }

  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <Loader />;
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
              //   placeholderTextColor={'#296faa'}
              placeholder="User Name"
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
              secureTextEntry={true}
              style={styles.inputStyle}
              //  placeholderTextColor={'#296faa'}
              placeholder="Password"
              //    keyboardType="visible-password"
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
    alignItems: 'center',
  },
  textStyling: {
    marginTop: Spacings['4xl'],
    textAlign: 'center',
    color: '#296faa',
  },

  imgStyle: {
    width: Spacings['w1.5H'],
    height: Spacings['1.5H'],
    alignSelf: 'center',
    marginTop: Spacings['4xl'],
    borderRadius: Spacings.wm,
  },
  h60: {
    marginHorizontal: Spacings['w7xl'],
    alignSelf: 'flex-start',
    height: Spacings['6xl'],
  },
  singinTxt: {
    width: Spacings['w1.2H'],
    textAlignVertical: 'center',
    height: Spacings['6xl'],
    color: colors.white,
    fontSize: Spacings.xl,
    fontWeight: '600',
    marginTop: Spacings.m,
  },
  inputStyle: {
    color: '#296faa',
    paddingVertical: 5,
    fontSize: Spacings.xl,
    textAlignVertical: 'center',
  },
  inputEmail: {
    width: '80%',
    justifyContent: 'center',
    height: Spacings.w5xl,
    borderWidth: 1,
    borderColor: colors.new_black,
    backgroundColor: colors.white,
  },
  lognDiv: {
    marginTop: Spacings['6xl'],
    height: Spacings['7xl'],
    alignItems: 'center',
  },
});
