tidur(checkHP)

function tidur(nextFunction){
    console.log("Tidur")
    console.log("Lalu")
    console.log("Bangun")

    // Call the callback function
    nextFunction()
}

function checkHP(){
    console.log("Cek HP Dong!")
}

function mandi(){
    console.log("Lagi mandi")
}