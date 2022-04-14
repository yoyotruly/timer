const stdin = process.stdin;
const stdout = process.stdout;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


const parseKey = (key) => {
  const second = Number(key);

  if (isNaN(second)) return;

  return second;
};


stdin.on("data", (key) => {
  if (key === "b") {
    stdout.write("\x07");
  }

  if (key === "\u0003") {
    console.log("Thanks for using me. Ciao!");
    process.exit();
  }
  
  const second = parseKey(key);
  if (second) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => stdout.write("\x07"), second * 1000);
  }
});