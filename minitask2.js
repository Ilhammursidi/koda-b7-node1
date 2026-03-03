import readline from "readline";

export function dateConvert(input) {
    const regex =/^\d{2}-\d{2}-\d{4}$/;
    if (!regex.test(input)) {
        return "format tanggal salah";
    }

    const [day, month, year] = input.split("-");

    const dayNum = Number(day);
    const monthNum = Number(month);
    const yearNum = Number(year);

    if(dayNum < 1 || dayNum > 31 || monthNum < 1 || monthNum > 12 || yearNum < 1000 || yearNum > 9999) {
        console.log("format tanggal salah");
        return;
    };
    return `setelah ganti format ${day}/${month}/${year}`;
};

















// bisa menggunakan readline

// function dateConvert(day,month,year) {
// 	const date = `${day}-${month}-${year}`;
// 	if(day.length > 2 && day !== "number"||month.length > 2 && month !== "number"||year.length > 4 && year !== "number") {
// 		return"format tanggal salah";
// 	} else {
// 		console.log(date);
// 	}
// 	const hasil = `setelah ganti format ${day}/${month}/${year}`;
// 	console.log(hasil);
// }

// dateConvert(19,9,1999);
// dateConvert(12,7,2000);