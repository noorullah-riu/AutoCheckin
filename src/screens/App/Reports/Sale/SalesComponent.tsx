import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';
import SecondryBox from './SecondryBox';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const sample = [
  {
    id: 1,
    PostingDate: 2021,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
  {
    id: 2,
    PostingDate: 2021,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
  {
    id: 3,
    PostingDate: 2021,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
  {
    id: 4,
    PostingDate: 2021,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
  {
    id: 5,
    PostingDate: 2021,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
  {
    id: 6,
    PostingDate: 2021,
    Invoice: 100,
    Credit: 1,
    Debit: 0.0,
    Balance: 1000,
  },
];

const SalesComponent = ({data}: any) => {
  const [dataForEnquiry, setDataForEnquiry] = useState(sample);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            height: rfSpacing['2.5H'],
          }}>
          <View
            style={{
              marginLeft: rfSpacing.m,
              justifyContent: 'center',
            }}>
            <View>
              <View
                style={{
                  width: rfSpacing['1H'],
                  height: 220,
                  backgroundColor: colors.meeting_Time,
                  alignItems: 'center',
                  // borderBottomWidth: 0.5,
                  // borderBottomColor: '#FFF',
                }}>
                <Text style={styles.TxtStyle}>Posting.Date</Text>
                <Text style={styles.TxtStyle}>Invoice</Text>
                <Text style={styles.TxtStyle}>Credit</Text>
                <Text style={styles.TxtStyle}>Debit</Text>
                <Text style={styles.TxtStyle}>Balance</Text>
              </View>
              {/* <View
                style={{
                  width: 100,
                  height: 50,
                  marginBottom: 10,
                  justifyContent: 'center',
                  backgroundColor: colors.Danube,
                  alignItems: 'center',
                  borderRadius: 6,
                }}>
                <Text style={{color: colors.white}}>Invoice</Text>
              </View>
              <View
                style={{
                  width: 100,
                  height: 50,
                  marginBottom: 10,
                  justifyContent: 'center',
                  backgroundColor: colors.Danube,
                  alignItems: 'center',
                  borderRadius: 6,
                }}>
                <Text style={{color: colors.white}}>Credit</Text>
              </View>
              <View
                style={{
                  width: 100,
                  height: 50,
                  marginBottom: 10,
                  justifyContent: 'center',
                  backgroundColor: colors.Danube,
                  alignItems: 'center',
                  borderRadius: 6,
                }}>
                <Text style={{color: colors.white}}>Debit</Text>
              </View>
              <View
                style={{
                  width: 100,
                  height: 50,
                  marginBottom: 10,
                  justifyContent: 'center',
                  backgroundColor: colors.Danube,
                  alignItems: 'center',
                  borderRadius: 6,
                }}>
                <Text style={{color: colors.white}}>Balance</Text>
              </View> */}
            </View>
          </View>
          <ScrollView
            horizontal={true}
            style={{
              flexDirection: 'row',
              width: windowwidth,
            }}>
            <SecondryBox data={sample} />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: windowwidth,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginVertical: rfSpacing['4xl'],
  },
  TxtStyle: {
    color: colors.white,
    width: rfSpacing['1H'],
    marginTop: rfSpacing['4xl'],
    fontWeight: '500',
    textAlign: 'center',
    borderBottomColor: '#FFF',
    borderBottomWidth: 0.5,
  },
});

export default SalesComponent;
