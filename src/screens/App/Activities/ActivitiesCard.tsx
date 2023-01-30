import React from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';

import {Footer_Component} from '../../../componenets/FooterComponent';

import styles from './styles';

const ActivityCard = ({data}: any) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      companyName: 'GREEN FOOD PRODUCTS',
      activityDate: '2022-08-22',
      activityTme: '3:34 PM',
      remarks: 'Remarks:',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      companyName: 'TRIPPLE-EM (PVT) LTD',
      activityDate: '2022-08-22',
      activityTme: '10:59 PM',
      remarks: 'Remarks:',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd94374363',
      companyName: 'GUJRANWALA FOOD INDUSTRIES (PVT) LTD',
      activityDate: '2022-09-06',
      activityTme: '10:44 AM',
      remarks: 'Remarks:ASSAD',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1455342347',
      companyName: '4C PACKAGES',
      activityDate: '2022-09-06',
      activityTme: '3:34 AM',
      remarks: 'Remarks:Check in to the sustomer site',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91ssds7f63',
      companyName: 'TRIPPLE-EM (PVT) LTD',
      activityDate: '2022-08-22',
      activityTme: '10:59 PM',
      remarks: 'Remarks:',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbdssdd4363',
      companyName: 'GUJRANWALA FOOD INDUSTRIES (PVT) LTD',
      activityDate: '2022-09-06',
      activityTme: '10:44 AM',
      remarks: 'Remarks:ASSAD',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14553523647',
      companyName: '4C PACKAGES',
      activityDate: '2022-09-06',
      activityTme: '3:34 AM',
      remarks: 'Remarks:Check in to the sustomer site',
    },
  ];
  const renderItem = ({item}) => (
    <View>
      <View style={styles.itemDiv}>
        <View style={styles.cnameDiv1}>
          <View style={styles.f1}>
            <Text style={styles.cName1}>{item.companyName}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s12}>Activity Date:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt}>{item.activityDate}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s13}>Activity Time:</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.yellowTxt1}>{item.activityTme}</Text>
          </View>
        </View>
        <View style={styles.fRow}>
          <View style={styles.f1}>
            <Text style={styles.s15}>{item.remarks}</Text>
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
export default ActivityCard;
