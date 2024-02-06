import {StyleSheet, Text, FlatList} from 'react-native';
import React from 'react';
import HoldingStockListItem from './HoldingStockListItem';
import {IUserHolding} from '../../api/types';

interface IHoldingList {
  holdingListData: IUserHolding[];
}

const HoldingStockList = ({holdingListData}: IHoldingList) => {
  return (
    <FlatList
      data={holdingListData}
      renderItem={({item}) => <HoldingStockListItem holdingItem={item} />}
      keyExtractor={item => item.symbol}
    />
  );
};

export default HoldingStockList;

const styles = StyleSheet.create({});
