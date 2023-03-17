import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import EcomContext from '../../../contextApi/DataProvider';
import menu from '../../../assets/_Header/menu.png';
import search from '../../../assets/_Header/search.png';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import ErrorNoItem from '../../../ui/ErrorNoItem';
import {DrawerActions} from '@react-navigation/native';
import AppHeader from '../../../ui/AppHeader';
import OrderItme from './OrderItem';
import {useTaskOrders} from '../../../networking/UseTask';
import DatePicker from '../../../componenets/DatePicker';
import spacing from '../../../theme/spacing';
import rfSpacing from '../../../theme/rfSpacing';
import moment from "moment";

import ShowToast from '../../../ui/Toast';
import {useDispatch, useSelector} from 'react-redux';
import * as Services from '../../../networking/auth/Services';

export const Orders = ({navigation}) => {
  const {Data, setData}: any = useContext(EcomContext);
  const [OrdersList, setOrdersList] = useState([]);
  const [OrdersEmpty, setOrdersEmpty] = useState(false);

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());


  const dispatch = useDispatch();
  const {orderList, loading, Error} = useSelector(
    (state: RootState) => state.orders,
  );
  const selection = (id: any) => {
    navigation.navigate('OrderDetail', {docNum: id.docNum});
  };
  useEffect(() => {
    console.log(date,'------------>');
    console.log(moment("2021-07-14T00:00:00.000Z").utc().format('YYYY-MM-DD'));
    console.log(moment(date).utc().format('YYYY-MM-DD'));
    let obj={
      date: moment(date).utc().format('YYYY-MM-DD'),
      code:Data.salePersonCode,
    }
    dispatch(Services.getOrders(obj));
  }, [date]);

  
  useEffect(() => {
    if (Error) {
      ShowToast('error', 'Error Loading ,Plz Try Again Later');
    }
  }, [Error]);

  if (loading) return <Loader />;
  return (
    <>
      <AppHeader
        menuImg={menu}
        addImg={search}
        title={'Orders List'}
        pdfscreen={false}
        menuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        addPress={() => alert('comming soon')}
        SearchHeader={true}
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
    
          </View>
      
          <OrderItme orderList={orderList} selection={selection} />
        </>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  date: {
    flexDirection: 'row',
    marginVertical: rfSpacing.m,
    marginStart: rfSpacing['4xxsl'],
  },
});
