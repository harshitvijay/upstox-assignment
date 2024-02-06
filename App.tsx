import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/Header/Header';
import HoldingStockList from './src/components/HoldingStockList/HoldingStockList';
import Bottomsheet from './src/components/Bottomsheet/Bottomsheet';
import {getHoldingStocks} from './src/api/apifunctions';
import {IHoldingStock} from './src/api/types';
import {
  INITIAL_STOCK_SUMMARY_DETAILS,
  IStockSummaryInfo,
} from './src/utils/constant';
import {calculateStockSummaryInfo} from './src/utils/utils';

const App = () => {
  const [holdingStock, setHoldingStock] = useState<IHoldingStock | null>(null);
  const [stockSummaryInfo, setStockSummaryInfo] = useState<IStockSummaryInfo>(
    INITIAL_STOCK_SUMMARY_DETAILS,
  );

  useEffect(() => {
    getHoldingStocks().then(stocks => {
      setHoldingStock(stocks);
      const stockInfo = calculateStockSummaryInfo(stocks.userHolding);
      setStockSummaryInfo(stockInfo);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Upstox Holding" />
      {holdingStock ? (
        <HoldingStockList holdingListData={holdingStock?.userHolding} />
      ) : null}
      <Bottomsheet stockSummaryInfo={stockSummaryInfo} />
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
