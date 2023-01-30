import React, {useState} from 'react';
import {DrawerActions} from '@react-navigation/native';
import {
  Text,
  View,
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import menu from '../../../assets/_Header/menu.png';
import search from '../../../assets/_Header/search.png';
import AppHeader from '../../../ui/AppHeader';
import colors from '../../../theme/colors';
import pdf from '../../../assets/_Header/pdf.png';
import size from '../../../theme/spacing';
import spacing from '../../../theme/spacing';
import rfSpacing from '../../../theme/rfSpacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export const Reports = ({navigation}: any) => {
  const selection = (id: any) => {
    navigation.navigate('Ledger');
  };
  const selection1 = (id: any) => {
    navigation.navigate('Inventory');
  };
  const selection2 = (id: any) => {
    navigation.navigate('Aging');
  };
  const selection3 = (id: any) => {
    navigation.navigate('BussinessReport');
  };
  const selection4 = (id: any) => {
    navigation.navigate('Sale');
  };

  return (
    <>
      <AppHeader
        menuImg={menu}
        title={'Report List'}
        menuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        addPress={() => Alert('comming soon')}
      />
      <Pressable onPress={selection}>
        <View style={styles.itemDiv}>
          <Text style={styles.textStyling}>Ledger</Text>
        </View>
      </Pressable>
      <Pressable onPress={selection1}>
        <View style={styles.itemDiv}>
          <Text style={styles.textStyling}>Inventory</Text>
        </View>
      </Pressable>

      <Pressable onPress={selection4}>
        <View style={styles.itemDiv}>
          <Text style={styles.textStyling}>Sale</Text>
        </View>
      </Pressable>
      <Pressable onPress={selection2}>
        <View style={styles.itemDiv}>
          <Text style={styles.textStyling}>Aging Report</Text>
        </View>
      </Pressable>
      <Pressable onPress={selection3}>
        <View style={styles.itemDiv}>
          <Text style={styles.textStyling}>Bussiness Report</Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  textStyling: {
    margin: rfSpacing.l,
    color: colors.Indigo,
    fontWeight: '600',
    fontSize: rfSpacing['3xl'],
  },
  itemDiv: {
    backgroundColor: colors.white,
    width: windowwidth - rfSpacing['5xl'],
    marginTop: rfSpacing['xl'],
    paddingVertical: rfSpacing.xs,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: rfSpacing['xl'],
    flexDirection: 'row',
  },
});
