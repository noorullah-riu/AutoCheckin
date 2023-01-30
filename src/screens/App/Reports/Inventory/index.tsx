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
import size from '../../../../theme/spacing';
import spacing from '../../../../theme/spacing';
import InventoryCard from './InventoryCard';
import rfSpacing from '../../../../theme/rfSpacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export const Inventory = ({navigation}: any) => {
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
        title={'Inventory List'}
        menuPress={() => navigation.goBack()}
        addPress={() => alert('comming soon')}
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
                onPress={() => Alert.alert('Sale Pressed')}
                style={styles.item1Div}>
                <Text style={styles.txtDate}> Get Ledger</Text>
              </Pressable>
              <Pressable
                onPress={() => Alert.alert('Sale Pressed')}
                style={styles.item2Div}>
                <Text style={styles.txtDate}> Export Invoice</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.flatHeadDiv}>
            <View style={styles.pickedDateContainer}>
              <View style={styles.flat1Div}>
                <Text style={styles.flatText}>Posting Date</Text>
              </View>
              <View style={styles.flat1Div}>
                <Text style={styles.flatText}>Invoice#</Text>
              </View>
              <View style={styles.flat1Div}>
                <Text style={styles.flatText}>Debit</Text>
              </View>
              <View style={styles.flat1Div}>
                <Text style={styles.flatText}>Crediit</Text>
              </View>
              <View style={styles.flat1Div}>
                <Text style={styles.flatText}>Balance</Text>
              </View>
            </View>
          </View>

          <InventoryCard
            sections={data}
            // keyExtractor={(item, index) => item + index}
            // renderItem={({item}) => <item title={item} />}
            // renderSectionHeader={({section: {title}}) => (
            //   <Text style={styles.header}>{title}</Text>
            // )}

            // if (item.id % 2 == 0) {<Text style={{color: colors.Rajah}}>{data}</Text>}
            // else {<Text style={{color: colors.Indigo}}>{data}</Text>}
          />
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
  txtDate: {
    marginTop: rfSpacing.xxl,
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
