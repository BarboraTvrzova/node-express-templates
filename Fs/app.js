import fs from "fs";

// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("in the callback");
//   if (err) {
//     throw err;
//   }
// });
// console.log("After mkdir ");

// deleted dir  with rmdir

const folderName = process.argv[2] || "Project";

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/style.css`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");

  console.log(process.argv[2]);
} catch (e) {
  console.log("something went wrong");
  console.log(e);
}
