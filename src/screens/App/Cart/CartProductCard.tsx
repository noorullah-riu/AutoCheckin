import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';
import ShowToast from '../../../ui/Toast';
import currency from '../../../theme/currency';
import {moderateScale} from 'react-native-size-matters';
import trash from '../../../assets/_Cart/delete.png';
import minus from '../../../assets/_Customer/minus.png';
import plus from '../../../assets/_Customer/plus.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';

const windowwidth = Dimensions.get('window').width;

const CartProductCard = ({Products, setProducts, Total, setTotal}: any) => {
  const [edit, setedit] = useState(false);

  console.log('cart product component re renders');

  const selectionRemove = (name: any) => {
    const filteredDatad = Products.filter(item => item.name !== name);
    console.log(filteredDatad);
    setProducts(filteredDatad);
    storeData(filteredDatad);

    ShowToast('success', `Item Deleted`);
  };

  const storeData = async (filteredDatad: any) => {
    try {
      const stringofArray = JSON.stringify(filteredDatad);
      await AsyncStorage.setItem('@Cart', stringofArray);
    } catch (error) {
      // Error saving data
    }
  };

  const incrementFun = (index: any, item: any) => {
    let copyProductArray = Products;
    const updatedObject = copyProductArray.find(x => x.name === item.name);
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

    let total = 0;
    copyProductArray.forEach(element => {
      console.log('each item', element.price * element.qty);
      total = total + element.price * element.qty;
    });
    setTotal(total);
  };
  const customInput = (index: any, item: any, quantity: any) => {
    // Alert.alert(quantity);
    console.log('on text change func ', quantity);
    let copyProductArray = Products;
    const updatedObject = copyProductArray.find(x => x.name === item.name);
    updatedObject.qty = quantity;
    copyProductArray[index] = updatedObject;
    setProducts(copyProductArray);
    setedit(!edit);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.container}>
      <View style={styles.itemDiv}>
        <View style={styles.imgView}>
          <View style={styles.counterDiv}>
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
                  style={styles.iconImg2}
                  source={plus}
                />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.f5}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={styles.f5}>
              <Text style={styles.cName}>{item.name}</Text>
            </View>
            <Pressable
              onPress={() => selectionRemove(item.name)}
              style={styles.imgDiv}>
              <Image
                resizeMode="contain"
                style={styles.trashimg}
                source={trash}
              />
            </Pressable>
          </View>

          <View style={styles.btnWraper}>
            <View style={styles.cpriceDiv}>
              <Text style={styles.cPrice}>
                {currency.CR4} {item.qty * item.price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <FlatList
        data={Products}
        keyExtractor={item => item.name}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: rfSpacing.m,
    width: windowwidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemDiv: {
    backgroundColor: colors.white,
    width: windowwidth - rfSpacing['6xl'],
    borderRadius: rfSpacing['xl'],
    flexDirection: 'row',
  },

  imgDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  trashimg: {height: rfSpacing.xl, width: rfSpacing.xl},
  txtContainer: {
    marginTop: rfSpacing['4xl'],
  },
  cName: {
    flex: 1,
    color: colors.Indigo,
    fontSize: rfSpacing.l,
    marginTop: rfSpacing.xs,
    marginLeft: rfSpacing.m,
    fontWeight: '500',
  },
  btnWraper: {
    marginTop: 'auto',
  },
  cpriceDiv: {
    flex: 1,
    paddingRight: rfSpacing.xxl,
    alignItems: 'flex-end',
  },
  cPrice: {
    alignSelf: 'flex-end',
    color: colors.Rajah,
    fontWeight: '700',
    fontSize: rfSpacing.xl,
  },
  counterWraper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterDiv: {
    flex: 5,
    marginLeft: rfSpacing.m,
    width: '100%',
    justifyContent: 'center',
    borderColor: colors.Indigo,
    marginVertical: rfSpacing.ms,

    paddingHorizontal: rfSpacing.xs,
    borderRadius: rfSpacing['xl'],
    borderWidth: 1,
  },
  iconImg: {
    height: rfSpacing['xl'],
    width: rfSpacing['4xl'],
  },
  iconImg2: {
    marginTop: rfSpacing.ms,
    marginBottom: rfSpacing.s,
    height: rfSpacing['xl'],
    width: rfSpacing['4xl'],
  },
  f5: {flex: 5},

  quantityTxt: {
    textAlign: 'center',
    borderColor: colors.Indigo,
    borderWidth: moderateScale(1),
    borderRadius: rfSpacing.s,
    color: colors.grey,
    fontSize: rfSpacing.l,
    width: '90%',
    height: '80%',
  },
});
export default React.memo(CartProductCard);
