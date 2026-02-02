export const calcTips = (billAmount: number, tip: number, numberOfPeople: number): string => {
  if (numberOfPeople <= 0) return "0.00"

  const tips = (billAmount * (tip / 100) / numberOfPeople)
  return tips.toFixed(2)
} 
