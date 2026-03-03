function dateConvert(day,month,year) {
    const date = `${day}-${month}-${year}`
    if(day.length > 2 && day !== "number"||month.length > 2 && month !== "number"||year.length > 4 && year !== "number") {
        return"format tanggal salah"
    } else {
        console.log(date)
    }
    const hasil = `setelah ganti format ${day}/${month}/${year}`
    console.log(hasil)
}

dateConvert(19,9,1999);
dateConvert(12,7,2000);


let day = prompt("masukkan hari :");
if(day < 0||day > 32|| day.length > 2) {
    console.log("format tanggal salah")
    }


