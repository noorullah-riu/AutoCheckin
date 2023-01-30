import React, {useState, useContext, useEffect, useRef} from 'react';
import EcomContext from '../../../contextApi/DataProvider';
import {useTaskSales} from '../../../networking/UseTask';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import {Pressable, Text} from 'react-native';
import menu from '../../../assets/_Header/menu.png';
import search from '../../../assets/_Header/search.png';
import {DrawerActions} from '@react-navigation/native';
import AppHeader from '../../../ui/AppHeader';
import SalesComponentCard from './SalesCardComponent';

export const SalesBlankets = ({navigation}: any) => {
  const {Data}: any = useContext(EcomContext);
  const [Customers, setCustomers] = useState([]);
  const [SearchPhrase, setSearchPhrase] = useState('');

  let previousInputValue = useRef(0);

  previousInputValue.current++;
  const {isLoading, error, data, isSuccess} = useTaskSales(
    `GetAllSalesBlanket?slpcode=${Data.salePersonCode}`,
  );

  useEffect(() => {
    if (data?.data?.length > 0) {
      console.log('sales blanket List', data.data);
      setCustomers(data.data);
    }
  }, [data, isLoading, isSuccess, error]);

  if (isLoading) return <Loader />;

  if (error) return <Error404 />;

  const selection = (id: any) => {
    navigation.navigate('SalesAggrement', {docNum: id.docNum});
  };
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
        title={'Sales Blanket List'}
        menuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        addPress={() => alert('comming soon test')}
        SearchHeader={true}
        SearchPhrase={SearchPhrase}
        setSearchPhrase={SearchTerm}
      />

      <SalesComponentCard data={Customers} selection={selection} />
    </>
  );
};
