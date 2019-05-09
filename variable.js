var nama = "Pandu Bagoes Pradana"
var umur = 21
var makananFavorite = ["Mie Indomie","Mie Ayam","Martabak"]


console.log("Halo, nama saya " + nama)
// 
showUmur(umur)
// Call the Function  
showMakanan(makananFavorite)

// ==================

// Deklarasi Function
function showUmur(umur){
    console.log("Umur saya " + umur + " tahun")
    if(umur > 20){
        console.log("Saya Tua")
    }else{
        console.log("Saya Muda")
    }
}

// Deklarasi Function
function showMakanan(makanan){
    console.log("Makanan favorite saya : ")
    for(var i = 0; i<makanan.length; i++){
        console.log(makanan[i])
    }
}



