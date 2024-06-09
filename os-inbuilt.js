// imported the OS module using commonjs
const os = require("os");

console.log("Free Memory", os.freemem()); // ram which is free
console.log("Total Memory", os.totalmem());
console.log("Version", os.version());
console.log("Processor", os.cpus());
