export const calculateNumColumns = (
  width: number,
  itemStyle: { width: number; margin: number }
): number => {
  const cols = width / itemStyle.width;
  const colsFloor = Math.floor(cols) > 1 ? Math.floor(cols) : 1;
  const colsMinusMargin = cols - 2 * colsFloor * itemStyle.margin;

  return colsMinusMargin < colsFloor && colsFloor > 1 ? colsFloor - 1 : colsFloor;
};
