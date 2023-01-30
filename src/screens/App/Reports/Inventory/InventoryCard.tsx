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
import spacing from '../../../../theme/spacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const InventoryCard = ({data}: any) => {
  const DATA = [
    {
      id: 1,
      activityDate: '2022-10-1',
      invoice: '2300240',
      debit: '99359.9',
      credit: '0',
      Balance: '0.00',
    },
    {
      id: 2,
      activityDate: '2022-10-2',
      invoice: '2300240',
      debit: '71359.2',
      credit: '0',
      Balance: '0.00',
    },
    {
      id: 3,
      activityDate: '2022-10-3',
      invoice: '2300547',
      debit: '0',
      credit: '50000',
      Balance: '0.00',
    },
    {
      id: 4,
      activityDate: '2022-10-4',
      invoice: '23143330',
      debit: '1130',
      credit: '0',
      Balance: '0.00',
    },
  ];

  const evenc = {color: colors.Indigo};
  const oddc = {color: colors.white};

  //   const display = (item: any) => {
  //     if (item => item.id % 2 == 0) {
  //       <Text style={{color: colors.Rajah}}>{data}</Text>;
  //     } else {
  //       <Text style={{color: colors.Indigo}}>{data}</Text>;
  //     }
  //   };

  const renderItem = ({item}) => (
    <View style={item.id % 2 == 0 ? styles.itemDiv : styles.item2Div}>
      <View style={styles.fRow}>
        <View style={styles.flat1Div}>
          <Text style={styles.flatText}>{item.activityDate}</Text>
        </View>
        <View style={styles.flat1Div}>
          <Text style={styles.flatText}>{item.invoice}</Text>
        </View>
        <View style={styles.flat1Div}>
          <Text style={styles.flatText}>{item.debit}</Text>
        </View>
        <View style={styles.flat1Div}>
          <Text style={styles.flatText}>{item.credit}</Text>
        </View>
        <View style={styles.flat1Div}>
          <Text style={styles.flatText}>{item.Balance}</Text>
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
    height: 50,
    paddingVertical: spacing.m,
    width: windowwidth - spacing.s,
    backgroundColor: colors.white,
    alignSelf: 'center',
  },
  flat1Div: {
    height: spacing['4xl'],
    width: '20%',
    borderRadius: spacing.m,
    marginVertical: 6,
    justifyContent: 'space-between',
  },

  flatText: {
    color: colors.grey,
    fontSize: 10,
    fontWeight: '400',
    alignSelf: 'center',
  },
  fRow: {
    flexDirection: 'row',
  },
  item2Div: {
    height: 50,
    paddingVertical: spacing.m,
    width: windowwidth - spacing.s,
    backgroundColor: colors.containerStyling,
    alignSelf: 'center',
  },
});

export default InventoryCard;
