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

import axios from 'axios';
import EcomContext from '../../../contextApi/DataProvider';

export const CheckOut = props => {
  const {UserAuthentic, setUserAuthentic, Data, setData} =
    useContext(EcomContext);

  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);

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

  const funPostCheckOut = () => {
    if (companyValue == null) {
      Alert.alert('Inputs Are Must');
    } else {
      axios
        .post('VMI/AddTimeSheet', {
          employeeid: '1',
          extEmpNo: '100001',
          date: '12-01-2023',
          type: 'OUT',
          time: '16:30',
          project: '1025-AD-DAM',
          langtitue: 'senthil',
          geolocation: 'senthil1',
          lattidue: 'senthil',
        })
        .then(function (response) {
          console.log(response);
          //   setData(response);
          //  setUserAuthentic(!UserAuthentic);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const funGetCheckOut = () => {
    if (Data == null) {
      Alert.alert('Inputs Are Must');
    } else {
      axios
        .post('VMI/GetProjectDetails', {
          employeeid: '1',
          extEmpNo: '11407',
          date: '10.01.2023',
        })
        .then(function (response) {
          console.log(response);
          //   setData(response);
          //  setUserAuthentic(!UserAuthentic);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    funGetCheckOut();
  }, []);
  return (
    <View style={styles.containerStyling}>
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
      <View style={{margin: rfSpacing['4xl'], zIndex: 1000}}>
        <Controller
          name="Country"
          defaultValue="null"
          control={control}
          render={({field: {onChange, value}}) => (
            <DropDownPicker
              style={styles.dropdown}
              open={companyOpen}
              value={companyValue}
              items={company}
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
      </View>

      <View style={styles.lognDiv}>
        <BlueButton
          text="Check Out"
          //    funPostCheckOut
          onPress={() => Alert.alert('Under Development')}
        />
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
