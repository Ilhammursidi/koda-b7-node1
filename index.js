import readline from "readline";
import { inputDate } from "./minitask1.js";
import {askDate} from "./minitask2.js";

async function main() {
  await inputDate();
  await askDate();
}
main();
