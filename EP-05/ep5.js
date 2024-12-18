const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("please enter your name: ", (name) => {
  console.log(`You entered ${name}`);
  rl.close();
});
let timeout = 2000;
setTimeout(() => {
  rl.on("close", () => {
    console.log("interface closed");
    process.exit(0);
  });
}, timeout);
