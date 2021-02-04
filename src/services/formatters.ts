export function formatAmount(amount: number) {
  return (new Number(amount)).toLocaleString();
}

export function formatTimestamp(order: any) {
  const date = new Date(order.completionTimeMs);
  return `${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`;
}
