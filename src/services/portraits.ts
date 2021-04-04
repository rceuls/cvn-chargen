export const armoredImages = Array.from(Array(4).keys()).map(
  (x) => `TCP Armored ${x + 1}.jpg`
);

export const dwarfsImages = Array.from(Array(6).keys()).map(
  (x) => `TCP Dwarf ${x + 1}.jpg`
);

export const elfsImages = Array.from(Array(9).keys()).map(
  (x) => `TCP Elf ${x + 1}.jpg`
);

export const gnomeImages = Array.from(Array(2).keys()).map(
  (x) => `TCP Gnome ${x + 1}.jpg`
);

export const humansImages = Array.from(Array(8).keys()).map(
  (x) => `TCP Human ${x + 1}.jpg`
);

export const scientistsImages = ['TCP Mad Scientist 2.jpg'];

export const piratesImages = Array.from(Array(7).keys()).map(
  (x) => `TCP Pirate ${x + 1}.jpg`
);

export const scaryImages = Array.from(Array(3).keys()).map(
  (x) => `TCP Scary ${x + 1}.jpg`
);

export const steampunksImages = Array.from(Array(7).keys()).map(
  (x) => `TCP Steampunk ${x + 1}.jpg`
);

export const toonsImages = ['TCP Toon 1.jpg'];

export const vampiresImages = Array.from(Array(5).keys()).map(
  (x) => `TCP Vampire ${x + 1}.jpg`
);

export const zombiesImages = Array.from(Array(6).keys()).map(
  (x) => `TCP Zombie ${x + 2}.jpg`
);

export const imagesHuman = [
  ...zombiesImages,
  ...vampiresImages,
  ...toonsImages,
  ...steampunksImages,
  ...scaryImages,
  ...piratesImages,
  ...scientistsImages,
  ...humansImages,
  ...armoredImages,
];

export const imagesDwarves = [...dwarfsImages, ...armoredImages];

export const imagesHalflings = [...gnomeImages, ...humansImages];

export const imagesElf = [
  ...vampiresImages,
  ...elfsImages,
  ...steampunksImages,
];
