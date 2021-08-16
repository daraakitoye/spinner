const spinFrames = ['|', '/', '-', '\\', '|'];
const spinner = () => {
  for (let i = 0; i < spinFrames.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${spinFrames[i]}`);
    }, 200 * i)
  }
};

spinner();