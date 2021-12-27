export const priceChange = (currPrice,openPrice) => {
    return (currPrice - openPrice)/openPrice * 100;
}