export function toCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  });
}
