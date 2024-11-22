import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({ src: "./src", dest: "./output" });
site.copy("imgs");
site.copy("imagesJpg.zip");
site.copy("imagesTif.zip");
site.use(jsx(/* Options */));
export default site;
