import React, {useCallback, useContext, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Alert,
  TextInput,
  Dimensions,
} from 'react-native';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';

import BlueButton from '../../../ui/BlueButton';
import DatePicker from '../../../componenets/DatePicker';
import Header from '../../../ui/Header';
import FlatCard from './FlatCard';
const windowwidth = Dimensions.get('window').width;
import axios from 'axios';
import EcomContext from '../../../contextApi/DataProvider';

export const History = props => {
  const {UserAuthentic, setUserAuthentic, Data, setData} =
    useContext(EcomContext);

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const funGetHistory = () => {
    if (Data == null) {
      Alert.alert('Inputs Are Must');
    } else {
      axios
        .post('VMI/GetHistory', {
          employeeid: '1',
          extEmpNo: '1234',
          fromdate: '10-01-2023',
          todate: '15-01-2023',
          project: '',
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
    funGetHistory();
  }, []);

  return (
    <View style={styles.containerStyling}>
      <Header title={'History'} />
      <View style={styles.dateDIv}>
        <View style={styles.h60}>
          <Text style={styles.singinTxt}>Date</Text>
        </View>
        <View style={styles.date}>
          <View style={{flex: 1}}>
            <DatePicker
              title={'Start Date'}
              open={open}
              setOpen={setOpen}
              date={date}
              setDate={setDate}
            />
          </View>
        </View>

        <View style={styles.h61}>
          <Text style={styles.singinTxt}>To</Text>
        </View>
        <View style={styles.date2}>
          <View style={{flex: 1}}>
            <DatePicker
              title={'Start Date'}
              open={open}
              setOpen={setOpen}
              date={date}
              setDate={setDate}
            />
          </View>
        </View>
      </View>
      <View style={styles.lognDiv}>
        <BlueButton
          text="Get History"
          onPress={() => Alert.alert('Under Development')}
        />
      </View>

      <FlatCard />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyling: {
    backgroundColor: '#fff',
    flex: 1,
  },
  dateDIv: {
    marginTop: rfSpacing.m,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyling: {
    marginTop: rfSpacing['4xl'],
    textAlign: 'center',
    color: '#000',
  },
  h60: {
    height: rfSpacing['6xl'],
    paddingLeft: rfSpacing.xxl,
  },
  h61: {
    height: rfSpacing['6xl'],
    marginHorizontal: rfSpacing.l,
  },
  singinTxt: {
    textAlignVertical: 'center',
    height: rfSpacing['6xl'],
    color: colors.Boulder,
    fontSize: rfSpacing.xl,
    fontWeight: '600',
  },
  date: {
    flexDirection: 'row',
    marginVertical: rfSpacing.m,
    marginLeft: rfSpacing.l,
    width: rfSpacing['1.2H'],
  },
  date2: {
    flexDirection: 'row',
    marginVertical: rfSpacing.l,
    width: rfSpacing['1.2H'],
  },
  lognDiv: {
    marginTop: rfSpacing['5xl'],
    height: rfSpacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
