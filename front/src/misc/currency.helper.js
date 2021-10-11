export const applyUSDFormat = (value) => {
    let dollarLocal = Intl.NumberFormat('en-US');
    return `$ ${dollarLocal.format(value)}`;
} 