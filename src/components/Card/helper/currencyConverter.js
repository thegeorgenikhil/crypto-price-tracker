import { format } from "indian-number-format"

export const inrConvert = (amount) => {
    const formattedAmount = format(amount);
    return `₹${formattedAmount}`
}