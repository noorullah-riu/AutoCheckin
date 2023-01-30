import React from 'react';
import {Text, View, StyleSheet,Pressable} from 'react-native';

export const Login = props => {
  return (
    <View style={styles.containerStyling}>
      <Pressable onPress={()=>alert("navigate")}>
      <Text style={styles.textStyling}> login Page</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  containerStyling: {
    backgroundColor: '#fff',
    flex:1
  },
  textStyling: {
    marginTop: 20,
    textAlign:"center",
    color: '#000',
  },
});




