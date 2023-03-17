import React, {useCallback, useContext, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Alert,
  TextInput,
  Platform,
  Dimensions,
} from 'react-native';
import colors from '../../../theme/colors';
import BlueButton from '../../../ui/BlueButton';
//import DatePicker from '../../../componenets/DatePicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {DatePickerIOSBase} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import TimeCard from './Time';
import Header from '../../../ui/Header';
import FlatCard from './FlatCard';
import axios from 'axios';
import EcomContext from '../../../contextApi/DataProvider';
import Spacings from '../../../theme/Spacings';

export const History = props => {
  const {UserAuthentic, setUserAuthentic, Data, setData} =
    useContext(EcomContext);
  const [historyArr, sethistoryArr] = useState([]);

  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const [isPickerShow2, setIsPickerShow2] = useState(false);
  const [date2, setDate2] = useState(new Date(Date.now()));

  const [fromdate, setfromDate] = useState('');
  const [todate, settoDate] = useState('');

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
    console.log('------------', value.getFullYear());
    console.log('------------', value.getMonth());
    console.log('------------', value.getDate());

    var date = value.getDate(); //Current Date
    var month = value.getMonth() + 1; //Current Month
    var year = value.getFullYear(); //Current Year,.
    var today =
      (date < 10 ? '0' + date : date) +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      year;
    console.log('today', today);
    setfromDate(today);
    // handleDateChange(today);
  };

  const onChange2 = (event, value) => {
    setDate2(value);
    if (Platform.OS === 'android') {
      setIsPickerShow2(false);
    }
    console.log('------------', value.getFullYear());
    console.log('------------', value.getMonth());
    console.log('------------', value.getDate());

    var date = value.getDate(); //Current Date
    var month = value.getMonth() + 1; //Current Month
    var year = value.getFullYear(); //Current Year,.
    var today =
      (date < 10 ? '0' + date : date) +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      year;
    /*  year +'-' + (month < 10 ? '0' + month : month) +'-' +(date < 10 ? '0' + date : date); */

    console.log('today', today);
    settoDate(today);
    //handleDateChange(today);
  };
  const funGetHistory = () => {
    // console.log(date, 'date--->>');
    if (fromdate == '' || todate == '') {
      Alert.alert('Date is must');
    } else {
      axios
        .post('https://time.vmivmi.co:8092/api/VMI/GetHistory', {
          employeeid: Data?.employeeid,
          extEmpNo: Data?.extEmpNo,
          fromdate: fromdate,
          todate: todate,
          project: '',
        })
        .then(function (response) {
          console.log(response.data.TimesheetDetails);
          sethistoryArr(response.data.TimesheetDetails);
          //   setData(response);
          //  setUserAuthentic(!UserAuthentic);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = value => {
    console.warn('A date has been picked: ', value);

    console.log('------------', value.getFullYear());
    console.log('------------', value.getMonth());
    console.log('------------', value.getDate());

    var date = value.getDate(); //Current Date
    var month = value.getMonth() + 1; //Current Month
    var year = value.getFullYear(); //Current Year,.
    var today =
      (date < 10 ? '0' + date : date) +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      year;
    console.log('today', today);
    setfromDate(today);
    hideDatePicker();
  };

  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);

  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };

  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };

  const handleConfirm2 = value => {
    console.warn('A date has been picked: ', value);

    console.log('------------', value.getFullYear());
    console.log('------------', value.getMonth());
    console.log('------------', value.getDate());

    var date = value.getDate(); //Current Date
    var month = value.getMonth() + 1; //Current Month
    var year = value.getFullYear(); //Current Year,.
    var today =
      (date < 10 ? '0' + date : date) +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      year;
    console.log('today', today);
    settoDate(today);
    hideDatePicker2();
  };

  useEffect(() => {
    // funGetHistory();
  }, []);

  return (
    <View style={styles.containerStyling}>
      <Header title={'History'} />

      <TimeCard
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TimeCard
        isVisible={isDatePickerVisible2}
        mode="date"
        onConfirm={handleConfirm2}
        onCancel={hideDatePicker2}
      />
      <View style={styles.dateDIv}>
        <Pressable
          onPress={() =>
            //  setIsPickerShow(true)
            showDatePicker()
          }
          style={{
            flexDirection: 'row',
            marginTop: Spacings['4xl'],
            borderColor: '#aaa',
            borderWidth: 1,
          }}>
          <View
            style={{
              marginHorizontal: Spacings.wm,
              marginVertical: 0,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: colors.grey}}>Select From Date</Text>
          </View>

          <View
            style={{
              marginTop: 0,
              flex: 1,
              backgroundColor: '#296faa',
              height: Spacings['6xl'],
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff'}}>{fromdate}</Text>
          </View>
        </Pressable>
        {/* 
        {isPickerShow && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onChange}
          />
        )} */}
      </View>
      <View style={styles.dateDIv}>
        <Pressable
          onPress={() =>
            //   setIsPickerShow2(true)
            showDatePicker2()
          }
          style={{
            flexDirection: 'row',
            marginTop: Spacings['4xl'],
            borderColor: '#aaa',
            borderWidth: 1,
          }}>
          <View
            style={{
              marginHorizontal: Spacings.wm,
              marginVertical: 0,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: colors.grey}}>Select To Date</Text>
          </View>

          <View
            style={{
              marginTop: 0,
              flex: 1,
              backgroundColor: '#296faa',
              height: Spacings['6xl'],
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff'}}>{todate}</Text>
          </View>
        </Pressable>
        {/* 
        {isPickerShow2 && (
          <DateTimePicker
            value={date2}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={false}
            onChange={onChange2}
          />
        )} */}
      </View>
      <View style={styles.lognDiv}>
        <BlueButton text="Get History" onPress={funGetHistory} />
      </View>

      <FlatCard historyArr={historyArr} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyling: {
    backgroundColor: '#fff',
    flex: 1,
  },
  dateDIv: {
    marginTop: Spacings.m,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyling: {
    marginTop: Spacings['4xl'],
    textAlign: 'center',
    color: '#000',
  },
  h60: {
    height: Spacings['6xl'],
    paddingLeft: Spacings.wxxl,
  },
  h61: {
    height: Spacings['6xl'],
    marginHorizontal: Spacings.wl,
  },
  singinTxt: {
    textAlignVertical: 'center',
    height: Spacings['6xl'],
    color: colors.Boulder,
    fontSize: Spacings.xl,
    fontWeight: '600',
  },
  date: {
    flexDirection: 'row',
    marginVertical: Spacings.m,
    marginLeft: Spacings.wl,
    width: Spacings['w1.2H'],
  },
  date2: {
    flexDirection: 'row',
    marginVertical: Spacings.l,
    width: Spacings['w1.2H'],
  },
  lognDiv: {
    marginTop: Spacings['5xl'],
    height: Spacings['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
