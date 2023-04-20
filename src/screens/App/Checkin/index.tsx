import React, {useCallback, useContext, useState, useEffect} from 'react';
import {Text, Platform, View, StyleSheet, Alert} from 'react-native';
import colors from '../../../theme/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import {useForm, Controller} from 'react-hook-form';
import BlueButton from '../../../ui/BlueButton';
import Loader from '../../../ui/Loader';
import Header from '../../../ui/Header';
import {removeUser} from '../../../storage/index';
import ShowToast from '../../../ui/Toast';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {ScrollView} from 'react-native-gesture-handler';
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import EcomContext from '../../../contextApi/DataProvider';
import Geolocation from '@react-native-community/geolocation';
import Modal from 'react-native-modal';
import Spacings from '../../../theme/Spacings';
import {request, PERMISSIONS} from 'react-native-permissions';
import {
  requestTrackingPermission,
  getTrackingStatus,
  TrackingStatus,
} from 'react-native-tracking-transparency';

{
  /* <key>NSLocationWhenInUseUsageDescription</key>
<string>VMI Time requires your permission 2</string> */
}

export const CheckIn = props => {
  const {
    UserAuthentic,
    setUserAuthentic,
    setactiveProjectName,
    Data,
    setData,
    setactiveProject,
    activeProject,
    DeviceID,
    setDeviceID,
  } = useContext(EcomContext);

  const [genderOpen, setGenderOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState(null);
  const [cors, setcors] = useState({});
  const [url, seturl] = useState('');
  const [Projects, setProjects] = useState([]);
  const [ProjectName, setProjectName] = useState('');
  const [ActivePlaceholder, setActivePlaceholder] = useState("");
  const [trackingStatus, setTrackingStatus] = React.useState<
    TrackingStatus | '(loading)'
  >('(loading)');

  const [permiss, setpermiss] = useState('');

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

    /*     props.navigation.navigate('Home', {
      screen: 'Home',
    }); */
  };

  const toggleModalBtn = () => {
    setModalVisible(!isModalVisible);
    props.navigation.navigate('Home', {
      screen: 'Home',
    });
  };

  const toggleModalNavgate = () => {
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
    let T = `${hours}:${minutes} `;
    return T;
    //Alert.alert(date + '-' + month + '-' + year);
  };

  const funGetCheckin = () => {
    const f = getCurrentDate();
    setLoading(true);
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
          console.log(response?.data?.ProjectDetails);
          if(response?.data?.assignedproject != ""){
        //   setActivePlaceholder(response?.data?.assignedproject);
           setCompanyValue(response?.data?.assignedproject);
          }
          setProjects(response?.data?.ProjectDetails);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
        });
    }
  };

  const funPostCheckin2 = async () => {
    var TT = getCurrentDate();
    if (companyValue == null) {
      Alert.alert('Inputs Are Must');
    } else if (!cors?.coords?.longitude) {
      Alert.alert('Turn on your location please,and restart the app');
      props.navigation.navigate('Home', {
        screen: 'Home',
      });
    } else {
      const a = `https://maps.google.com/?q=${cors?.coords?.latitude},${cors?.coords?.longitude}`;
      // //  console.log(a);
      seturl(a);
      axios
        .post('https://time.vmivmi.co:8092/api/VMI/AddTimeSheet', {
          employeeid: Data?.employeeid,
          extEmpNo: Data?.extEmpNo, //'100001',
          date: date,
          type: 'IN', //'OUT',
          time: TT.toString(),
          project: companyValue, //'1025-AD-DAM',
          langtitue: cors?.coords?.longitude,
          geolocation: a,
          lattidue: cors?.coords?.latitude,
          deviseID: DeviceID,
        })
        .then(function (response) {
          console.log(response.data);
          toggleModalNavgate();
          setactiveProject(true);
        })
        .catch(function (error) {
          Alert.alert(error.response.data.Message);
          console.log(error.response.data.Message);
        });
    }
  };

  const getCurrentDatehme = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year,.
    var today =
      (date < 10 ? '0' + date : date) +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      year;
    console.log('today', today);
    funGetHistoryToday(today);
  };
  const funGetHistoryToday = a => {
    setLoading(true);
    axios
      .post('https://time.vmivmi.co:8092/api/VMI/GetHistory', {
        employeeid: Data?.employeeid,
        extEmpNo: Data?.extEmpNo,
        fromdate: a,
        todate: a,
        project: '',
      })
      .then(function (response) {
        response?.data?.TimesheetDetails?.forEach(async element => {
          if (!element.outtime) {
            setactiveProjectName(element.project);
            setactiveProject(true);
            setLoading(false);
          } else {
            setactiveProject(false);
            setLoading(false);
          }
        });
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
  };

  const request2 = React.useCallback(async () => {
    try {
      const status = await requestTrackingPermission();
      setTrackingStatus(status);
    } catch (e) {
      Alert.alert('Error', e?.toString?.() ?? e);
    }
  }, []);

  const requestCameraPermission = async () => {
    const a = await request2();
    console.log(a, ';;;;;;>>>');
    // const trackingStatus1 = await getTrackingStatus();
    // Alert.alert('aa', trackingStatus1);
    // if (trackingStatus1 === 'authorized') {
    //   // enable tracking features
    //   try {
    //     request(
    //       Platform.OS === 'ios'
    //         ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    //         : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    //     ).then(result => {
    //       if (result == 'granted') {
    //         console.log('Location is enabled');
    //         Geolocation.getCurrentPosition(info => {
    //           setcors(info);
    //         });
    //       } else {
    //         console.log('Location is not enabled');
    //       }
    //     });
    //   } catch (error) {
    //     console.log('location set error:', error);
    //   }
    // } else {
    //   const trackingStatus = await requestTrackingPermission();
    //   Alert.alert('bb', trackingStatus);
    //   if (trackingStatus === 'authorized') {
    // enable tracking features

    try {
      request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      ).then(result => {
        if (result == 'granted') {
          console.log('Location is enabled');
          Geolocation.getCurrentPosition(info => {
            setcors(info);
          });
        } else {
          console.log('Location is not enabled');
        }
      });
    } catch (error) {
      console.log('location set error:', error);
    }
    //   }
    // }
  };

  useEffect(() => {
    DeviceInfo.getUniqueId().then(uniqueId => {
      setDeviceID(uniqueId);
      console.log(uniqueId, 'uniqueId ------------');
    });
  //  funGetCheckin();
    getCurrentDate();
  }, []);

  useEffect(() => {
    getTrackingStatus()
      .then(status => {
        setTrackingStatus(status);
      })
      .catch(e => Alert.alert('Error', e?.toString?.() ?? e));
  }, []);
  // useEffect(() => {

  // }, [trackingStatus]);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      funGetCheckin();
      requestCameraPermission();
      getCurrentDatehme();
      setCompanyValue(null);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation]);

  if (loading) return <Loader />;
  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            paddingVertical: Spacings['4xl'],
            backgroundColor: '#fff',
            alignItems: 'center',
          }}>
          <Text
            style={{fontWeight: 'bold', fontSize: Spacings.xxl, color: '#aaa'}}>
            Checked In Successfully
          </Text>
          <View
            style={{flexDirection: 'row', marginHorizontal: 40, marginTop: 10}}>
            <View style={{flex: 1}}>
              <Text style={{color: '#aaa'}}>Project ID:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: '700', color: '#aaa'}}>
                {companyValue}
              </Text>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginHorizontal: 40, marginTop: 10}}>
            <View style={{flex: 1}}>
              <Text style={{color: '#aaa'}}>Project Name:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: '700', color: '#aaa'}}>
                {ProjectName}
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
            <BlueButton text="Okay" onPress={toggleModalBtn} />
          </View>
        </View>
      </Modal>
      <View style={{backgroundColor: '#FFF', flex: 1}}>
        <Header title={'Check In'} />

        {!activeProject ? (
          <>
            <View
              style={{
                marginTop: Spacings['4xl'],
                marginBottom: Spacings.m,
                marginHorizontal: Spacings['w5xl'],
              }}>
              <View style={styles.h60}>
                <Text style={styles.singinTxt}>Project</Text>
              </View>
            </View>
            <View style={{marginHorizontal: Spacings['4xl'], zIndex: 1500}}>
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
                      label: `${option.projectname} -- "${option.projectcode}"`,
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
                    onSelectItem={item => {
                      console.log(item);
                      setProjectName(item?.label);
                    }}
                  />
                )}
              />

              <View style={styles.lognDiv}>
                <BlueButton text="Check In" onPress={() => funPostCheckin2()} />
              </View>
            </View>
          </>
        ) : (
          <View
            style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Text style={{color: colors.grey}}>
              You have an Active project. Checkout first...!
            </Text>
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
    color: 'grey',
  },

  dropdown: {
    PadingTop: Spacings['3xl'],
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
    marginTop: Spacings['6xl'],
    height: Spacings['7xl'],
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
