import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';
import feeder from '../../../assets/_Customer/feeder.png';
import colors from '../../../theme/colors';
import rfSpacing from '../../../theme/rfSpacing';
import spacing from '../../../theme/spacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const CategoryCard = ({catData, onPressSelectCategory}) => {
  const renderItem = ({item}) => (
    <Pressable
      onPress={() => onPressSelectCategory(item.name)}
      style={styles.container}>
      <View style={styles.itemDiv}>
        <View style={styles.imgDiv}>
          <Image resizeMode="contain" style={styles.imgStyle} source={feeder} />
        </View>
        <View style={styles.txtContainer}>
          <View>
            <Text style={styles.cName}>{item.name}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  return (
    <>
      <FlatList
        data={catData}
        numColumns={2}
        keyExtractor={item => item.name}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: rfSpacing.m,
    width: windowwidth / 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemDiv: {
    backgroundColor: colors.white,
    width: windowwidth / 2.2,
    paddingVertical: rfSpacing.m,
    borderRadius: rfSpacing['4xl'],
  },
  imgDiv: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: rfSpacing['1H'],
    width: rfSpacing['1H'],
  },
  txtContainer: {
    alignItems: 'center',
    marginTop: rfSpacing['4xl'],
  },
  cName: {
    color: colors.cname,
    fontWeight: '700',
    fontSize: rfSpacing['4xl'],
  },
});
export default CategoryCard;
