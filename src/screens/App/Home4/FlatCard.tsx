import React from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';

import {Footer_Component} from '../../../componenets/FooterComponent';

import styles from './styles';

const FlatCard = ({data}: any) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      Project: 'Project',
      ProjectDateCheckIn: '2022-08-22',
      ProjectDateCheckOut: '2023-09-06',
      Field1: 'Field1',
      Field2: 'Field2',
      Field3: 'Field3',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      Project: 'Project1',
      ProjectDateCheckIn: '2022-08-22',
      ProjectDateCheckOut: '2023-09-06',
      Field1: 'Field1',
      Field2: 'Field2',
      Field3: 'Field3',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd94374363',
      Project: 'Project2',
      ProjectDateCheckIn: '2022-09-06',
      ProjectDateCheckOut: '2023-09-06',
      Field1: 'Field1',
      Field2: 'Field2',
      Field3: 'Field3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1455342347',
      Project: 'Project3',
      ProjectDateCheckIn: '2022-09-06',
      ProjectDateCheckOut: '2023-09-06',
      Field1: 'Field1',
      Field2: 'Field2',
      Field3: 'Field3',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91ssds7f63',
      Project: 'Project4',
      ProjectDateCheckIn: '2022-08-22',
      ProjectDateCheckOut: '2023-09-06',
      Field1: 'Field1',
      Field2: 'Field2',
      Field3: 'Field3',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbdssdd4363',
      Project: 'Project5',
      ProjectDateCheckIn: '2022-09-06',
      ProjectDateCheckOut: '2023-09-06',
      Field1: 'Field1',
      Field2: 'Field2',
      Field3: 'Field3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14553523647',
      Project: 'Project6',
      ProjectDateCheckIn: '2022-09-06',
      ProjectDateCheckOut: '2023-09-06',
      Field1: 'Field1',
      Field2: 'Field2',
      Field3: 'Field3',
    },
  ];
  const renderItem = ({item}) => (
    <View>
      <View style={styles.itemDiv}>
        <View style={styles.cnameDiv1}>
          <View style={styles.f1}>
            <Text style={styles.cName1}>{item.Project}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>Field 1:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt}>{item.Field1}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>Field 2:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt}>{item.Field2}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>Field 3:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt}>{item.Field3}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>Date CheckIn:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt1}>{item.ProjectDateCheckIn}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>Date CheckOut:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt1}>{item.ProjectDateCheckOut}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.f1}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        ListFooterComponent={Footer_Component}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
export default FlatCard;
