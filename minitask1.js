import moment from "moment";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

export async function inputDate() {
	try {
		const answer = await rl.question("Masukkan tanggal (DD-MM-YYYY): ");
		if (!moment(answer, "DD-MM-YYYY", true).isValid()) {
			console.log("format tanggal salah");
		} else {
			const date = moment(answer, "DD-MM-YYYY").format("DD/MM/YYYY");
			console.log(`setelah ganti format ${date}`);
		}
	} catch (error) {
		console.error("Terjadi kesalahan: " + error.message);
		return;
	}
	rl.close();
}


