const moment = require("moment")
const readline = require("readline")

const dateConversion = (day, month, year) => {
    const formatDay = `${day}-${month}-${year}`;
    if(!moment(formatDay,"DD-MM-YYYY").isValid()) {
        console.log("format tanggal salah");
    }
    console.log(moment(formatDay,"DD-MM-YYYY").format("DD/MM/YYYY"));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askQuestion(query) {
  return new Promise(resolve => {
    rl.question(query, resolve);
  });
}

async function inputDate() {
  try {
    const day = await askQuestion('tanggal');
    if(day.length > 2) {
        console.log("format tanggal salah");
        return
    }
    const month = await askQuestion('bulan');
    if(month.length > 2) {
        console.log("format bulan salah");
        return
    }
    const year = await askQuestion('tahun');
    if(year.length > 4) {
        console.log("format tahun salah");
        return
    }

    console.log(`Anda memasukkan tanggal: ${day}-${month}-${year}`);
    dateConversion(day, month, year);



  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
}

inputDate();