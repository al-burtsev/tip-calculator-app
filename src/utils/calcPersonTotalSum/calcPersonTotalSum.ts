export const calcPersonTotalSum = (billAmount: number, tip: number, numberOfPeople: number) => {
  if (numberOfPeople <= 0) return "0.00"

  const total = (billAmount * (tip / 100) + billAmount) / numberOfPeople;
  return total.toFixed(2)
}
