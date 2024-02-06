export interface IStockSummaryInfo {
  totalPL: number;
  totalCurrentValue: number;
  totalInvestment: number;
  todaysPL: number;
}

export const INITIAL_STOCK_SUMMARY_DETAILS: IStockSummaryInfo = {
  totalPL: 0,
  totalCurrentValue: 0,
  totalInvestment: 0,
  todaysPL: 0,
};
