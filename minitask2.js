import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export async function askDate() {
  const redline = readline.createInterface({ input, output });
  try {
    const hasil = await redline.question(
      "Masukkan tanggal part2 (DD-MM-YYYY): ",
    );
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    if (!regex.test(hasil)) {
      console.log("format tanggal salah");
    }

    const [day, month, year] = hasil.split("-");

    const dayNum = Number(day);
    const monthNum = Number(month);
    const yearNum = Number(year);

    if (
      dayNum < 1 ||
      dayNum > 31 ||
      monthNum < 1 ||
      monthNum > 12 ||
      yearNum < 1000 ||
      yearNum > 9999
    ) {
      console.log("input tanggal salah");
      return;
    }
    console.log(hasil.split("-").join("/"));
  } finally {
    redline.close();
  }
}
