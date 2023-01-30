import React, {useState, useContext} from 'react';
import {
  Text,
  View,
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import search from '../../../../assets/_Header/search.png';
import EcomContext from '../../../../contextApi/DataProvider';
import back from '../../../../assets/_Header/back-button.png';
import AppHeader from '../../../../ui/AppHeader';
import colors from '../../../../theme/colors';
import {useTask} from '../../../../networking/UseTask';
import DatePicker from '../../../../componenets/DatePicker';
import ErrorNoItem from '../../../../ui/ErrorNoItem';
import spacing from '../../../../theme/spacing';

// import AgingComponent from './AgingComponent';
import AgingPdf from './AgingPdf';
import rfSpacing from '../../../../theme/rfSpacing';
import SalesComponent from './SalesComponent';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export const Sale = ({navigation}: any) => {
  const [shouldShow, setShouldShow] = useState(false);
  const {Data}: any = useContext(EcomContext);
  const [OrdersEmpty, setOrdersEmpty] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const {isLoading, error, data, isFetching, isSuccess} = useTask(
    `GetCustomer?GroupCode=${Data.territory}&SlpCode=${Data.salePersonCode}`,
  );

  return (
    <>
      <AppHeader
        menuImg={back}
        title={'Sales List'}
        menuPress={() => navigation.goBack()}
        addPress={() => Alert.alert('comming soon')}
      />
      {OrdersEmpty ? (
        <ErrorNoItem />
      ) : (
        <>
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
            <View style={{flex: 1}}>
              <DatePicker
                title={'End Date'}
                open={open}
                setOpen={setOpen}
                date={date}
                setDate={setDate}
              />
            </View>
          </View>

          <View style={styles.ledgerDiv}>
            <View style={styles.pickedDateContainer}>
              <Pressable
                onPress={() => setShouldShow(!shouldShow)}
                style={styles.item1Div}>
                <Text style={styles.txtDate}> Get Ledger</Text>
              </Pressable>
              {shouldShow ? (
                <Pressable style={styles.item2Div}>
                  <Text style={styles.txtDate}> Export Invoice</Text>
                </Pressable>
              ) : null}
            </View>
          </View>

          <SalesComponent sections={data}></SalesComponent>
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
