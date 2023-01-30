import React, {useContext, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  StatusBar,
  FlatList,
  Text,
  Alert,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import Home from '../../../assets/_Drawer/home.png';
import User from '../../../assets/_Drawer/user.png';

import About from '../../../assets/_Drawer/about.png';
import Tasks from '../../../assets/_Drawer/tasks.png';
import Chat from '../../../assets/_Drawer/chat.png';
import Orders from '../../../assets/_Drawer/shopping-bag.png';
import Customer from '../../../assets/_Drawer/customer.png';
import Quotation from '../../../assets/_Drawer/quotation.png';
import Inquiries from '../../../assets/_Drawer/call-center.png';
import Settings from '../../../assets/_Drawer/settings.png';
import Logout from '../../../assets/_Drawer/logout.png';
import Back from '../../../assets/_Drawer/back.png';

import MenuItem from './MenuItem';
import ViewScrool from '../../../ui/ViewScroll';
import {createDrawerNavigator} from '@react-navigation/drawer';
import EcomContext from '../../../contextApi/DataProvider';
import ShowToast from '../../../ui/Toast';
import {removeUser} from '../../../storage';
import colors from '../../../theme/colors';

import rfSpacing from '../../../theme/rfSpacing';
import {TouchableOpacity} from 'react-native-gesture-handler';

export function DrawerContent(props) {
  const {UserAuthentic, setUserAuthentic} = useContext(EcomContext);
  const [selectedId, setselectedId] = useState(0);

  const drawer = createDrawerNavigator();
  const logOut = async () => {
    const resp = await removeUser();
    if (resp) {
      setUserAuthentic(!UserAuthentic);
      ShowToast('success', `See You Soon`);
    }
  };

  const listArray = [
    {
      img: Home,
      title: 'Home',
      navigateTo: 'Home',
    },
    {img: User, title: 'Profile', navigateTo: 'Profile'},
    {img: About, title: 'AboutUs', navigateTo: 'AboutUs'},
    {img: Tasks, title: 'Activities', navigateTo: 'ActivityNavigator'},
    {img: Chat, title: 'Chat', navigateTo: 'Chat'},
    {img: Orders, title: 'Orders', navigateTo: 'OrdersNavigator'},
    {img: Customer, title: 'Customers', navigateTo: 'CustomerNavigator'},
    {img: Customer, title: 'Reports', navigateTo: 'ReportNavigator'},
    {img: Quotation, title: 'Quotations', navigateTo: 'QuotationNavigator'},
    {
      img: Quotation,
      title: 'SalesBlanket',
      navigateTo: 'SalesBlanketNavigator',
    },
    {img: Inquiries, title: 'Inquiries', navigateTo: 'Inquiries'},
    {img: Settings, title: 'Settings', navigateTo: 'Settings'},
    // {img: 'Home', title: 'Logout', navigateTo: 'logout'},
  ];

  const Item = ({
    title,
    onPress,
    backgroundColor,
    fontSize,
    img,
    fontWeight,
  }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.Container, {backgroundColor: backgroundColor}]}>
      <Image
        style={[styles.imgStyle, {fontWeight: fontWeight}]}
        resizeMode="contain"
        source={img}
      />
      <Text
        style={[
          styles.titleTxt,
          {fontSize: fontSize},
          {fontWeight: fontWeight},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
  // function FunctionalComponent(props, item) {
  //   if (item.title.Logout) {
  //     return (Logout = async () => {
  //       const resp = await removeUser();
  //       if (resp) {
  //         setUserAuthentic(!UserAuthentic);
  //         ShowToast('success', `See You Soon`);
  //       }
  //     });
  //   }
  //   return (
  //     <Item
  //       onPress={() =>
  //         props.navigation.navigate({
  //           name: item.navigateTo,
  //           name1: setselectedId(item.navigateTo),
  //         })
  //       }
  //       title={item.title}
  //       navigateTo={item.navigateTo}
  //       img={item.img}
  //       backgroundColor={backgroundColor}
  //     />
  //   );
  // }
  const renderItem = ({item, onPress}) => {
    const backgroundColor =
      item.navigateTo === selectedId ? '#EAFFFF' : '#ffffff';
    const fontSize = item.navigateTo === selectedId ? 14 : 14;
    const fontWeight = item.navigateTo === selectedId ? 'bold' : '500';

    return (
      <Item
        onPress={() =>
          props.navigation.navigate({
            name: item.navigateTo,
            name1: setselectedId(item.navigateTo),
          })
        }
        title={item.title}
        navigateTo={item.navigateTo}
        img={item.img}
        backgroundColor={backgroundColor}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    );
    //   return (onPress = {
    //     FunctionalComponent,
    //   });
  };

  return (
    <ViewScrool>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View {...props}>
        <View style={styles.logoDiv}>
          <View style={styles.backDiv}>
            <Pressable
              onPress={() =>
                props.navigation.dispatch(DrawerActions.closeDrawer())
              }>
              <Image
                style={styles.backImg}
                resizeMode="contain"
                source={Back}
              />
            </Pressable>
          </View>
          <View style={styles.f2}>
            <Text style={styles.DrawerHeaderText}>Welcome To Gulf App</Text>
          </View>
        </View>
        <View style={[styles.Spacehere]}></View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            marginTop: rfSpacing['4xl'],
          }}>
          <FlatList data={listArray} renderItem={renderItem} />
          <MenuItem img={Logout} title={'Logout'} onPress={logOut} />
        </View>
        {/* <View>
          <MenuItem
            img={Home}
            title={'Home'}
            onPress={() => props.navigation.navigate('Home')}
          />
          <MenuItem
            img={User}
            title={'Profile'}
            onPress={() => props.navigation.navigate('Profile')}
          />
          <MenuItem
            img={About}
            title={'About Us'}
            onPress={() => props.navigation.navigate('AboutUs')}
          />
          <MenuItem
            img={Tasks}
            title={'Activities'}
            onPress={() => props.navigation.navigate('ActivityNavigator')}
          />
          <MenuItem
            img={Chat}
            title={'Chat'}
            onPress={() => alert('Comming Soon!')}
          />
          <MenuItem
            img={Orders}
            title={'Orders'}
            onPress={() => props.navigation.navigate('OrdersNavigator')}
          />
          <MenuItem
            img={Customer}
            title={'Customers'}
            onPress={() => props.navigation.navigate('CustomerNavigator')}
          />
          <MenuItem
            img={Customer}
            title={'Reports'}
            onPress={() => props.navigation.navigate('ReportNavigator')}
          />
          <MenuItem
            img={Quotation}
            title={'Quotations'}
            onPress={() => props.navigation.navigate('QuotationNavigator')}
          />
          <MenuItem
            img={Quotation}
            title={'SalesBlanket'}
            onPress={() => props.navigation.navigate('SalesBlanketNavigator')}
          />
          <MenuItem
            img={Inquiries}
            title={'Inquiries'}
            onPress={() => alert('Comming Soon!')}
          />
          <MenuItem
            img={Settings}
            title={'Settings'}
            onPress={() => alert('Comming Soon!')}
          />
          <MenuItem img={Logout} title={'Logout'} onPress={logOut} />
        </View>  */}
      </View>
      <Text
        style={{
          fontSize: rfSpacing.m,
          textAlign: 'center',
          color: colors.grey,
        }}>
        App Version 0.0.1
      </Text>
    </ViewScrool>
  );
}

