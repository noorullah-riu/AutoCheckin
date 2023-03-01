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
import rfSpacing from '../../../theme/rfSpacing';
import DropDownPicker from 'react-native-dropdown-picker';
import {useForm, Controller} from 'react-hook-form';
import BlueButton from '../../../ui/BlueButton';
import Header from '../../../ui/Header';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Geolocation from '@react-native-community/geolocation';
import Modal from 'react-native-modal';

import axios from 'axios';
import EcomContext from '../../../contextApi/DataProvider';

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
  } = useContext(EcomContext);
  const [loadingM, setLoadingM] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [Projects, setProjects] = useState([]);
  const [url, seturl] = useState('');

  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState(null);
  const [company, setComapny] = useState([
    {label: 'Project', value: 'Project'},
    {label: 'Project1', value: 'Project1'},
    {label: 'Project2', value: 'Project2'},
    {label: 'Project3', value: 'Project3'},
    {label: 'Project4', value: 'Project4'},
    {label: 'Project5', value: 'Project5'},
    {label: 'Project6', value: 'Project6'},
    {label: 'Project7', value: 'Project7'},
    {label: 'Project8', value: 'Project8'},
    {label: 'Project9', value: 'Project9'},
    {label: 'Project10', value: 'Project10'},
    {label: 'Project11', value: 'Project11'},
    {label: 'Project12', value: 'Project12'},
    {label: 'Project13', value: 'Project13'},
    {label: 'Project14', value: 'Project14'},
    {label: 'Project15', value: 'Project15'},
    {label: 'Project16', value: 'Project16'},
    {label: 'Project17', value: 'Project17'},
    {label: 'Project18', value: 'Project18'},
    {label: 'Project19', value: 'Project19'},
    {label: 'Project20', value: 'Project20'},
  ]);
  const [loading, setLoading] = useState(false);
  const [cors, setcors] = useState({});

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

  const funPostCheckOut = () => {
/*     if (activeProjectName != '') {
   //   Alert.alert('have actve project');
       */setCompanyValue(activeProjectName);
  //  }
    if (activeProjectName == '') {
      Alert.alert('Project is Must');
    } else {
          const a = `https://maps.google.com/?q=${cors?.coords?.latitude},${cors?.coords?.longitude}`;
      console.log(a);
      seturl(a);
      axios
        .post('https://time.vmivmi.co:8092/api/VMI/AddTimeSheet', {
          employeeid: Data?.employeeid,
          extEmpNo: Data?.extEmpNo, //'100001',
          date: date,
          type: 'OUT',
          time: time,
          project: activeProjectName,//companyValue, //'1025-AD-DAM',
          langtitue: cors?.coords?.longitude,
          geolocation: a,
          lattidue: cors?.coords?.latitude,
        })
        .then(function (response) {
          console.log(response);
          setactiveProject(false);
          setactiveProjectName('');
          toggleModal();
          //  Alert.alert(response.data.Status);
          //   setData(response);
          //  setUserAuthentic(!UserAuthentic);
        })
        .catch(function (error) {
          Alert.alert(error.data.Status);
          console.log(error);
        }); 
    }
  };

  const funGetCheckOut = () => {
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
          console.log(response.data.ProjectDetails);
          setProjects(response.data.ProjectDetails);
          //   setData(response);
          //  setUserAuthentic(!UserAuthentic);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setcors(info), {enableHighAccuracy: true};
    });
    getCurrentDate();
    funGetCheckOut();
    /*     Alert.alert(activeProjectName);
    if(activeProjectName == "")
    {
      Alert.alert(activeProjectName);
      setProjects([]);
    } */
  }, []);
  return (
    <View style={styles.containerStyling}>
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Checked Out Successfully</Text>
          <Text>Date:{date}</Text>
          <Text>Time:{time}</Text>
          {/*       <Text>Project:{companyValue}</Text> */}
          {/*      <Text>Location:{url}</Text> */}

          <View style={styles.lognDiv}>
            <BlueButton text="Okay" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
      <Header title={'Check Out'} />
      <View
        style={{
          marginTop: rfSpacing['4xl'],
          marginHorizontal: rfSpacing['5xl'],
        }}>
        <View style={styles.h60}>
          <Text style={styles.singinTxt}>Project</Text>
        </View>
      </View>
      {!activeProjectName ? (
        <>
           <View
          style={{backgroundColor: '#ddd', padding: 10, marginHorizontal: 20}}>
          <Text>No Active Project to Checkout</Text>
        </View>
     {/*      <View style={{margin: rfSpacing['4xl'], zIndex: 1000}}>
            <Controller
              name="Country"
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
                  scrollViewProps={{
                    nestedScrollEnabled: true,
                  }}
                  placeholder="Select Project"
                  searchPlaceholderTextColor="#296faa"
                  placeholderStyle={styles.placeholderStyles}
                  loading={loading}
                  dropDownContainerStyle={{
                    maxHeight: 200,
                  }}
                  zIndex={-1000}
                  activityIndicatorColor="#5188E3"
                  searchable={true}
                  searchPlaceholder="Search your Project here..."
                  onOpen={onCompanyOpen}
                  onChangeValue={onChange}
                />
              )}
            />
          </View> */}
        </>
      ) : (
        <View
          style={{borderColor: '#ddd',borderWidth:1,padding: 10, marginHorizontal: 20}}>
          <Text>{activeProjectName}</Text>
        </View>
      )}

{!activeProjectName ? <>

</>:<>
<View style={styles.lognDiv}>
        <BlueButton
          text="Check Out"
          //    funPostCheckOut
          onPress={() => funPostCheckOut()}
        />
      </View>
</>}
  
    </View>
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
    fontSize: rfSpacing.xl,
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
    color: '#296faa',
  },

  dropdown: {
    // PadingTop: rfSpacing['3xl'],
    // paddingLeft: rfSpacing['4xl'],
    // borderColor: 'grey',
    // borderWidth: 1,
    // borderRadius: 0,
    marginTop: rfSpacing['3xl'],
    paddingLeft: rfSpacing['4xl'],
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 0,
    minHeight: 50,
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
    marginTop: RFPercentage(15),
    height: rfSpacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
