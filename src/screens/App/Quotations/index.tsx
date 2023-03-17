import React, {useState, useContext, useEffect, useRef} from 'react';
import EcomContext from '../../../contextApi/DataProvider';
import {useTask} from '../../../networking/UseTask';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import menu from '../../../assets/_Header/menu.png';
import search from '../../../assets/_Header/search.png';
import {DrawerActions} from '@react-navigation/native';
import AppHeader from '../../../ui/AppHeader';
import QuotatonCard from './QuotatonCard';
import {Alert, Text} from 'react-native';
export const Quotations = ({navigation}: any) => {
  const {Data}: any = useContext(EcomContext);
  const [Customers, setCustomers] = useState([]);
  const [FCustomers, setFCustomers] = useState([]);
  const [SearchPhrase, setSearchPhrase] = useState('');

  let previousInputValue = useRef(0);

  previousInputValue.current++;
  const {isLoading, error, data, isFetching, isSuccess} = useTask(
    `GetSalesQuotitationbySalesPerson?slpCode=1`,
  );

  //  `GetCustomer?GroupCode=${Data.territory}&SlpCode=${Data.salePersonCode}`

  const selection = (id: any) => {
    navigation.navigate('QuotationList', {});
  };

  useEffect(() => {
    if (data?.data?.length > 0) {
      console.log('Quotation List', data.data);
      setCustomers(data.data);
    }
  }, [data, isLoading, isSuccess, error]);

  if (isLoading) return <Loader />;

  if (error) return <Error404 />;

  const SearchTerm = SearchPhrase => {
    setSearchPhrase(SearchPhrase);
    const list = Customers.filter(element =>
      element.CardName.toLowerCase().includes(SearchPhrase.toLowerCase()),
    );
    setFCustomers(list);
  };

  return (
    <>
      <AppHeader
        menuImg={menu}
        addImg={search}
        title={'Quotations List'}
        menuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        addPress={() => Alert.alert('comming soon')}
        SearchHeader={true}
        SearchPhrase={SearchPhrase}
        setSearchPhrase={SearchTerm}
      />
      <QuotatonCard
        customersList={
          SearchPhrase && SearchPhrase.length > 0 ? FCustomers : Customers
        }
        selection={selection}
      />
    </>
  );
};
