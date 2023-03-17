import React, {useState, useContext, useEffect, useRef} from 'react';
import {StyleSheet, Image, View, Text, Dimensions} from 'react-native';

import aboutpic from '../../../assets/_Drawer/aboutpic.png';
import menu from '../../../assets/_Header/menu.png';
import EcomContext from '../../../contextApi/DataProvider';
import {useTask} from '../../../networking/UseTask';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import {DrawerActions} from '@react-navigation/native';
import AppHeader from '../../../ui/AppHeader';
import colors from '../../../theme/colors';

import {Socialhandler} from './Socialhandler';
import rfSpacing from '../../../theme/rfSpacing';

export const AboutUs = ({navigation}: any) => {
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
        title={'About Us'}
        menuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <View>
        <Image resizeMode="stretch" style={styles.imgStyle} source={aboutpic} />
      </View>
      <View style={styles.textHeadDiv}>
        <Text style={styles.headStyle}>About Our Company</Text>
      </View>
      <View style={styles.textDiv}>
        <Text style={styles.txtStyle}>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. orem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </Text>
      </View>
      <Socialhandler />
    </>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: rfSpacing['3H'],
    alignSelf: 'center',
    marginTop: rfSpacing['4xl'],
    borderRadius: rfSpacing.m,
    height: rfSpacing['2H'],
  },

  textHeadDiv: {
    marginTop: rfSpacing.m,
  },
  textDiv: {
    bordrWidth: rfSpacing.m,
    marginVertical: rfSpacing.m,
  },
  txtStyle: {
    color: colors.grey,
    fontSize: rfSpacing.l,
    marginHorizontal: rfSpacing.xxl,
  },
  headStyle: {
    color: colors.Indigo,
    fontSize: rfSpacing['3xl'],
    fontWeight: '700',
    marginHorizontal: rfSpacing.xxl,
  },
});
