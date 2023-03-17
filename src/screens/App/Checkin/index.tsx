import React, {useCallback, useContext, useState, useEffect} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
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

export const CheckIn = props => {
  const {
    UserAuthentic,
    setUserAuthentic,
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
  const [ActivePLocal, setActivePLocal] = useState(false);

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

  const funPostCheckin = () => {
    var TT = getCurrentDate();
    // Alert.alert(TT);
    if (companyValue == null) {
      Alert.alert('Inputs Are Must');
    } else {
      const a = `https://maps.google.com/?q=${cors?.coords?.latitude},${cors?.coords?.longitude}`;
      //  console.log(a);
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
          //   Alert.alert(response.data.Status);

          //   toggleModal();
          setactiveProject(true);
        })
        .catch(function (error) {
          Alert.alert(error.response.data.Message);
          console.log(error.response.data.Message);
        });
    }
  };

  const funGetCheckin = () => {
    setLoading(true);
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
    setLoading(false);
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

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      Geolocation.getCurrentPosition(info => {
        setcors(info), {enableHighAccuracy: true};
      });
      DeviceInfo.getUniqueId().then(uniqueId => {
        setDeviceID(uniqueId);
        console.log(uniqueId, 'uniqueId ------------');
      });
      setCompanyValue(null);
      funGetCheckin();
      getCurrentDate();
      // getCurrentPosition();
      // if (!activeProject) {
      //   setActivePLocal(true);
      // }
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
          <Text style={{fontWeight: 'bold', fontSize: Spacings.xxl}}>
            Checked In Successfully
          </Text>
          <View style={{flexDirection: 'row',marginHorizontal:40,marginTop:10,}}>
            <View style={{flex: 1}}>
              <Text>Project ID:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight:"700"}}>{companyValue}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row',marginHorizontal:40,marginTop:10,}}>
            <View style={{flex: 1}}>
              <Text>Project Name:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight:"700"}}>{ProjectName}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row',marginHorizontal:40,marginTop:10,}}>
            <View style={{flex: 1}}>
              <Text>Date:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight:"700"}}>{date}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row',marginHorizontal:40,marginTop:10,}}>
            <View style={{flex: 1}}>
              <Text>Time:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontWeight:"700"}}>{time}</Text>
            </View>
          </View>

          <View style={styles.lognDiv}>
            {/*     <BlueButton text="Okay" onPress={toggleModal} /> */}
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
                <BlueButton text="Check In" onPress={() => funPostCheckin()} />
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
