import React, {useCallback, useContext, useState, useEffect} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
import DropDownPicker from 'react-native-dropdown-picker';
import {useForm, Controller} from 'react-hook-form';
import BlueButton from '../../../ui/BlueButton';
import Header from '../../../ui/Header';
import {removeUser} from '../../../storage/index';
import ShowToast from '../../../ui/Toast';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import EcomContext from '../../../contextApi/DataProvider';
import Geolocation from '@react-native-community/geolocation';
import Modal from 'react-native-modal';

export const CheckIn = props => {
  const {
    UserAuthentic,
    setUserAuthentic,
    Data,
    setData,
    setactiveProject,
    activeProject,
  } = useContext(EcomContext);

  const [genderOpen, setGenderOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState(null);
  const [cors, setcors] = useState({});
  const [url, seturl] = useState('');
  const [Projects, setProjects] = useState([]);
  const [company, setComapny] = useState([
    {label: 'Project', value: 'Project'},
    {label: 'Project1', value: 'Project1'},
    {label: 'Project2', value: 'Project2'},
    {label: 'Project3', value: 'Pr3ject1'},
    {label: 'Project4', value: 'Project4'},
    {label: 'Project5', value: 'Project5'},
  ]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onGenderOpen = useCallback(() => {
    setCompanyOpen(true);
  }, []);

  const onCompanyOpen = useCallback(() => {
    setGenderOpen(false);
  }, []);

  const {handleSubmit, control} = useForm();
  const onSubmit = data => {
    console.log(data, 'data');
  };

  const [date, setDate] = useState(new Date().toDateString());
  const [time, setTime] = useState('');

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setDate(date + '-' + month + '-' + year);
    console.log(date + '-' + month + '-' + year);

    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    setTime(hours + ':' + minutes);
    //Alert.alert(date + '-' + month + '-' + year);
  };

  const funPostCheckin = () => {
    if (companyValue == null) {
      Alert.alert('Inputs Are Must');
    } else {
      const a = `https://maps.google.com/?q=${cors?.coords?.latitude},${cors?.coords?.longitude}`;
      console.log(a);
      seturl(a);
      axios
        .post('https://time.vmivmi.co:8092/api/VMI/AddTimeSheet', {
          employeeid: Data?.employeeid,
          extEmpNo: Data?.extEmpNo, //'100001',
          date: date,
          type: 'IN', //'OUT',
          time: time,
          project: companyValue, //'1025-AD-DAM',
          langtitue: cors?.coords?.longitude,
          geolocation: a,
          lattidue: cors?.coords?.latitude,
        })
        .then(function (response) {
          console.log(response.data);
          //   Alert.alert(response.data.Status);

          toggleModal();
          setactiveProject(true);
          //   setData(response);
          //  setUserAuthentic(!UserAuthentic);
        })
        .catch(function (error) {
          Alert.alert(error.data.Status);
          console.log(error);
        });
    }
  };

  const funGetCheckin = () => {
    if (Data == null) {
      Alert.alert('Inputs Are Must');
    } else {
      axios
        .post('https://time.vmivmi.co:8092/api/VMI/GetProjectDetails', {
          employeeid: Data?.employeeid,
          extEmpNo: Data?.extEmpNo,
          date: '10.01.2023',
        })
        .then(function (response) {
          console.log(response?.data?.ProjectDetails);
          setProjects(response?.data?.ProjectDetails);
          //   setData(response);
          //  setUserAuthentic(!UserAuthentic);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setcors(JSON.stringify(pos));
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setcors(info), {enableHighAccuracy: true};
    });
    getCurrentDate();
    // getCurrentPosition();
    funGetCheckin();
  }, []);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getCurrentDate();
      // getCurrentPosition();
      funGetCheckin();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation]);

  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            //   height: 300,
            paddingVertical: 20,
            backgroundColor: '#fff',
            //   justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            Checked In Successfully
          </Text>
          <Text>Date:{date}</Text>
          <Text>Time:{time}</Text>
          {/*       <Text>Project:{companyValue}</Text> */}
          {/*        <Text>Location:{url}</Text> */}

          <View style={styles.lognDiv}>
            <BlueButton text="Okay" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
      <View style={{backgroundColor: '#FFF', flex: 1}}>
        <Header title={'Check In'} />

        {!activeProject ? (
          <>
            <View
              style={{
                marginTop: rfSpacing['4xl'],
                marginHorizontal: rfSpacing['5xl'],
              }}>
              <View style={styles.h60}>
                <Text style={styles.singinTxt}>Project</Text>
              </View>
            </View>
            <View style={{margin: rfSpacing['4xl'], zIndex: 1500}}>
              <Controller
                name="Projects"
                defaultValue="null"
                control={control}
                render={({field: {onChange, value}}) => (
                  <DropDownPicker
                    style={styles.dropdown}
                    open={companyOpen}
                    value={companyValue}
                    //  items={company}
                    items={Projects?.map(option => ({
                      label: option.projectname,
                      value: option.projectcode,
                      //  phonecode: option.phonecode,
                      //  countryCode: option.iso,
                    }))}
                    setOpen={setCompanyOpen}
                    setValue={setCompanyValue}
                    setItems={setComapny}
                    listMode="MODAL"
                    scrollViewProps={{nestedScrollEnabled: true}}
                    placeholder="Select Project"
                    placeholderStyle={styles.placeholderStyles}
                    loading={loading}
                    dropDownContainerStyle={{
                      maxHeight: 500,
                    }}
                    activityIndicatorColor="#5188E3"
                    searchable={true}
                    searchPlaceholder="Search your Project here..."
                    onOpen={onCompanyOpen}
                    onChangeValue={onChange}
                  />
                )}
              />

              <View style={styles.lognDiv}>
                <BlueButton text="Check In" onPress={() => funPostCheckin()} />
              </View>
            </View>
          </>
        ) : (
          <View
            style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Text>You have an Active project. Checkout first...!</Text>
          </View>
        )}
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
    marginTop: rfSpacing['4xl'],
    textAlign: 'center',
    color: '#000',
  },
  h60: {
    height: rfSpacing['6xl'],
  },
  singinTxt: {
    textAlignVertical: 'center',
    height: rfSpacing['6xl'],
    color: colors.Boulder,
    fontSize: 14,
    fontWeight: '600',
  },
  singinTxt2: {
    textAlignVertical: 'center',
    height: rfSpacing['6xl'],
    color: colors.Boulder,
    fontSize: rfSpacing.xl,
    fontWeight: '600',
    paddingRight: rfSpacing['9xl'],
  },
  placeholderStyles: {
    color: 'grey',
  },

  dropdown: {
    PadingTop: rfSpacing['3xl'],
    paddingLeft: rfSpacing['4xl'],
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 0,
    minHeight: rfSpacing['7xl'],
  },
  inputEmail: {
    height: rfSpacing['6xl'],
    justifyContent: 'center',
  },
  inputStyle: {
    width: rfSpacing['1.2H'],
    color: colors.activity_Date,
    fontSize: rfSpacing.xl,
    borderColor: colors.font_grey,
    borderWidth: rfSpacing['3xxs'],
  },
  inputStyle2: {
    color: colors.activity_Date,
    fontSize: rfSpacing.xl,
    borderColor: colors.font_grey,
    borderWidth: rfSpacing['3xxs'],
  },
  lognDiv: {
    marginTop: RFPercentage(5),
    height: rfSpacing['7xl'],
    alignItems: 'center',
   // justifyContent: 'center',
  },
});
