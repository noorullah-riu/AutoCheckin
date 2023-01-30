import React, {useState, useContext, useEffect} from 'react';
import EcomContext from '../../../contextApi/DataProvider';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import menu from '../../../assets/_Header/menu.png';
import search from '../../../assets/_Header/search.png';
import {DrawerActions} from '@react-navigation/native';
import AppHeader from '../../../ui/AppHeader';
import CustomerCard from './CustomerCard';
import {View} from 'react-native-animatable';
import spacing from '../../../theme/spacing';
import {useDispatch, useSelector} from 'react-redux';
import * as Services from '../../../networking/auth/Services';
import ShowToast from '../../../ui/Toast';
import {Alert} from 'react-native';

interface CustomersData {
  CardCode: string;
  CardName: string;
  CardFName: string;
  AccountBalance: number;
  CreditLimit: number;
  RemainingLimit: number;
  TaxCode: string;
  TaxName: string;
  TaxRate: any;
}

export const Customers = ({navigation}: any) => {
  console.log('customer Rerenders +++++++++++');
  const dispatch = useDispatch();
  const {customers, loading, Error} = useSelector(
    (state: RootState) => state.message,
  );

  const {Data}: any = useContext(EcomContext);
  const [FCustomers, setFCustomers] = useState<CustomersData[]>([]);
  const [SearchPhrase, setSearchPhrase] = useState('');

  const selection = (id: any) => {
    navigation.navigate('Products', {
      CardCode: id.CardCode,
      CardFName: id.CardFName,
    });
    setSearchPhrase('');
  };

  const SearchTerm = (SearchPhrase: string) => {
    setSearchPhrase(SearchPhrase);
    const list = customers.filter(element =>
      element.CardName.toLowerCase().includes(SearchPhrase.toLowerCase()),
    );
    setFCustomers(list);                                                                                
  };

  useEffect(() => {
    dispatch(Services.getCustomers(Data));
  }, []);

  useEffect(() => {
    if (Error) {
      ShowToast('error', 'Error Loading ,Plz Try Again Later');
    }
  }, [Error]);

  if (loading) return <Loader />;

  /*   if (Error) return <Error404 />; */

  return (
    <>
      <AppHeader
        menuImg={menu}
        addImg={search}
        title={'Customers List'}
        menuPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        addPress={() => Alert.alert('comming soon')}
        SearchHeader={true}
        SearchPhrase={SearchPhrase}
        setSearchPhrase={SearchTerm}
      />
      <CustomerCard
        customersList={
          SearchPhrase && SearchPhrase.length > 0 ? FCustomers : customers
        }
        selection={selection}
      />
    </>
  );
};
