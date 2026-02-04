export function totalServiceCost(values) {
  const {
    unitCostUSD = 0,
    unitCostLocal = 0,
    duration = 0,
    quantity = 0,
    uplf = 1
  } = values;

  return (
    (unitCostUSD + unitCostLocal) *
    duration *
    quantity *
    uplf
  ).toFixed(2);
}
