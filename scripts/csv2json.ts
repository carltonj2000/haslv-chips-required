import * as path from "jsr:@std/path";
import { existsSync } from "https://deno.land/std/fs/mod.ts";
import * as fmt from "https://deno.land/x/deno_fmt/mod.ts";

const baseDir =
  "file://renderws/carltonData/cj2024/code/lume/haslv-chips-required/";
const srcCsv = path.fromFileUrl(
  path.join(baseDir, "data", "HASLV_Chip_Count_-_Summary.csv")
);
const dstFile = "data_ref.json";
export const dstJson = path.fromFileUrl(path.join(baseDir, dstFile));

if (existsSync(dstJson)) {
  console.error(`Will not overwrite '${dstFile}'. Remove or rename it!`);
  //   Deno.exit(1);
}

const csvString = await Deno.readTextFile(srcCsv);
const csvNoDv = csvString.replaceAll(", Death Valley", "").replaceAll('"', "");
const csvLine = csvNoDv.split("\n");
const csvArray = csvLine.map((line) => line.split(","));
const cvsData = csvArray.slice(3, csvLine.length - 3);

const rawObject = cvsData.reduce<
  Array<{ name: string; qty: string; level: number }>
>((acc, line) => {
  if (line[13])
    acc.push({ name: line[1], qty: line[13], level: Number(line[0]) });
  return acc;
}, []);

const sorted = rawObject.sort((a, b) =>
  a.level === b.level ? (a.name > b.name ? 1 : -1) : a.level > b.level ? 1 : -1
);
type level2ColorT = { [key: number]: string };
const level2Color: level2ColorT = {
  0: "pink",
  4: "green",
  5: "orange",
  6: "black",
};
export type ChipT = { name: string; qty: string };
export type ChipLevelT = { level: number; color: string; chips: ChipT[] };
const outObject = sorted.reduce<ChipLevelT[]>((a, { name, qty, level }) => {
  const chip = { name, qty };
  const present = a.findIndex((a) => a.level === level);
  if (present === -1)
    a.push({ level, color: level2Color[level], chips: [chip] });
  else a[present].chips.push(chip);
  return a;
}, []);
const outStr = await fmt.format(JSON.stringify(outObject), { ext: "json" });
Deno.writeTextFileSync(dstJson, outStr);
