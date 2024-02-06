export const calculateIndividualPLValue = (
  ltp: number,
  qty: number,
  avg: number,
) => {
  return (ltp * qty - avg * qty).toFixed(2);
};
