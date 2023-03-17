import React, {useState, useContext, useEffect, useRef} from 'react';
import {StyleSheet, Image, View, Text, Dimensions} from 'react-native';

import menu from '../../../assets/_Header/menu.png';
import EcomContext from '../../../contextApi/DataProvider';
import {useTask} from '../../../networking/UseTask';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import {DrawerActions} from '@react-navigation/native';
import AppHeader from '../../../ui/AppHeader';
import colors from '../../../theme/colors';
import commingSoon from '../../../assets/_Splash/commingSoon.png';
import rfSpacing from '../../../theme/rfSpacing';

export const Settings = ({navigation}: any) => {
  const {Data}: any = useContext(EcomContext);
  const [Customers, setCustomers] = useState([]);
  const [SearchPhrase, setSearchPhrase] = useState('');

  let previousInputValue = useRef(0);
  previousInputValue.current++;
  const {isLoading, error, data, isFetching, isSuccess} = useTask(
    `GetCustomer?GroupCode=${Data.territory}&SlpCode=${Data.salePersonCode}`,
  );

  useEffect(() => {
    if (data?.Data?.length > 0) {
      console.log('Customers List', data.Data);
      setCustomers(data.Data);
    }
  }, [data, isLoading, isSuccess, error]);

  if (isLoading) return <Loader />;

  if (error) return <Error404 />;

  return (
    <>
      <AppHeader
        menuImg={menu}
        title={'Settings'}
        menuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <View>
        <Image
          resizeMode="stretch"
          style={styles.imgStyle}
          source={commingSoon}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: rfSpacing['3H'],
    alignSelf: 'center',
    marginTop: rfSpacing['4xl'],
    borderRadius: rfSpacing.m,
    height: rfSpacing['3H'],
  },
});