const styles = StyleSheet.create({
  logoDiv: {
    paddingTop: rfSpacing['l'],
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Spacehere: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: rfSpacing.ms,
    flex: 0.01,
  },
  f5: {flex: 5},
  f2: {flex: 2},

  backImg: {
    height: rfSpacing['5xl'],
    width: rfSpacing['5xl'],
    marginLeft: rfSpacing.m,
  },
  backDiv: {
    flex: 1,
    justifyContent: 'center',
    marginTop: rfSpacing['6xl'],
    marginLeft: rfSpacing['4xl'],
  },
  DrawerHeaderText: {
    marginTop: 46,
    fontSize: rfSpacing['4xl'],
    marginRight: rfSpacing['9xl'],
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.Danube,
  },
  B1: {
    tabBarActiveTintColor: 'tomato',
    backgroundColor: colors.tomato,
  },
  B2: {
    tabBarInactiveTintColor: 'white',
  },
  itemDiv: {
    backgroundColor: colors.Rajah,
    tabBarActiveTintColor: 'tomato',
  },
  item2Div: {
    backgroundColor: colors.Boulder,
    tabBarActiveTintColor: 'tomato',
  },

  item: {
    padding: rfSpacing['4xl'],
    marginVertical: rfSpacing.s,
    marginHorizontal: rfSpacing.l,
    flexDirection: 'row',
  },
  title: {
    fontSize: rfSpacing.l,
    color: colors.blue,
  },

  titleDv: {
    flex: 7,
    justifyContent: 'center',
  },
  titleTxt: {
    marginLeft: rfSpacing.m,
    fontSize: rfSpacing.xl,
    fontWeight: '700',
    color: colors.Indigo,
  },
  imgStyle: {
    height: rfSpacing['4xxm'],
    width: rfSpacing['4xxm'],
    marginLeft: rfSpacing.m,
  },
  imgDiv: {
    flex: 1,
    justifyContent: 'center',
  },
  Container: {
    marginHorizontal: rfSpacing['3xl'],
    marginVertical: rfSpacing.xs,
    flexDirection: 'row',
    height: rfSpacing['6xl'],
    borderRadius: rfSpacing.m,

    alignItems: 'center',
  },
  Container1: {
    marginLeft: rfSpacing['4xl'],
    marginVertical: rfSpacing.m,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
});
