import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import box from '../../../assets/_Cart/box.png';
import colors from '../../../theme/colors';
import currency from '../../../theme/currency';
import spacing from '../../../theme/spacing';
import size from '../../../theme/spacing';
import {Footer_Component} from '../../../componenets/FooterComponent';
import rfSpacing from '../../../theme/rfSpacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
const QuotationCard = ({customersList, selection}: any) => {
  const renderItem = ({item, index}: any) => (
    <Pressable onPress={() => selection(item)} style={styles.container}>
      <View style={styles.itemDiv}>
        <View style={styles.imgDiv}>
          <Image style={styles.imgStyle} source={box} />
        </View>
        <View style={styles.txtContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.cNum}>{item.customerCode}</Text>
            </View>

            <View style={styles.itempriceDiv}>
              <Text style={styles.yellowTxt}>
                {currency.CR4} {item.docTotal}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.cName}>{item.customerName}</Text>
          </View>

          <View style={styles.fRow}>
            <View style={styles.f1}>
              <Text style={styles.s12}>Quotation Date:</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.yellowTxt}>{item.docDate}</Text>
            </View>
          </View>

          <View style={styles.fRow}>
            <View style={styles.f1}>
              <Text style={styles.s12}>Delivery Date:</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.yellowTxt}>{item.deliveryDate}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
  return (
    <FlatList
      data={customersList}
      keyExtractor={item => item.CardCode}
      renderItem={renderItem}
      ListFooterComponent={Footer_Component}
    />
  );
};

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  itempriceDiv: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  container: {
    marginVertical: rfSpacing.ms,
  },
  itemDiv: {
    backgroundColor: colors.white,
    width: windowwidth - rfSpacing['5xl'],
    paddingVertical: rfSpacing.ms,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: rfSpacing['4xl'],
    flexDirection: 'row',
  },
  imgDiv: {
    flex: 1,
    justifyContent: 'center',
  },
  imgStyle: {
    height: rfSpacing['6xl'],
    width: rfSpacing['6xl'],
    marginLeft: rfSpacing.xxl,
  },
  txtContainer: {
    width: windowwidth,
    flex: 5,
    marginLeft: rfSpacing['4xl'],
  },
  cNum: {
    color: colors.tomato,
    fontWeight: 'bold',
    fontSize: rfSpacing.l,
  },
  cName: {
    color: colors.Indigo,
    fontWeight: 'bold',
    fontSize: rfSpacing.l,
  },
  s14: {
    fontSize: rfSpacing.xl,
    color: colors.dustyGray,
  },
  s12: {
    fontSize: rfSpacing.m,
    color: colors.Boulder,
  },
  fRow: {
    flexDirection: 'row',
  },
  yellowTxt: {
    fontSize: rfSpacing.m,
    color: colors.Rajah,
    fontWeight: '700',
    textAlign: 'right',
    marginRight: rfSpacing['4xl'],
  },
});

export default QuotationCard;
