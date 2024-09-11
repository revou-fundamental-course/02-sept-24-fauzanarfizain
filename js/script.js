// ini Javascript 

// Merubah warna klik menu jajargenjang
function ccjajargenjang() {
    document.getElementById('jajar-genjang-btn').style.backgroundColor='bisque';
    document.getElementById('segitiga-btn').style.backgroundColor='whitesmoke';
}

// Merubah warna klik menu jajargenjang
function ccsegitiga() {
    document.getElementById('jajar-genjang-btn').style.backgroundColor='whitesmoke';
    document.getElementById('segitiga-btn').style.backgroundColor='bisque';
}

function validateLuasSegitiga() {
    let alas=document.getElementById('panjang-alas').value;
    let tinggi=document.getElementById('tinggi').value;

    if (alas == '' || tinggi == '' || alas.includes('e') || tinggi.includes('e')) {
        alert('Ada Isian yang Belum Terisi atau Adanya Kesalahan Pengisian Angka. Cek kembali isian Panjang Alas atau Tinggi!')
    };
}

function validateKelilingSegitiga() {
    let sisiA=document.getElementById('sisi-A').value;
    let sisiB=document.getElementById('sisi-B').value;
    let sisiC=document.getElementById('sisi-C').value;
}

