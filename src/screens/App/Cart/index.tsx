import React, {useState, useEffect} from 'react';
import back from '../../../assets/_Header/back-button.png';
import AppHeader from '../../../ui/AppHeader';
import CartProductCard from './CartProductCard';
import BottomComponent from './BottomComponent';
import ErrorNoItem from '../../../ui/ErrorNoItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Cart = ({navigation}: any) => {
  const [Products, setProducts] = useState([]);
  const [Total, setTotal] = useState(0);

  console.log('cart index re renders');

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@Cart');
      if (jsonValue !== null) {
        console.log('Val in Cart jsonValue string', jsonValue);
        const itemsobj = JSON.parse(jsonValue);
        console.log('Val in Cart itemsobj object', itemsobj);

        let total = 0;
        itemsobj.forEach(element => {
          console.log('here', element.name);
          total = total + element.price * element.qty;
        });
        console.log('total', total);
        setTotal(total);
        setProducts(itemsobj);
      }
    } catch (error) {
      console.log('Val in Cart error ', error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AppHeader
        menuImg={back}
        title={'Cart Details'}
        menuPress={() => navigation.goBack()}
      />
      {Products?.length > 0 ? (
        <>
          <CartProductCard
            Products={Products}
            setProducts={setProducts}
            setTotal={setTotal}
            Total={Total}
          />

          <BottomComponent
            Products={Products}
            setProducts={setProducts}
            setTotal={setTotal}
            Total={Total}
          />
        </>
      ) : (
        <ErrorNoItem />
      )}
    </>
  );
};
