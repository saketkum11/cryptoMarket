const calculateDevaition = (coinData) => {
  const cryptoData = [...coinData];
  const numberOfLength = cryptoData.length;
  const sum = 0;
  const mean =
    cryptoData.reduce((acc, curr) => acc + curr.currentPrice, sum) /
    numberOfLength;
  const squareOfDiffrence = cryptoData.map((value) =>
    Math.pow(value.currentPrice - mean, 2)
  );
  const variance =
    squareOfDiffrence.reduce((acc, curr) => acc + curr, 0) / numberOfLength;
  const standarDeviation = Math.sqrt(variance);
  console.log(
    "from calculate line 3",
    mean,
    squareOfDiffrence,
    variance,
    standarDeviation
  );
  return standarDeviation
};
export { calculateDevaition };
