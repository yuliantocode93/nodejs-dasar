import os from "os";

console.info(os.platform());
console.info(os.freemem());
console.info(os.homedir());

console.table(os.hostname());
console.table(os.networkInterfaces());