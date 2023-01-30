import React, {useState, useRef} from 'react';
import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  TextInput,
} from 'react-native';
import buleBack from '../assets/_Header/background.png';
import * as Animatable from 'react-native-animatable';

import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';

const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const AppHeader = ({
  menuImg,
  addImg,
  title,
  menuPress,
  pdfscreen,
  addPress,
  SearchHeader,
  SearchPhrase,
  setSearchPhrase,
}) => {
  const inputRef = useRef();
  const [Clcked, setClicked] = useState(false);

  return (
    <Animatable.View animation="slideInDown">
      <ImageBackground
        source={buleBack}
        style={styles.imgageBack}
        resizeMode="stretch">
        {SearchHeader ? (
          <View style={styles.parentDiv}>
            <Pressable onPress={menuPress} style={styles.menuIcon}>
              <Image source={menuImg} style={styles.iconSize} />
            </Pressable>
            {!Clcked ? (
              <Animatable.View style={styles.titleDiv} animation="fadeInUp">
                <Text style={styles.titleTxt}>{title}</Text>
              </Animatable.View>
            ) : null}
            {!Clcked ? (
              <Animatable.View animation="fadeInUp">
                <Pressable
                  onPress={() => setClicked(true)}
                  style={styles.iconRight}>
                  <Image source={addImg} style={styles.iconSize} />
                </Pressable>
              </Animatable.View>
            ) : (
              /*       
              
              condtn if pdf varible is true 
              size of img is 50
              else img size 80

              <View style={{flexDirection:"row",flex:5}}>
                 <Pressable onPress={addPress} style={styles.iconRight}>
                 <Image source={addImg} style={styles.iconSize} />
               </Pressable>
               </View> */
              <Animatable.View
                style={styles.inputRightCont}
                animation="fadeInRight"
                duration={500}>
                <TextInput
                  style={styles.inputStyle}
                  onEndEditing={() => setClicked(false)}
                  onChangeText={SearchPhrase => setSearchPhrase(SearchPhrase)}
                  value={SearchPhrase}
                  ref={inputRef}
                  onLayout={() => inputRef.current.focus()}
                  placeholder="Search"
                  placeholderTextColor={'#aaa'}
                />
              </Animatable.View>
            )}
          </View>
        ) : (
          <>
            <View style={styles.parentDiv}>
              <Pressable onPress={menuPress} style={styles.menuIcon}>
                <Image source={menuImg} style={styles.iconSize} />
              </Pressable>

              <View style={styles.titleDiv}>
                <Text style={styles.titleTxt}>{title}</Text>
              </View>
              <Pressable onPress={addPress} style={styles.iconRight}>
                <Image
                  source={addImg}
                  style={!pdfscreen ? styles.iconSize2 : styles.iconSize1}
                />
              </Pressable>
            </View>
          </>
        )}
      </ImageBackground>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    height: rfSpacing['5xl'],
    width: rfSpacing['5xl'],
  },
  iconSize1: {
    height: rfSpacing['3xl'],
    width: rfSpacing['3xl'],
  },
  iconSize2: {
    height: rfSpacing['5xl'],
    width: rfSpacing['5xl'],
  },
  imgageBack: {
    height: rfSpacing['9xl'],
    width: windowwidth,
  },
  parentDiv: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: rfSpacing.s,
  },
  menuIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleDiv: {
    flex: 4,
    justifyContent: 'center',
    marginLeft: rfSpacing.s,
  },
  titleTxt: {
    color: colors.white,
    fontWeight: '700',
    fontSize: rfSpacing['3xl'],
  },
  iconRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: rfSpacing['4xl'],
  },
  inputStyle: {
    color: '#aaa',
    flex: 1,
    fontSize: rfSpacing.xl,
    backgroundColor: colors.white,
    borderRadius: rfSpacing['4xl'],
    marginVertical: rfSpacing.ms,
    paddingLeft: rfSpacing.m,
  },
  inputRightCont: {
    flex: 5,
    marginVertical: rfSpacing.m,
    marginHorizontal: rfSpacing['4xl'],
  },
});
export default AppHeader;
