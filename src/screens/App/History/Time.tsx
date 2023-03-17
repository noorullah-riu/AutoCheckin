import React from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';

import {Footer_Component} from '../../../componenets/FooterComponent';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import styles from './styles';

const TimeCard = ({isVisible,onConfirm,onCancel}: any) => {


  return (
    <View>
    <DateTimePickerModal
      isVisible={isVisible}
      mode="date"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  </View>
  );
};
export default TimeCard;
