import React, {useCallback, useState} from 'react';
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
import DatePicker from '../../../componenets/DatePicker';
import Header from '../../../ui/Header';

export const Home4 = props => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.containerStyling}>
      <Header title={'History'} />
      <View
        style={{
          marginTop: rfSpacing.m,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: colors.new_black,
        }}>
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
          text="Fetch"
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
    paddingHorizontal: rfSpacing['4xl'],
  },
  h61: {
    height: rfSpacing['6xl'],
  },
  singinTxt: {
    textAlignVertical: 'center',
    height: rfSpacing['6xl'],
    color: colors.Boulder,
    fontSize: rfSpacing.xl,
    fontWeight: '600',
    paddingLeft: rfSpacing.m,
  },
  date: {
    flexDirection: 'row',
    marginVertical: rfSpacing.m,
    borderWidth: 2,
    borderColor: colors.new_black,
    width: rfSpacing['1.4H'],
  },
  date2: {
    flexDirection: 'row',
    marginVertical: rfSpacing.m,

    width: rfSpacing['1.4H'],
  },
  lognDiv: {
    marginTop: rfSpacing['5xl'],
    height: rfSpacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
