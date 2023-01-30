import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useTaskProduct} from '../../../networking/UseTask';
import back from '../../../assets/_Header/back-button.png';
import search from '../../../assets/_Header/search.png';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import ErrorNoItem from '../../../ui/ErrorNoItem';
import AppHeader from '../../../ui/AppHeader';
import BlueButton from '../../../ui/BlueButton';
import ProductCard from './ProductCard';
import spacing from '../../../theme/spacing';

import {useDispatch, useSelector} from 'react-redux';
import {setTerm, setarr} from '../../../redux/reducers/PRODUCTSReducer';
import * as Services from '../../../networking/auth/Services';
import ShowToast from '../../../ui/Toast';
import rfSpacing from '../../../theme/rfSpacing';

interface ProductsData {
  $id: string;
  availableQty: number;
  discount: number;
  id: string;
  itemCode: string;
  itemGroupCode: number;
  itemName: any;
  lineTotal: number;
  name: string;
  price: number;
  priceList: number;
  qty: number;
  rate: number;
  u_sub1: string;
  u_sub1_name: string;
  u_sub2: string;
  u_sub2_name: string;
  u_sub3: string;
  u_sub3_name: string;
  u_sub4: string;
  u_sub4_name: string;
  vatGourpSa: any;
}

export const Products = props => {
  const {CardCode, CardFName} = props.route.params;
  console.log('product index re renders');
  var Data = {
    CardCode: CardCode,
    CardFName: CardFName,
  };

  const dispatch = useDispatch();
  const {product, loading, Error, term, arr} = useSelector(
    (state: RootState) => state.products,
  );

  const [ProductsList, setProductsList] = useState([]);
  const [FProductsList, setFProductsList] = useState([]);
  const [SearchPhrase, setSearchPhrase] = useState('');
  const [Count, setCount] = useState(0);

  // const [ProductsEmpty, setProductsEmpty] = useState(false);

  /*   const {isLoading, error, data, isFetching, isSuccess} = useTaskProduct(
    `GetAllSAPItemsWithRespToCust?customerID=${CardCode}&customerFName=${CardFName}`,
  ); */
  const SearchTerm = (SearchPhrase: string) => {
    setSearchPhrase(SearchPhrase);
    const list = product.filter(element =>
      element.name.toLowerCase().includes(SearchPhrase.toLowerCase()),
    );
    setFProductsList(list);
  };

  /*       useEffect(() => {
    let Data = {
      CardCode: CardCode,
      CardFName: CardFName,
    };
    dispatch(Services.getProducts(Data));
  }, [route.params]);  */

  /*   const memoizedCallback = useMemo(() => {
    let Data = {
      CardCode: CardCode,
      CardFName: CardFName,
    };

    // const a= dispatch(Services.getProducts(Data));
    console.log(
      '------------- function calll',
      dispatch(Services.getProducts(Data)),
    );
  }, []); */

  const memoizedCallbackfun = useCallback(() => {
    dispatch(Services.getProducts(Data));
    /*   console.log(
      '------------- function calll',
      dispatch(Services.getProducts(Data)),
    ); */
  }, []);

  useEffect(() => {
    /*    let Data = {
      CardCode: CardCode,
      CardFName: CardFName,
    }; */
    // console.log('------------- useEffect call',memoizedCallbackfun);
    //  dispatch(Services.getProducts(Data));
    memoizedCallbackfun();
  }, []);

  /*  useEffect(() => {
    if (Error) {
      ShowToast('error', 'Error Loading ,Plz Try Again Later');
    }
  }, [Error]); */

  if (loading) return <Loader />;

  /* 
  useLayoutEffect(() => {
    if (data?.data?.length > 0) {
      console.log('Products List', data.data);
      setProductsList(data.data);
    } else {
      setProductsList([]);
      console.log('Products List', data?.data);
    }
  }, [data, isLoading, isSuccess, error]); */

  /*   if (isLoading) return <Loader />;
  if (error) return <Error404 />; */

  return (
    <>
      <AppHeader
        menuImg={back}
        addImg={search}
        title={'Products List'}
        menuPress={() => props.navigation.goBack()}
        
        addPress={() => alert('comming soon')}
        SearchHeader={true}
        SearchPhrase={SearchPhrase}
        setSearchPhrase={SearchTerm}
      />

      <TouchableOpacity
        style={{backgroundColor: 'yellow', padding: 11}}
        onPress={() => dispatch(setTerm('summer'))}
        // onPress={() => setCount(Count + 1)}
      >
        <Text>---{term}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor: 'yellow', padding: 11}}
        onPress={() => dispatch(setarr([...arr, 'summer']))}
        // onPress={() => setCount(Count + 1)}
      >
        <Text>---{arr?.length}</Text>
      </TouchableOpacity>
      {/*       <View style={{paddingTop: spacing['5xl']}}></View> */}
      {product?.length > 0 ? (
        <>
          <ProductCard
            Products={
              SearchPhrase && SearchPhrase.length > 0 ? FProductsList : product
            }
            setProducts={setProductsList}
            //   setProducts={dispatch(Services.getProducts())}
          />
          <View style={styles.btnWraper}>
            <BlueButton
              text="Next"
              onPress={() => props.navigation.navigate('Cart')}
            />
          </View>
        </>
      ) : (
        <ErrorNoItem />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  btnWraper: {
    height: rfSpacing['6xl'],
    marginVertical: rfSpacing.ms,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
