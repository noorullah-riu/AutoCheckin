import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';

import size from '../../../theme/spacing';
import profile from '../../../assets/_Customer/profile.png';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import {Footer_Component} from '../../../componenets/FooterComponent';
import rfSpacing from '../../../theme/rfSpacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
const CustomerCard = ({customersList, selection}: any) => {
  const [SearchPhrase, setSearchPhrase] = useState('');
  const renderItem = ({item, index}: any) => (
    <Pressable onPress={() => selection(item)} style={styles.container}>
      <View style={styles.itemDiv}>
        <View style={styles.imgDiv}>
          <Image style={styles.imgStyle} source={profile} />
        </View>
        <View style={styles.txtContainer}>
          <View>
            <Text style={styles.cName}>{item.CardName}</Text>
          </View>

          <View>
            <Text style={styles.s14}>{item.CardCode}</Text>
          </View>

          <View style={styles.fRow}>
            <View style={styles.f1}>
              <Text style={styles.s12}>Account Balance:</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.yellowTxt}>{item.AccountBalance}</Text>
            </View>
          </View>

          <View style={styles.fRow}>
            <View style={styles.f1}>
              <Text style={styles.s12}>Credit Limit Used:</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.yellowTxt}>{item.RemainingLimit}</Text>
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
      keyboardShouldPersistTaps={'handled'}
      ListFooterComponent={Footer_Component}
    />
  );
};

const styles = StyleSheet.create({
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
    height: rfSpacing['7xl'],
    width: rfSpacing['7xl'],
    marginLeft: rfSpacing.m,
  },
  txtContainer: {
    width: windowwidth,
    flex: 5,
    marginLeft: rfSpacing['4xl'],
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
  f1: {
    flex: 1,
  },
});
export default CustomerCard;
