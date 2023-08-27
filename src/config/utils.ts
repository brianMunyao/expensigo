export const convertMoney = (str = 0, currency = true) => {
  const converted = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return currency ? `KSh ${converted}` : converted;
};
