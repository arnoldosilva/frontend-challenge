export const displayCurrency = (price: number) => {
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(price) / 100);
  return currency;
};
