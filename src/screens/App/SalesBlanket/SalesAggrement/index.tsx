import React, {useState, useContext, useEffect, useRef} from 'react';
import EcomContext from '../../../../contextApi/DataProvider';
import {useTask} from '../../../../networking/UseTask';
import Loader from '../../../../ui/Loader';
import Error404 from '../../../../ui/Error';
import {Alert, Pressable, Text} from 'react-native';
import back from '../../../../assets/_Header/back-button.png';
import search from '../../../../assets/_Header/search.png';
import {DrawerActions} from '@react-navigation/native';
import AppHeader from '../../../../ui/AppHeader';
import SalesAggrementCard from './SalesAggrementCard';

export const SalesAggrement = ({navigation,route}: any) => {
  const {docNum}= route.params;
 // Alert.alert(docNum);
  const {Data}: any = useContext(EcomContext);
  const [Customers, setCustomers] = useState([]);
  const [SearchPhrase, setSearchPhrase] = useState('');

  let previousInputValue = useRef(0);

  previousInputValue.current++;
  const {isLoading, error, data, isSuccess} = useTask(
    `GetSalesBlanketDetails?DocNum=${docNum}`,
  );

  useEffect(() => {
 
    if (data?.data?.length > 0) {
      console.log('Sales Agreement', data.data);
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
    setCustomers(list);
  };

  return (
    <>
      <AppHeader
        menuImg={back}
        addImg={search}
        title={'Agreement Details'}
     //   menuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        menuPress={() => navigation.goBack()}
        addPress={() => alert('comming soon test')}
        SearchHeader={true}
        SearchPhrase={SearchPhrase}
        setSearchPhrase={SearchTerm}
      />
      <SalesAggrementCard data={Customers}/>
    </>
  );
};
