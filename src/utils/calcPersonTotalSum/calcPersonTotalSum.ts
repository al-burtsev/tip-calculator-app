export const calcPersonTotalSum = (billAmount: number, tip: number, numberOfPeople: number) => ((billAmount * (tip / 100) + billAmount) / numberOfPeople).toFixed(2)
