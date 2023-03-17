import React from 'react';
import styles from './styles';
import {Text, View, TextInput,Pressable, Image, Dimensions, Alert} from 'react-native';

const InputWithTitle = ({Name,PlaceHolder,value,setVal,}: any) => {
  return (
    <View style={{marginTop:10}}>
       <Text style={styles.sendtoTxt}>{Name}</Text>
                <View style={styles.passDiv}>
                  <View style={{}}>
                    <TextInput
                      style={styles.txtInput}
                      //    onBlur={handleBlur('UserCode')}
                      //   onChangeText={handleChange('UserCode')}
                      //   value={values.UserCode}
                      onChangeText={value => setVal(value)}
                      value={value}
                      placeholder={PlaceHolder}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>
                </View>
    </View>
  );
};

export default InputWithTitle;
