import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';
import currency from '../../../theme/currency';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import size from '../../../theme/spacing';
import rfSpacing from '../../../theme/rfSpacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const OrderItme = ({orderList, selection}: any) => {
  var date = new Date('2022-09-21T00:00:00');

  const renderItem = ({item, index}: any) => (
    <Pressable onPress={() => selection(item)} style={styles.container}>
      <View style={styles.itemDiv}>
        <View style={styles.rowHeight}>
          <View style={styles.fMargin}>
            <Pressable style={styles.btnNumber}>
              <Text style={styles.txtNumber}>{item.docNum}</Text>
            </Pressable>
          </View>
          <View style={styles.priceDiv}>
            <Text style={styles.priceStyle}>
              {currency.CR4} {item.docTotal}
            </Text>
          </View>
        </View>

        <View style={styles.customerDiv}>
          <View style={styles.f1}>
            <Text style={styles.customerText}>{item.customerName}</Text>
          </View>
          <View style={styles.totItemsDiv}>
            <Text style={styles.totitemsText}>
              Total Itmes: {item.totaltems || 0}
            </Text>
          </View>
        </View>

        <View style={styles.orderdiliverydateDiv}>
          <View style={styles.odDiv2}>
            <View style={styles.f1}>
              <Text style={styles.ddateText}>Order Date:</Text>
            </View>
            <View style={styles.dateDiv}>
              <Text style={styles.dateText}>
                {date.toLocaleDateString(item.docDate)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.orderdiliverydateDiv}>
          <View style={styles.odDiv2}>
            <View style={styles.f1}>
              <Text style={styles.ddateText}>Delivery Date:</Text>
            </View>
            <View style={styles.dateDiv}>
              <Text style={styles.diliverydateText}>
                {date.toLocaleDateString(item.deliveryDate)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
  return (
    <FlatList
      data={orderList}
      keyExtractor={item => item.docNum}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: rfSpacing.m,
  },
  itemDiv: {
    backgroundColor: colors.white,
    width: '90%',
    paddingVertical: rfSpacing.m,
    paddingHorizontal: rfSpacing.m,
    alignSelf: 'center',
    borderRadius: rfSpacing['4xl'],
  },
  f1: {flex: 1},
  rowHeight: {
    flexDirection: 'row',
    height: rfSpacing['6xl'],
  },
  fMargin: {
    flex: 1,
    marginLeft: rfSpacing.m,
  },
  btnNumber: {
    flex: 1,
    width: rfSpacing['9xl'],
    backgroundColor: colors.Indigo,
    borderRadius: rfSpacing.m,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtNumber: {
    color: colors.white,
    fontSize: rfSpacing.l,
    fontWeight: '900',
  },
  priceDiv: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: rfSpacing.m,
    justifyContent: 'center',
  },
  priceStyle: {
    fontSize: rfSpacing.xl,
    fontWeight: '900',
    color: colors.Rajah,
  },
  customerDiv: {
    flexDirection: 'row',
    marginTop: rfSpacing.ms,
    marginLeft: rfSpacing.m,
  },
  customerText: {
    fontSize: rfSpacing.xl,
    fontWeight: '700',
    color: colors.grey,
  },
  totItemsDiv: {flex: 1, alignItems: 'flex-end', paddingRight: rfSpacing.m},
  totitemsText: {fontWeight: '400', color: colors.grey},
  iconSize: {
    height: size['5xl'],
    width: size['5xl'],
  },
  orderdiliverydateDiv: {
    flexDirection: 'row',
    marginTop: rfSpacing.xs,
    marginLeft: rfSpacing.m,
  },
  ddateText: {fontSize: rfSpacing.l, color: colors.grey},
  odDiv2: {flexDirection: 'row', flex: 1},
  dateDiv: {alignItems: 'flex-end', marginRight: rfSpacing.m},
  dateText: {fontSize: rfSpacing.l, color: colors.tomato},
  diliverydateText: {fontSize: rfSpacing.l, color: colors.Indigo},
});
export default OrderItme;
