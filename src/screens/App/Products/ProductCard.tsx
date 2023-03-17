import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import box from '../../../assets/_Cart/box.png';
import minus from '../../../assets/_Customer/minus.png';
import * as yup from 'yup';
import plus from '../../../assets/_Customer/plus.png';
import cart from '../../../assets/_Cart/shopping-cart.png';
import * as Animatable from 'react-native-animatable';
import colors from '../../../theme/colors';
import currency from '../../../theme/currency';

import AsyncStorage from '@react-native-async-storage/async-storage';
import spacing from '../../../theme/spacing';
import rfSpacing from '../../../theme/rfSpacing';

const windowwidth = Dimensions.get('window').width;

const ProductCard = ({Products, setProducts}: any) => {
  const [edit, setedit] = useState(false);
  const [selectedId, setselectedId] = useState();

  console.log('product card rendersssssss');

  const selectionAdd = (id: any) => {
    console.log(id);
    setselectedId(id);
  };

  const selectionConfirm = (item: any) => {
    // add this item to asyncstorage
    console.log(item);

    storeData(item);
    setselectedId(!item.id);
  };

  const storeData = async newItme => {
    try {
      var localarray = [];
      localarray.push(newItme);

      var Existingitem = await getData();
      if (Existingitem) {
        console.log('Existingitem', Existingitem); //has object init
        Existingitem.push(newItme);
        const stringofArray2 = JSON.stringify(Existingitem);

        await AsyncStorage.setItem('@Cart', stringofArray2);
      } else {
        const stringofArray = JSON.stringify(localarray);
        await AsyncStorage.setItem('@Cart', stringofArray);
      }
    } catch (error) {
      // Error saving data
    }
  };

  const getData = async () => {
    try {
      const bookmarksString = await AsyncStorage.getItem('@Cart');
      if (bookmarksString !== null) {
        // We have data!!
        const bookmarksArray = JSON.parse(bookmarksString);
        return bookmarksArray;
      }
    } catch (error) {
      return 'error';
      // Error retrieving data
    }
  };

  const incrementFun = (index: any, item: any) => {
    let copyProductArray = Products;
    const updatedObject = copyProductArray.find(x => x.name == item.name);
    updatedObject.qty = Number(updatedObject.qty) + 1;
    copyProductArray[index] = updatedObject;
    setProducts(copyProductArray);
    setedit(!edit);
  };

  const decrementFun = (index: any, item: any) => {
    let copyProductArray = Products;
    const updatedObject = copyProductArray.find(x => x.name === item.name);
    if (updatedObject.qty !== 0) updatedObject.qty = updatedObject.qty - 1;
    copyProductArray[index] = updatedObject;
    setProducts(copyProductArray);
    setedit(!edit);
  };
  const customInput = (index: any, item: any, quantity: any) => {
    console.log('on text change func ', quantity);
    let copyProductArray = Products;
    const updatedObject = copyProductArray.find(x => x.name === item.name);
    updatedObject.qty = quantity;
    copyProductArray[index] = updatedObject;
    setProducts(copyProductArray);
    setedit(!edit);
  };
  const inputSchema = yup.object().shape({
    number: yup.string().required('Number is required'),
  });
  const renderItem = ({item, index}: any) => (
    <View style={styles.container}>
      <View style={styles.itemDiv}>
        <View style={styles.imgDiv}>
          <Image resizeMode="contain" style={styles.imgStyle} source={box} />
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.cName}>{item.name}</Text>
        </View>
        <View style={styles.cpriceDiv}>
          <Text style={styles.cPrice}>
            {currency.CR4}-{item.price}
          </Text>
        </View>
        {item.id !== selectedId ? (
          <Animatable.View animation="zoomInUp" duration={2000}>
            <Pressable
              onPress={() => selectionAdd(item.id)}
              style={styles.circlefill}>
              <Image source={cart} />
              <Text style={styles.cartTxt}>ADD TO CART</Text>
            </Pressable>
          </Animatable.View>
        ) : (
          <Animatable.View animation="zoomInDown" duration={2000}>
            <View style={styles.btnWraper}>
              <View style={styles.counterWraper}>
                <Pressable onPress={() => decrementFun(index, item)}>
                  <Image
                    resizeMode="contain"
                    style={styles.iconImg}
                    source={minus}
                  />
                </Pressable>
              </View>
              <View style={styles.counterWraper}>
                <TextInput
                  style={styles.quantityTxt}
                  onChangeText={txt => customInput(index, item, txt)}
                  value={item.qty.toString()}
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.counterWraper}>
                <Pressable onPress={() => incrementFun(index, item)}>
                  <Image
                    resizeMode="contain"
                    style={styles.iconImg}
                    source={plus}
                  />
                </Pressable>
              </View>
            </View>
            <Pressable
              onPress={() => selectionConfirm(item)}
              style={styles.confirmBtn}>
              <Text style={styles.confirmTxt}>CONFIRM QUANTITY</Text>
            </Pressable>
          </Animatable.View>
        )}
      </View>
    </View>
  );
  return (
    <FlatList
      extraData={selectedId}
      data={Products}
      numColumns={2}
      keyExtractor={item => item.name}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: rfSpacing.s,
    width: windowwidth / 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemDiv: {
    backgroundColor: colors.white,
    width: windowwidth / 2.2,
    paddingVertical: rfSpacing.m,
    borderRadius: rfSpacing['4xl'],
  },
  circlefill: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.Indigo,
    padding: rfSpacing.m,

    marginHorizontal: rfSpacing.m,
    borderRadius: rfSpacing.m,
    marginTop: rfSpacing.m,
  },
  imgDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: rfSpacing['7xl'],
    width: rfSpacing['7xl'],
  },
  cpriceDiv: {flex: 1, alignItems: 'flex-start', marginRight: rfSpacing['4xl']},
  txtContainer: {
    marginTop: rfSpacing.m,
  },
  cName: {
    paddingLeft: rfSpacing.m,
    paddingRight: rfSpacing.m,
    color: colors.Danube,
    fontWeight: '500',
    fontSize: rfSpacing.l,
  },
  cPrice: {
    marginTop: rfSpacing.s,
    paddingLeft: rfSpacing.m,
    color: colors.Casablanca,
    fontWeight: '700',
    fontSize: rfSpacing.xl,
  },
  cartTxt: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: '700',
    fontSize: rfSpacing.m,
  },
  btnWraper: {
    borderColor: colors.Indigo,
    height: rfSpacing['7xl'],
    flexDirection: 'row',
    borderWidth: moderateScale(1),
    marginHorizontal: rfSpacing.m,
    borderRadius: rfSpacing.m,
    marginTop: rfSpacing.m,
  },
  counterWraper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImg: {
    height: rfSpacing['3xl'],
    width: rfSpacing['3xl'],
  },
  confirmBtn: {
    backgroundColor: colors.Indigo,
    padding: rfSpacing.m,
    marginHorizontal: rfSpacing.m,
    borderRadius: rfSpacing.m,
    marginTop: rfSpacing.m,
  },
  confirmTxt: {
    textAlign: 'center',
    color: colors.white,
    fontSize: rfSpacing.l,
  },
  quantityTxt: {
    textAlign: 'center',
    borderColor: colors.Indigo,
    borderWidth: moderateScale(1),
    borderRadius: rfSpacing.m,
    color: colors.grey,
    fontSize: rfSpacing.xl,
    width: '120%',
    marginVertical: rfSpacing.ms,
    padding: rfSpacing.s,
  },
});

/* function arePropsEqual(prevProps, nextProps) {
  console.log(prevProps);
  return prevProps.label === nextProps.label; 
} */

export default React.memo(ProductCard);
