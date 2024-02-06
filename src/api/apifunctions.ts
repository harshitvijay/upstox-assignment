export const BASE_URL: string = 'https://run.mocky.io/v3';

export const getHoldingStocks = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/bde7230e-bc91-43bc-901d-c79d008bddc8`,
    );
    const stocks = await response.json();
    return stocks;
  } catch (error) {
    console.log(error);
  }
};
