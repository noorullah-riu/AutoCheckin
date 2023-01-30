import React from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';

import {Footer_Component} from '../../../../componenets/FooterComponent';
import currency from '../../../../theme/currency';

import styles from './styles';

const SalesAggrementCard = ({data}: any) => {
  const renderItem = ({item}) => (
    <View>
      <View style={styles.itemDiv}>
        <View style={styles.cnameDiv1}>
          <View style={styles.f1}>
            <Text style={styles.cName1}>{item.company}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s12}>Unit Price</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt}>
              {currency.CR4} {item.u_UnitPrice}
            </Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s11}>Quantity</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt1}>{item.quantity}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.ff1}>
            <Text style={styles.s13}>Sub 1</Text>
          </View>
          <View style={styles.ff1}>
            <Text style={styles.GreyTxt}>{item.u_sub1}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.ff1}>
            <Text style={styles.s13}>Sub 2</Text>
          </View>
          <View style={styles.ff1}>
            <Text style={styles.GreyTxt}>{item.u_sub2}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.ff1}>
            <Text style={styles.s13}>Sub 3</Text>
          </View>
          <View style={styles.ff1}>
            <Text style={styles.GreyTxt}>{item.u_sub3}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.ff1}>
            <Text style={styles.s13}>Sub 4</Text>
          </View>
          <View style={styles.ff1}>
            <Text style={styles.GreyTxt}>{item.u_sub4}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.f1}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListFooterComponent={Footer_Component}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
export default SalesAggrementCard;
