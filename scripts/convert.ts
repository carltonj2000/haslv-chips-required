import * as path from "jsr:@std/path";
import sharp from "npm:sharp";

export const imgDir =
  "file:///media/renderws/carltonData/cj_pics/pics2024/haslv/haslv-chip-images";
export const srcTif = path.fromFileUrl(path.join(imgDir, "tif"));
export const dstJpg = path.fromFileUrl(path.join(imgDir, "jpg"));

for await (const dirEntry of Deno.readDir(srcTif)) {
  if (dirEntry.isFile) {
    const ext = path.extname(dirEntry.name);
    if (ext === ".tif") {
      const file = path.basename(dirEntry.name, ext);
      console.log(file);
      const dst = path.join(dstJpg, file + ".jpg");
      const src = path.join(srcTif, dirEntry.name);
      sharp(src).toFile(dst);
    }
  }
}
