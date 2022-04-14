const parseInput = function() {
  const input = process.argv.slice(2);
  
  return input
    .map(x => Number(x) * 1000)
    .filter(x => (!isNaN(x) && x >= 0));
};

const timer = () => {
  const seconds = parseInput();
  seconds.map(
    sec => setTimeout(() => process.stdout.write("\x07"), sec)
  );
};

timer();

// try run program with $ node timer1.js 1 2 -3 str