import React from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';

import {Footer_Component} from '../../../componenets/FooterComponent';

import styles from './styles';

const FlatCard = ({historyArr}: any) => {
  const renderItem = ({item}) => (
    <View>
      <View style={styles.itemDiv}>
        <View style={styles.cnameDiv1}>
          <View style={styles.f1}>
            <Text style={styles.cName1}>{item.project}</Text>
          </View>
        </View>

        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>Status</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt}>{item.status}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>Total Hours:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt}>{item.totalhours}</Text>
          </View>
        </View>

        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>In Device ID:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt}>{item?.INdeviceID}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>Out Device ID:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt}>{item?.OUTDeviceID}</Text>
          </View>
        </View>

        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>In Time:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt1}>{item.intime}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>Out Time:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt1}>{item.outtime}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>Date:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt1}>{item.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.f1}>
      <FlatList
        data={historyArr}
        renderItem={renderItem}
        ListFooterComponent={Footer_Component}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
export default FlatCard;
