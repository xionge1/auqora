const fs = require("fs");
const path = require("path");

const imageDir = path.join(__dirname, "..", "img", "main-artworks");
const outputFile = path.join(__dirname, "..", "image_names.json");

// allowed image extensions
const validExtensions = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif"
]);

const images = fs
  .readdirSync(imageDir, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((name) =>
    validExtensions.has(path.extname(name).toLowerCase())
  )
  .sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
  );

// write JSON
fs.writeFileSync(
  outputFile,
  JSON.stringify(images, null, 2),
  "utf8"
);

console.log(`✅ Generated ${images.length} image names`);
