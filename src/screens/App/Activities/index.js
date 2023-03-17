import React, {useState, useContext, useEffect, useRef} from 'react';
import EcomContext from '../../../contextApi/DataProvider';
import {useTask} from '../../../networking/UseTask';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import {Pressable, Text} from 'react-native';
import menu from '../../../assets/_Header/menu.png';
import search from '../../../assets/_Header/search.png';
import {DrawerActions} from '@react-navigation/native';
import AppHeader from '../../../ui/AppHeader';
import {View} from 'react-native-animatable';
import ActivityCard from './ActivitiesCard';
import {Location} from './Location';
import styles from './styles';

export const Activities = ({navigation}: any) => {
  const {Data}: any = useContext(EcomContext);
  const [Customers, setCustomers] = useState([]);
  const [SearchPhrase, setSearchPhrase] = useState('');

  let previousInputValue = useRef(0);

  previousInputValue.current++;
  const {isLoading, error, data, isSuccess} = useTask(
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

  const SearchTerm = SearchPhrase => {
    setSearchPhrase(SearchPhrase);
    const list = Customers.filter(element =>
      element.CardName.toLowerCase().includes(SearchPhrase.toLowerCase()),
    );
    setCustomers(list);
  };

  return (
    <>
      <AppHeader
        menuImg={menu}
        addImg={search}
        title={'Activity List'}
        menuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        addPress={() => alert('comming soon test')}
        SearchHeader={true}
        SearchPhrase={SearchPhrase}
        setSearchPhrase={SearchTerm}
      />

      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate(Location)}
          style={styles.item1Div}>
          <Text style={styles.txtDate}> Get Location</Text>
        </Pressable>
      </View>
      <ActivityCard />
    </>
  );
};
