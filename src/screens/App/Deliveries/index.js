import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';

export const Deliveries = props => {
  return (
    <View style={styles.containerStyling}>
      <Text style={styles.textStyling}>Deliveries</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyling: {
    background: '#0000FF',
  },
  textStyling: {
    marginBottom: spacing['4xl'],
    color: colors.grey,
  },
});
