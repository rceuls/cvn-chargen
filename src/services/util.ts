export const getModifier = (score: number) => {
  if (score <= 3) return -3;
  if (score <= 5) return -2;
  if (score <= 8) return -1;
  if (score <= 12) return 0;
  if (score <= 15) return 1;
  if (score <= 17) return 2;
  if (score <= 18) return 3;
  return 0;
};

export const getRndInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRndValue = <T>(input: T[]) =>
  input[getRndInteger(0, input.length - 1)];

export const chunkArray = <T>(arr: T[], n: number) => {
  const chunkLength = Math.max(arr.length / n, 1);
  const chunks = [];
  for (var i = 0; i < n; i++) {
    if (chunkLength * (i + 1) <= arr.length) {
      chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
    }
  }
  return chunks;
};

export const formatBonus = (bonus: number) =>
  bonus >= 0 ? `+${bonus}` : `${bonus}`;

export const getSRDLink = (suffix: string) =>
  `https://oldschoolessentials.necroticgnome.com/srd/index.php/${suffix}`;
