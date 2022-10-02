function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function first() {
  //   await sleep(5000);
  console.log("first");
}

async function second() {
  //   await sleep(5000);
  console.log("second");
}

async function run() {
  while (true) {
    // console.log("zeroth");
    await first();
    await sleep(5000);
    await second();
    await sleep(5000);
  }
}
run();
