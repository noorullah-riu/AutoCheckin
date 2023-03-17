import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';

import EcomContext from '../../../../contextApi/DataProvider';
import back from '../../../../assets/_Header/back-button.png';
import AppHeader from '../../../../ui/AppHeader';
import colors from '../../../../theme/colors';
import {useTask} from '../../../../networking/UseTask';
import pdf from '../../../../assets/_Header/pdf.png';
import DatePicker from '../../../../componenets/DatePicker';
import ErrorNoItem from '../../../../ui/ErrorNoItem';
import spacing from '../../../../theme/spacing';
import BussinessComponent from './BussinessComponent';
import BussinessPdf from './BussinessPdf';
import rfSpacing from '../../../../theme/rfSpacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export const BussinessReport = ({navigation}: any) => {
  const {Data}: any = useContext(EcomContext);
  const [OrdersEmpty, setOrdersEmpty] = useState(false);

  const {isLoading, error, data, isFetching, isSuccess} = useTask(
    `GetCustomer?GroupCode=${Data.territory}&SlpCode=${Data.salePersonCode}`,
  );

  return (
    <>
      <AppHeader
        menuImg={back}
        addImg={pdf}
        pdfscreen={true}
        title={'Bussiness Customer List'}
        menuPress={() => navigation.goBack()}
        addPress={() => navigation.navigate(BussinessPdf)}
      />
      {OrdersEmpty ? (
        <ErrorNoItem />
      ) : (
        <>
          {/* <View style={styles.ledgerDiv}>
            <View style={styles.pickedDateContainer}>
              <Pressable
                onPress={() => setShouldShow(!shouldShow)}
                style={styles.item1Div}>
                <Text style={styles.txtDate}> Get Ledger</Text>
              </Pressable>
              {shouldShow ? (
                <Pressable
                  onPress={() => navigation.navigate(AgingPdf)}
                  style={styles.item2Div}>
                  <Text style={styles.txtDate}> Export Invoice</Text>
                </Pressable>
              ) : null}
            </View>
          </View> */}
          <View style={styles.flatHeadDiv}>
            <View style={styles.pickedDateContainer}>
              <View style={styles.flat1Div}>
                <Text style={styles.flatText}>Name</Text>
              </View>

              <View style={styles.flat1Div}>
                <Text style={styles.flatText}>Balance</Text>
              </View>

              <View style={styles.flat1Div}>
                <Text style={styles.flatText}>Remaining</Text>
              </View>
            </View>
          </View>
          <BussinessComponent sections={data}></BussinessComponent>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  date: {
    flexDirection: 'row',
    marginVertical: rfSpacing.m,
    marginLeft: rfSpacing['4xl'],
    marginHorizontal: rfSpacing.xxs,
  },
  item1Div: {
    height: rfSpacing['7xl'],
    width: '45%',
    marginHorizontal: rfSpacing.ms,
    borderRadius: rfSpacing.m,
    backgroundColor: colors.Indigo,
    justifyContent: 'space-between',
  },
  item2Div: {
    height: rfSpacing['7xl'],
    width: '45%',
    marginHorizontal: rfSpacing.xl,
    borderRadius: rfSpacing.m,
    backgroundColor: colors.Indigo,
    justifyContent: 'space-between',
  },
  ledgerDiv: {
    height: rfSpacing['7xl'],
    marginVertical: rfSpacing.l,
    marginHorizontal: rfSpacing.m,
    justifyContent: 'space-between',
  },
  pickedDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  datePicker: {
    width: 320,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  timeDiv: {
    marginTop: rfSpacing.m,
    height: rfSpacing['7xl'],
    width: '50%',
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  style: {marginTop: rfSpacing.m},
  txtDate: {
    marginTop: rfSpacing.xl,
    color: colors.white,
    alignSelf: 'center',
  },

  flatHeadDiv: {
    marginVertical: rfSpacing.m,
    paddingVertical: rfSpacing.m,
    backgroundColor: colors.meeting_Time,
    marginHorizontal: rfSpacing.xxs,
    justifyContent: 'space-between',
  },
  flat1Div: {
    width: '20%',
    borderRadius: rfSpacing.m,
    marginVertical: rfSpacing.m,
    justifyContent: 'space-between',
  },

  flatText: {
    color: colors.white,
    fontSize: rfSpacing.m,
    fontWeight: '800',
    alignSelf: 'center',
  },
});
