import {IUserHolding} from '../api/types';

export const calculateIndividualPLValue = (
  ltp: number,
  qty: number,
  avg: number,
) => {
  return (ltp * qty - avg * qty).toFixed(2);
};

export const calculateStockSummaryInfo = (stocks: IUserHolding[]) => {
  let totalPL = 0;
  let totalCurrentValue = 0;
  let totalInvestmentValue = 0;
  let todaysPL = 0;

  stocks.map((item: IUserHolding) => {
    totalCurrentValue += item.ltp * item.quantity;
    totalInvestmentValue += item.avgPrice * item.quantity;
    todaysPL += (item.close - item.ltp) * item.quantity;
  });
  totalPL = totalCurrentValue - totalInvestmentValue;
  return {
    totalPL,
    totalCurrentValue,
    totalInvestment: totalInvestmentValue,
    todaysPL,
  };
};
