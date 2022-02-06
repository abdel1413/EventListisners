import backfrog from "./backfrog.js";

const backpack = new backfrog(
  "01",
  "../asset/images/everyday.svg",
  "backpack",
  30,
  "blue",
  4,
  false,
  2,
  2,
  "Febuary 04, 2022. 09:16:00 PST"
);

const frogpack = new backfrog(
  "02",
  "../asset/images/frog.svg",
  "frogpack",
  10,
  "green",
  6,
  false,
  3,
  3,
  "February 02, 2022. 06:15:00 PST"
);

const backfrogArray = [backpack, frogpack];
export default backfrogArray;
