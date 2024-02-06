import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './src/components/Header/Header';
import HoldingStockList from './src/components/HoldingStockList/HoldingStockList';
import {getHoldingStocks} from './src/api/apifunctions';
import {IHoldingStock} from './src/api/types';

const App = () => {
  const [holdingStock, setHoldingStock] = useState<IHoldingStock | null>(null);

  useEffect(() => {
    getHoldingStocks().then(stocks => {
      setHoldingStock(stocks);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Upstox Holding" />
      {holdingStock ? (
        <HoldingStockList holdingListData={holdingStock?.userHolding} />
      ) : null}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A9A9A9',
    flex: 1,
  },
});
