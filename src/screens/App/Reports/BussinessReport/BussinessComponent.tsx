import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';
import spacing from '../../../../theme/spacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const BussinessComponent = ({data}: any) => {
  const DATA = [
    {
      id: 1,
      Name: '4cPackages',
      Balance: '-351.43',
      Remaining: '351.43',
    },
    {
      id: 2,
      Name: 'ALi Mohsin',
      Balance: '0.36',
      Remaining: '-0.36',
    },
    {
      id: 3,
      Name: 'Ahmed',
      Balance: '200',
      Remaining: '-200',
    },
    {
      id: 4,
      Name: 'Akhtar',
      Balance: '51.15',
      Remaining: '-51.15',
    },
  ];

  const evenc = {color: colors.Indigo};
  const oddc = {color: colors.white};
  const renderItem = ({item}) => (
    <View style={item.id % 2 == 0 ? styles.itemDiv : styles.item2Div}>
      <View style={styles.fRow}>
        <View style={styles.flat1Div}>
          <Text style={styles.flatText}>{item.Name}</Text>
        </View>

        <View style={styles.flat1Div}>
          <Text style={styles.flatText}>{item.Balance}</Text>
        </View>

        <View style={styles.flat1Div}>
          <Text style={styles.flatText}>{item.Remaining}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemDiv: {
    height: rfSpacing['7xl'],
    paddingVertical: rfSpacing.m,
    width: windowwidth - rfSpacing.s,
    backgroundColor: colors.white,
    alignSelf: 'center',
  },
  flat1Div: {
    height: rfSpacing['4xl'],
    width: '20%',
    borderRadius: rfSpacing.m,
    marginVertical: rfSpacing.ms,
    justifyContent: 'space-between',
  },

  flatText: {
    color: colors.grey,
    fontSize: rfSpacing.m,
    fontWeight: '400',
    alignSelf: 'center',
  },
  fRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item2Div: {
    height: rfSpacing['7xl'],
    paddingVertical: rfSpacing.m,
    width: windowwidth - rfSpacing.s,
    backgroundColor: colors.containerStyling,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});

export default BussinessComponent;
