import React from 'react';
import {SafeAreaView, View, FlatList, Text, Pressable} from 'react-native';
import {Footer_Component} from '../../../componenets/FooterComponent';
import styles from './styles';

const SalesComponentCard = ({data, selection}: any) => {
  const renderItem = ({item}) => (
    <Pressable onPress={() => selection(item)}>
      <View style={styles.itemDiv}>
        <View style={styles.fMargin}>
          <View style={styles.btnNumber}>
            <Text style={styles.txtNumber}>#{item.docNum}</Text>
          </View>
        </View>
        <View style={styles.cnameDiv1}>
          <View style={styles.f1}>
            <Text style={styles.cName1}>{item.u_CardFName}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s12}>StartDate:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt}>{item.u_Sdate}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>EndDAte:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt1}>{item.u_Edate}</Text>
          </View>
        </View>
      </View>
    </Pressable>
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
export default SalesComponentCard;
