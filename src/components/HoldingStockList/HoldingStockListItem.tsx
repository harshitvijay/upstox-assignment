import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IUserHolding} from '../../api/types';
import {calculateIndividualPLValue} from '../../utils/utils';

interface IHoldingListItem {
  holdingItem: IUserHolding;
}

const HoldingStockListItem = ({holdingItem}: IHoldingListItem) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log(holdingItem)}>
      <View style={styles.symbolContainer}>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>
          {holdingItem.symbol}
        </Text>
        <View style={styles.symbolContainer}>
          <Text style={styles.text}>LTP: </Text>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            ₹&nbsp;{holdingItem.ltp}
          </Text>
        </View>
      </View>
      <View style={[styles.symbolContainer, {marginVertical: 5}]}>
        <Text style={styles.text}>{holdingItem.quantity}</Text>
        <View style={styles.symbolContainer}>
          <Text style={styles.text}>P/L: </Text>
          <Text style={[styles.text, {fontWeight: 'bold'}]}>
            ₹{' '}
            {calculateIndividualPLValue(
              holdingItem.ltp,
              holdingItem.quantity,
              holdingItem.avgPrice,
            )}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HoldingStockListItem;

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
  symbolContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000000',
    fontSize: 18,
  },
});
