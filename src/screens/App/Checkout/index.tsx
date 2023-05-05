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
import DropDownPicker from 'react-native-dropdown-picker';
import {useForm, Controller} from 'react-hook-form';
import BlueButton from '../../../ui/BlueButton';
import Header from '../../../ui/Header';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Geolocation from '@react-native-community/geolocation';
import Modal from 'react-native-modal';
import DeviceInfo from 'react-native-device-info';

import axios from 'axios';
import EcomContext from '../../../contextApi/DataProvider';
import Spacings from '../../../theme/Spacings';

export const CheckOut = props => {
  const {
    UserAuthentic,
    setUserAuthentic,
    Data,
    setData,
    activeProject,
    setactiveProject,
    activeProjectName,
    setactiveProjectName,
    activeProjectYesterday,
    DeviceID,
    setDeviceID,
    ActiveProjectDeviceID,
  } = useContext(EcomContext);
  const [loadingM, setLoadingM] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalBtn = () => {
    setModalVisible(!isModalVisible);
    setactiveProjectName('');
    props.navigation.navigate('Home', {
      screen: 'Home',
    });
  };

  const toggleModalNavgate = () => {
    setModalVisible(!isModalVisible);
  };

  const [Projects, setProjects] = useState([]);
  const [url, seturl] = useState('');

  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState(null);

  const [loading, setLoading] = useState(false);
  const [cors, setcors] = useState({});

  const {handleSubmit, control} = useForm();

  const [date, setDate] = useState(new Date().toDateString());
  const [time, setTime] = useState('');

  const getCurrentDate = () => {
    if (activeProjectYesterday) {
      var date = new Date().getDate() - 1;
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      var PreDay =
        (date < 10 ? '0' + date : date) +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        year;
      //   console.log('today', PreDay);

      setDate(PreDay);
    } else {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      var CurrentDay =
      (date < 10 ? '0' + date : date) +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      year;

      setDate(CurrentDay);
    }

    // console.log(date + '-' + month + '-' + year);

    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    setTime(hours + ':' + minutes);

    let T = `${hours}:${minutes} `;
    return T;
    //Alert.alert(date + '-' + month + '-' + year);
  };

  const funPostCheckOut = () => {
    var TT = getCurrentDate();
    console.log(date, '----> Date here');
    console.log(Data?.employeeid, '----> Data?.employeeid here');
    console.log(Data?.extEmpNo, '----> Data?.extEmpNo here');
    console.log(TT, '----> Time here');
    console.log(activeProjectName, '----> activeProjectName here');
    console.log(DeviceID, '----> DeviceID here');

    if (activeProjectName == '') {
      Alert.alert('Project is Must');
    } else if (ActiveProjectDeviceID != DeviceID) {
      Alert.alert('Please use same device you used for Checkin');
    } else if (!cors?.coords?.longitude) {
      Alert.alert('Turn on your location please,and restart the app');
      props.navigation.navigate('Home', {
        screen: 'Home',
      });
    } else {
      const a = `https://maps.google.com/?q=${cors?.coords?.latitude},${cors?.coords?.longitude}`;
      //   console.log(a);
      seturl(a);
      axios
        .post('https://time.vmivmi.co:8092/api/VMI/AddTimeSheet', {
          employeeid: Data?.employeeid,
          extEmpNo: Data?.extEmpNo, //'100001',
          date: date,
          type: 'Out',
          time: TT.toString(),
          project: activeProjectName, //companyValue, //'1025-AD-DAM',
          langtitue: cors?.coords?.longitude,
          geolocation: a,
          lattidue: cors?.coords?.latitude,
          deviseID: DeviceID,
        })
        .then(function (response) {
          //     console.log(response);
          setactiveProject(false);

          toggleModalNavgate();
          //  Alert.alert(response.data.Status);
          //   setData(response);
          //  setUserAuthentic(!UserAuthentic);
        })
        .catch(function (error) {
          Alert.alert(error.response.data.Message);
          //   console.log(error);
        });
    }
  };

  const funGetCheckOut = () => {
    const f = getCurrentDate();
    if (Data == null) {
      Alert.alert('Inputs Are Must');
    } else {
      axios
        .post('https://time.vmivmi.co:8092/api/VMI/GetProjectDetails', {
          employeeid: Data?.employeeid,
          extEmpNo: Data?.extEmpNo,
          date: f, //'10.01.2023',
        })
        .then(function (response) {
          //   console.log(response.data.ProjectDetails);
          setProjects(response.data.ProjectDetails);
          //   setData(response);
          //  setUserAuthentic(!UserAuthentic);
        })
        .catch(function (error) {
          //    console.log(error);
        });
    }
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setcors(info);
    });
    DeviceInfo.getUniqueId().then(uniqueId => {
      setDeviceID(uniqueId);
      console.log(uniqueId, 'uniqueId ------------');
    });
    //  setDeviceID("uniqueId");
    getCurrentDate();
    funGetCheckOut();
  }, []);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      getCurrentDate();
      funGetCheckOut();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation]);
  return (
    <View style={styles.containerStyling}>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            paddingVertical: Spacings['4xl'],
            backgroundColor: '#fff',
            alignItems: 'center',
          }}>
          <Text
            style={{fontWeight: 'bold', fontSize: Spacings.xxl, color: '#aaa'}}>
            Checked Out Successfully
          </Text>
          <View
            style={{flexDirection: 'row', marginHorizontal: 40, marginTop: 10}}>
            <View style={{flex: 1}}>
              <Text style={{color: '#aaa'}}>Project ID:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: '700', color: '#aaa'}}>
                {activeProjectName}
              </Text>
            </View>
          </View>

          <View
            style={{flexDirection: 'row', marginHorizontal: 40, marginTop: 10}}>
            <View style={{flex: 1}}>
              <Text style={{color: '#aaa'}}>Date:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: '700', color: '#aaa'}}>{date}</Text>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 40, marginTop: 10}}>
            <View style={{flex: 1}}>
              <Text style={{color: '#aaa'}}>Time:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: '700', color: '#aaa'}}>{time}</Text>
            </View>
          </View>

          <View style={styles.lognDiv}>
            {/*     <BlueButton text="Okay" onPress={toggleModal} /> */}
            <BlueButton text="Okay" onPress={toggleModalBtn} />
          </View>
        </View>
      </Modal>
      <Header title={'Check Out'} />
      <View
        style={{
          marginTop: Spacings['4xl'],
          marginHorizontal: Spacings['w5xl'],
        }}>
        <View style={styles.h60}>
          <Text style={styles.singinTxt}>Project</Text>
        </View>
      </View>
      {!activeProjectName ? (
        <View
          style={{
            backgroundColor: '#ddd',

            padding: Spacings.m,
            marginHorizontal: Spacings.w4xl,
          }}>
          <Text>No Active Project to Checkout</Text>
        </View>
      ) : (
        <View
          style={{
            borderColor: '#ddd',
            borderWidth: 1,
            padding: Spacings.m,
            marginHorizontal: Spacings.w4xl,
          }}>
          <Text style={{color: colors.grey}}>{activeProjectName}</Text>
        </View>
      )}

      {!activeProjectName ? (
        <></>
      ) : (
        <>
          <View style={styles.lognDiv}>
            <BlueButton
              text="Check Out"
              //    funPostCheckOut
              onPress={() => funPostCheckOut()}
            />
          </View>
        </>
      )}
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
    marginTop: Spacings['4xl'],
    height: Spacings['7xl'],
    alignItems: 'center',
  },
});
