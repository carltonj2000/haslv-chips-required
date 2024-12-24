import * as path from "jsr:@std/path";
import { existsSync } from "https://deno.land/std/fs/mod.ts";

export const baseDir =
  "file://renderws/carltonData/cj2024/code/lume/lume_ex1/src/";
export const srcJpg = path.fromFileUrl(path.join(baseDir, "imgs"));
export const dstJs = path.fromFileUrl(path.join(baseDir, "data.js"));

if (existsSync(dstJs)) {
  console.error("Will not overwrite 'data.js'. Remove or rename it!");
  Deno.exit(1);
}

const imgs = [];
for (const dirEntry of Deno.readDirSync(srcJpg)) {
  if (dirEntry.isFile) {
    const ext = path.extname(dirEntry.name);
    if (ext === ".jpg" || ext === "*.png") {
      imgs.push(dirEntry.name);
    }
  }
}

imgs.sort((a, b) => (a > b ? 1 : -1));
const outLines = ["export const images = ["];
const jpgLines = imgs.map((jpg) => `{name: "${jpg}", qty: 0}`);
outLines.push(jpgLines.join(",\n"));
outLines.push("];");
Deno.writeTextFileSync(dstJs, outLines.join("\n"));
