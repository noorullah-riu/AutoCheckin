import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';
import spacing from '../../../../theme/spacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
const sample = [
  {
    id: 1,
    PostingDate: 2021,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
  {
    id: 2,
    PostingDate: 2022,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
  {
    id: 3,
    PostingDate: 2023,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
  {
    id: 4,
    PostingDate: 2024,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
  {
    id: 5,
    PostingDate: 2025,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
  {
    id: 6,
    PostingDate: 2026,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
];
const SecondryBox = ({item}: any) => {
  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          height: rfSpacing['1H'],
          width: 130,
          marginTop: rfSpacing.xs,
          marginLeft: rfSpacing.m,
        }}>
        <Text style={styles.flatText1}>PostingDate:{item.PostingDate}</Text>
        <Text style={styles.flatText2}>Invoice:{item.Invoice}</Text>
        <Text style={styles.flatText2}>Credit:{item.Credit}</Text>
        <Text style={styles.flatText2}>Debit:{item.Debit}</Text>
        <Text style={styles.flatText2}>Balance:{item.Balance}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={sample}
      renderItem={renderItem}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemDiv: {
    height: rfSpacing['7xl'],
    paddingVertical: rfSpacing.m,
    width: windowwidth - rfSpacing.s,
    alignSelf: 'center',
  },
  flatText1: {
    color: colors.grey,
    marginTop: rfSpacing['5msxl'],
    fontSize: rfSpacing.l,
    borderBottomWidth: 0.5,
    borderBottomColor: '#AAA',
  },
  flatText2: {
    color: colors.grey,
    marginTop: rfSpacing['4xxsl'],
    fontSize: rfSpacing.l,
    borderBottomWidth: 0.5,
    borderBottomColor: '#AAA',
  },
});

export default SecondryBox;
