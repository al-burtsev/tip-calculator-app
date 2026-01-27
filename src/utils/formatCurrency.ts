const formatCurrency = (amount: number, locale = 'en-US'): number => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'decimal', 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return Number(formatter.format(amount));
}

export default formatCurrency