import React, {useContext} from 'react';
import {Text, View, StyleSheet, Pressable, Alert} from 'react-native';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
import BlueButton from '../../../ui/BlueButton';
import Header from '../../../ui/Header';
import {removeUser} from '../../../storage/index';
import ShowToast from '../../../ui/Toast';
import EcomContext from '../../../contextApi/DataProvider';

export const Home = props => {
  const {UserAuthentic, Data, setUserAuthentic} = useContext(EcomContext);
  const logOut = async () => {
    const resp = await removeUser();
    if (resp) {
      setUserAuthentic(!UserAuthentic);
      ShowToast('success', `See You Soon`);
    }
  };
  const username = `Username`;
  return (
    <>
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <Header title={'Home'} />
        <View style={styles.containerStyling}>
          <View
            style={{
              flex: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.h60}>
              <Text style={styles.singinTxt}>Welcome</Text>
            </View>
            <View style={styles.h60}>
              <Text style={styles.singinTxt2}>{username}</Text>
            </View>
          </View>
          <View style={{flex: 1, paddingTop: rfSpacing['4xl']}}>
            <View style={styles.lognDiv}>
              <BlueButton text="Logout" onPress={logOut} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyling: {
    flex: 1,
  },
  textStyling: {
    marginTop: rfSpacing['4xl'],
    textAlign: 'center',
    color: '#000',
  },
  h60: {
    height: rfSpacing['6xl'],
  },
  singinTxt: {
    textAlignVertical: 'center',
    textAlign: 'center',
    height: rfSpacing['6xl'],
    color: colors.Boulder,
    fontSize: rfSpacing['4xl'],
    fontWeight: '600',
  },
  singinTxt2: {
    textAlignVertical: 'center',
    textAlign: 'center',
    height: rfSpacing['6xl'],
    color: colors.Boulder,
    fontSize: rfSpacing.xl,
    fontWeight: '600',
  },
  lognDiv: {
    marginTop: rfSpacing['5xl'],
    height: rfSpacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
