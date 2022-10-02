// import moment from "moment";
const { Api, JsonRpc } = require("eosjs");
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig.js"); // development only
const fetch = require("node-fetch"); //node only
const { TextDecoder, TextEncoder } = require("util"); //node only
require("dotenv").config();

// const privateKeys = [privateKey1];

const privateKeys = [process.env.cs1c];
const signatureProvider = new JsSignatureProvider(privateKeys);
const rpc = new JsonRpc("https://wax.greymass.com/", { fetch });
const api = new Api({
  rpc,
  signatureProvider,
  textDecoder: new TextDecoder(),
  textEncoder: new TextEncoder(),
}); //required to submit transactions

(async () => {
  const tx = await rpc.history_get_transaction(
    "ac71f2c6e71027341036c10187be93c3ff4bfdc4de5b047ccb24fb9b966c9083",
    205863693
  );
  console.log(tx);
})();

// const date = "YYYY-MM-DD HH:mm:ss";
// console.log(`  🦁  | ${moment(new Date()).format(date)}`);

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
  //   while (true) {
  // console.log("zeroth");
  await first();
  await sleep(5000);
  await second();
  await sleep(5000);
  //   }
}
run();
