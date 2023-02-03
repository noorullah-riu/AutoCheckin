import React, {useCallback, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
import DropDownPicker from 'react-native-dropdown-picker';
import {useForm, Controller} from 'react-hook-form';
import BlueButton from '../../../ui/BlueButton';
import Header from '../../../ui/Header';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';
export const Home2 = props => {
  const [genderOpen, setGenderOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState(null);
  const [company, setComapny] = useState([
    {label: 'Project', value: 'Project'},
    {label: 'Project1', value: 'Project1'},
    {label: 'Project2', value: 'Project2'},
    {label: 'Project3', value: 'Pr3ject1'},
    {label: 'Project4', value: 'Project4'},
    {label: 'Project5', value: 'Project5'},
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
  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
      {/* <View style={styles.containerStyling}> */}
      <Header title={'Check In'} />

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
      </View>
      <View
        style={{
          marginTop: rfSpacing.m,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: rfSpacing['5xl'],
        }}>
        <View style={styles.h60}>
          <Text style={styles.singinTxt}>Field1</Text>
        </View>
        <View style={styles.h60}>
          <Text style={styles.singinTxt2}>Field2</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: rfSpacing['4xl'],
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: rfSpacing['5xl'],
        }}>
        <View style={styles.inputEmail}>
          <TextInput style={styles.inputStyle} keyboardType="default" />
        </View>
        <View style={styles.inputEmail}>
          <TextInput style={styles.inputStyle} keyboardType="default" />
        </View>
      </View>
      <View
        style={{
          marginTop: rfSpacing['4xl'],
          marginHorizontal: rfSpacing['5xl'],
        }}>
        <View style={styles.h60}>
          <Text style={styles.singinTxt}>Field3</Text>
        </View>
        <View style={styles.inputEmail}>
          <TextInput style={styles.inputStyle2} keyboardType="default" />
        </View>
      </View>

      <View style={styles.lognDiv}>
        <BlueButton
          text="Check In"
          onPress={() => Alert.alert('Under Development')}
        />
      </View>
      {/* </View> */}
    </KeyboardAwareScrollView>
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
    marginTop: RFPercentage(15),
    height: rfSpacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
