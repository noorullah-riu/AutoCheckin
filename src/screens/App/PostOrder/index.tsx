import React, {useState, useContext, useEffect} from 'react';
import EcomContext from '../../../contextApi/DataProvider';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import menu from '../../../assets/_Header/menu.png';
import search from '../../../assets/_Header/search.png';
import {DrawerActions} from '@react-navigation/native';
import AppHeader from '../../../ui/AppHeader';

import {View} from 'react-native-animatable';
import spacing from '../../../theme/spacing';
import {useDispatch, useSelector} from 'react-redux';
import * as Services from '../../../networking/auth/Services';
import ShowToast from '../../../ui/Toast';

export const PostOrder = ({navigation}: any) => {
  return (
    <>
      <AppHeader
        menuImg={menu}
        addImg={search}
        title={'PostOrder List'}
        menuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        addPress={() => alert('comming soon')}
      />
    </>
  );
};
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
