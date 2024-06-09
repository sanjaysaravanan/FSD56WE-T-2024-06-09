// importing fs module
const fs = require("fs");

// create new files in the file system
// create a new folder/directory
// asynchronously
// fs.mkdir("./files", (err, path) => {
//   if (err) {
//     console.log("Error in creating directory", err);
//   } else {
//     console.log("Created directory ", path);
//   }
// });

// console.log(fs.existsSync("./assets"));
// synchronously
// try {
//   if (!fs.existsSync("./assets")) {
//     fs.mkdirSync("./assets");
//   }
// } catch (e) {
//   console.log("Error in creating directory", e);
// }

// create a new file
// fs.writeFile("files/Day1.js", "console.log('Hellow World, Day 1');", () => {
//   console.log("File created successfully");
// });

// fs.writeFileSync("files/Day2.js", "console.log('Hellow World, Day 2');");

// [3, 4, 5, 6].forEach((val) => {
//   fs.writeFileSync(
//     `files/Day${val}.js`,
//     `console.log('Hellow World, Day ${val}')`
//   );
// });

console.log("#################################");
// reading a particular file
// fs.readFile("./files/task.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error in reading file", err);
//   } else {
//     console.log(data);
//   }
// });

// Readonly the buffer of the file
// fs.readFile("./files/task.txt", (err, data) => {
//   if (err) {
//     console.log("Error in reading file", err);
//   } else {
//     console.log(data);
//   }
// });

// appending some contents to the existing file
// fs.appendFile(
//   "./files/task.txt",
//   "\n\nSession to learn about FS Module by practicing",
//   () => {
//     console.log("Contents appended successfully");
//   }
// );

// deletefile
fs.unlink("./files/Day5.js", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File deleted successfully");
  }
});
