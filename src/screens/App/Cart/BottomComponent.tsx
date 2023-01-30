import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import BlueButton from '../../../ui/BlueButton';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import currency from '../../../theme/currency';

const bottomComponent = ({Products, setProducts, Total, setTotal}: any) => {
  return (
    <>
      <View style={styles.btnWraper}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.f1}></View>
          <View style={styles.subTotalStyling}>
            <Text style={styles.textColor}>Sub Total</Text>
          </View>
          <View style={styles.tvalueStyling}>
            <Text style={styles.textValueColor}>{currency.CR4} 50K</Text>
          </View>
          <View style={styles.f1}></View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.f1}></View>
          <View style={styles.vaStyling}>
            <Text style={styles.textColor}>VAT</Text>
          </View>
          <View style={styles.tvalueStyling}>
            <Text style={styles.textValueColor}>{currency.CR4} 0K</Text>
          </View>
          <View style={styles.f1}></View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.f1}></View>
          <View style={styles.vaStyling}>
            <Text style={styles.textColor}>Discount</Text>
          </View>
          <View style={styles.tvalueStyling}>
            <Text style={styles.textValueColor}>{currency.CR4} 0K</Text>
          </View>
          <View style={styles.f1}></View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.f1}></View>
          <View style={styles.vaStyling}>
            <Text style={styles.textColor}>Grand Total</Text>
          </View>
          <View style={styles.tvalueStyling}>
            <Text style={styles.gttextStyling}>
              {currency.CR4} {Total}
            </Text>
          </View>
          <View style={styles.f1}></View>
        </View>
        <View style={styles.BlueButtonStyling}>
          <BlueButton
            text="Finalize Order"
            //    onPress={() => getData()}
            onPress={() => Alert.alert('placed')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btnWraper: {
    paddingBottom: spacing.m,
    paddingTop: spacing.m,
    backgroundColor: colors.white,
  },
  f1: {
    flex: 1,
  },
  subTotalStyling: {
    flex: 6,
    borderBottomColor: colors.Silver,
    borderBottomWidth: 1,
    margin: spacing.xxs,
  },
  tvalueStyling: {
    flex: 6,
    alignItems: 'flex-end',
    borderBottomColor: colors.Silver,
    borderBottomWidth: 1,
    margin: spacing.xxs,
  },
  vaStyling: {
    flex: 6,
    borderBottomColor: colors.Silver,
    borderBottomWidth: 1,
    margin: spacing.xxs,
  },

  gttextStyling: {color: colors.Rajah, fontWeight: '700'},

  textColor: {
    color: colors.Indigo,
    fontWeight: '500',
  },
  textValueColor: {
    color: colors.Rajah,
    fontWeight: '500',
  },
  BlueButtonStyling: {
    height: spacing['6xl'],
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: spacing.m,
  },
});
export default React.memo(bottomComponent);
