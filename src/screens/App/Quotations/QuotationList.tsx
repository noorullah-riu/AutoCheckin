import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList, Image, StyleSheet, Alert} from 'react-native';
import back from '../../../assets/_Header/back-button.png';
import pdf from '../../../assets/_Header/pdf.png';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import AppHeader from '../../../ui/AppHeader';
import {useTaskOrderDetails} from '../../../networking/UseTask';
import {Text} from 'react-native-animatable';
import spacing from '../../../theme/spacing';
import size from '../../../theme/spacing';
import colors from '../../../theme/colors';
import BlueButton from '../../../ui/BlueButton';
import {OrderDetailCOmponent} from '../../../componenets/OrderDetailsComponent';
import rfSpacing from '../../../theme/rfSpacing';

export const QuotationList = ({navigation, route}: any) => {
  const DATA = [
    {
      id: 1,
      companyName: 'GREEN FOOD ',
      Price: '20',
      Quality: 'Good',
      remarks: 'Remarks:',
    },
    {
      id: 2,
      companyName: 'TRIPPLE-EM ',
      Price: '21',
      Quality: 'Good',
      remarks: 'Remarks:',
    },
    {
      id: 3,
      companyName: 'GUJRANWALA FOOD ',
      Price: '22',
      Quality: 'Normal',
      remarks: 'Remarks:ASSAD',
    },
  ];
  const renderItem = ({item, index}: any) => (
    <View style={item.id % 2 == 0 ? styles.itemDiv : styles.item2Div}>
      <View
        style={{
          flexDirection: 'row',
          padding: spacing.m,
        }}>
        <View style={{flex: 3}}>
          <Text style={{color: colors.grey}}>{item.companyName}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{color: colors.grey}}>{item.Price}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{color: colors.grey}}>{item.Quantity || 'N/A'}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{color: colors.grey}}>{item.Price * item.Price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <AppHeader
        menuImg={back}
        pdfscreen={true}
        title={'Quotation Detail'}
        menuPress={() => navigation.goBack()}
      />
      <OrderDetailCOmponent data={DATA} />
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => item.id}
      /> */}
      <View style={styles.btnWraper}>
        <BlueButton text="Post Order" onPress={() => Alert.alert('done')} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  btnWraper: {
    height: rfSpacing['6xl'],
    marginVertical: rfSpacing.ms,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  itemDiv: {
    backgroundColor: colors.white,
  },
  item2Div: {
    backgroundColor: colors.containerStyling,
  },
  cName: {
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: rfSpacing.xl,
  },
  s12: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    marginTop: rfSpacing.xs,
    color: colors.grey,
  },
  s13: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    color: colors.grey,
  },
  s15: {
    marginLeft: rfSpacing.xl,
    fontSize: rfSpacing.l,
    fontWeight: '500',
    color: colors.Indigo,
  },

  fRow: {
    flexDirection: 'row',
  },
  yellowTxt: {
    fontSize: rfSpacing.m,
    color: colors.Rajah,
    fontWeight: '700',
    marginTop: rfSpacing.m,
    textAlign: 'right',
    marginRight: rfSpacing['xl'],
  },
  yellowTxt1: {
    fontSize: rfSpacing.m,
    color: colors.Rajah,
    fontWeight: '700',
    marginTop: rfSpacing.xxs,
    textAlign: 'right',
    marginRight: rfSpacing['xl'],
  },
  cnameDiv: {
    flexDirection: 'row',
    paddingHorizontal: rfSpacing.xl,
  },
  f1: {
    flex: 1,
  },
});
