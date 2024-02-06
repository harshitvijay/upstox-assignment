export interface IHoldingStock {
  userHolding: IUserHolding[];
}

export interface IUserHolding {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
}
