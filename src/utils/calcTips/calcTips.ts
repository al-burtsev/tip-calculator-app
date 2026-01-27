export const calcTips = (billAmount: number, tip: number, numberOfPeople: number): string => (billAmount * (tip / 100) / numberOfPeople).toFixed(2)
