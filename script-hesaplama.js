// sabitmasa
function sabitmasaac(){
    document.getElementById("sabitmasa").style.display = "block"
    document.getElementById("hazirofis").style.display = "none"
    document.getElementById("suites").style.display = "none"
    document.getElementById("enterprise").style.display = "none"
}
function sabitmasakapat(){
    document.getElementById("sabitmasa").style.display = "none"
    window.location.href = '#giris'
}
var olokasyon = document.getElementById("olokasyon")
var kays = document.getElementById("kaysuresi")
var gezici = document.getElementById("gezici")

function SabitMasaHesapla() {
    document.getElementById("ucretdiv").style.display = "block"
    var sonuc = 0
    var sabit = 200
    var vergisiz = 0
    var ofis = 0
    var damga = 70
    var kdv = 1.16
    var gezicib = 200
    vergili = 0
    if (olokasyon.value == 1) {
        ofis =110
        vergisiz = ofis + sabit
        if (gezici.value == 1) {
            vergisiz = vergisiz + gezicib
        }
    }
    else if (olokasyon.value == 2) {
        ofis =120
        vergisiz = ofis + sabit
        if (gezici.value == 1) {
            vergisiz = vergisiz + gezicib
        }
    }
    else if (olokasyon.value == 3) {
        ofis =130
        vergisiz = ofis + sabit
        if (gezici.value == 1) {
            vergisiz = vergisiz + gezicib
        }
    }
    else if (olokasyon.value == 4) {
        ofis =140
        vergisiz = ofis + sabit
        if (gezici.value == 1) {
            vergisiz = vergisiz + gezicib
        }
    }
    else if (olokasyon.value == 5) {
        ofis =150
        vergisiz = ofis + sabit
        if (gezici.value == 1) {
            vergisiz = vergisiz + gezicib
        }
    }

    vergili = vergisiz * kdv //kdv %16
    sonuc = vergili * kaysuresi.value
    sonuc = sonuc + damga

    sonucboxsabit.value = sonuc.toFixed(0) + "TL";
}

// sabitmasa

// hazır ofis
     function hazirofisac(){
     document.getElementById("hazirofis").style.display = "block"
     document.getElementById("sabitmasa").style.display = "none"
     document.getElementById("suites").style.display = "none"
     document.getElementById("enterprise").style.display = "none"
 }
     function hazirofiskapat(){
     document.getElementById("hazirofis").style.display = "none"
     window.location.href = '#giris'
 }
     var konum = document.getElementById("konum")
     var kalaysuresi = document.getElementById("kalaysuresi")
     var calisan = document.getElementById("calisan")

     function HazirOfisHesapla() {
     document.getElementById("ucretdiv").style.display = "block"
     var sonuc = 0
     var hazır = 1000
     var vergisiz = 0
     var ofis = 0
     var damga = 70
     var kdv = 1.18
     var calisanb = 300
     vergili = 0
     if (konum.value == 1) {
        ofis = 1500
        vergisiz = ofis + hazır
        if (calisan.value == 2) {
            vergisiz = vergisiz + calisanb
        }
     }
     else if (konum.value == 2) {
        ofis =1550
        vergisiz = ofis + hazır
        if (calisan.value == 2) {
            vergisiz = vergisiz + calisanb
        }
     }
     else if (konum.value == 3) {
         ofis =1600
        vergisiz = ofis + hazır
        if (calisan.value == 2) {
            vergisiz = vergisiz + calisanb
        }
     }
     else if (konum.value == 4) {
        ofis =1650
        vergisiz = ofis + hazır
        if (calisan.value == 2) {
            vergisiz = vergisiz + calisanb
        }
     }
     else if (konum.value == 5) {
        ofis =1700
        vergisiz = ofis + hazır
        if (calisan.value == 2) {
            vergisiz = vergisiz + calisanb
        }
     }

     vergili = vergisiz * kdv //kdv %16
     sonuc = vergili * kalaysuresi.value
     sonuc = sonuc + damga

     sonucbox.value = sonuc.toFixed(0) + "TL";
}
// hazır ofis

// suites
function suitesac(){
    document.getElementById("suites").style.display = "block"
    document.getElementById("sabitmasa").style.display = "none"
    document.getElementById("hazirofis").style.display = "none"
    document.getElementById("enterprise").style.display = "none"
}function suiteskapat(){
    document.getElementById('suites').style.display = "none"
    window.location.href = '#giris'


}

function suitCity() {
    let myCity = document.getElementById('courntry').value;
    let myStuff = document.getElementById('stuff').value;
    let myTotoly = document.getElementById('myTotoly');


    let fiyat = 100;
    let kisi = 15;


    if (myCity == 1) {
        if (myStuff == 1) {
            console.log('maslak')
            myTotoly.innerHTML = `<h1 style='text-align:center'><b>${((fiyat * kisi) * 4)}TL</b></h1>`;


        } else if (myStuff == 2) {


            myTotoly.innerHTML = `<h1 style='text-align:center'><b>${((fiyat * kisi) * 6)}TL</b></h1>`;
        }

    } else if (myCity == 2) {
        if (myStuff == 1) {
            console.log('atasehir')
            myTotoly.innerHTML = `<h1 style='text-align:center'><b>${((fiyat * kisi) * 2)}TL</b></h1>`;


        } else if (myStuff == 2) {

            myTotoly.innerHTML = `<h1 style='text-align:center'><b>${((fiyat * kisi) * 4)}TL</b></h1>`;
        }

    } else if (myCity == 3) {
        if (myStuff == 1) {
            console.log('levent')
            myTotoly.innerHTML = `<h1 style='text-align:center'><b>${((fiyat * kisi) * 1.5)}TL</b></h1>`;


        } else if (myStuff == 2) {


            myTotoly.innerHTML = `<h1 style='text-align:center'><b>${((fiyat * kisi) * 3.5)}TL</b></h1>`;
        }


    }
    else if (myCity == 4) {
        if (myStuff == 1) {
            console.log('Beşiktaş')
            myTotoly.innerHTML = `<h1 style='text-align:center'><b>${((fiyat * kisi) * 3)}TL</b></h1>`;


        } else if (myStuff == 2) {


            myTotoly.innerHTML = `<h1 style='text-align:center'><b>${((fiyat * kisi) * 5)}TL</b></h1>`;
        }
    }
    else if (myCity == 5) {
        if (myStuff == 1) {
            console.log('Maltepe')
            myTotoly.innerHTML = `<h1 style='text-align:center'><b>${((fiyat * kisi))}TL</b></h1>`;


        } else if (myStuff == 2) {

            console.log('tıklandı')
            myTotoly.innerHTML = `<h1 style='text-align:center'><b>${((fiyat * kisi) * 2)}TL</b></h1>`;
        }

    }
    else if (myCity == 0 && myStuff == 0) {

        alert('sehir ve çalışan sayısı seçiniz')


    }



}
// suites

// Enterprise
function enterpriseac(){
    document.getElementById("enterprise").style.display = "block"
    document.getElementById("sabitmasa").style.display = "none"
    document.getElementById("hazirofis").style.display = "none"
    document.getElementById("suites").style.display = "none"
}
// function enterprisekapat(){
//     document.getElementById("enterprise").style.display = "none"
//     window.location.href = '#giris'
// }

var x = document.getElementById("mySelect");
var y = document.getElementById("mySelect1");
function myFunction() {
var i = x.selectedIndex;
textbox.value= x.options[i].text;
}

function myFunction1() {
var z = y.selectedIndex;
textbox2.value= y.options[z].text;
}

function hesapla() {

if (x.value == 1 && y.value == 1) {
textbox3.value ="3000TL"
}else if(x.value == 1 && y.value == 2){
textbox3.value ="5000TL"
}else if(x.value == 2 && y.value == 1){
textbox3.value ="4000TL"
}else if(x.value == 2 && y.value == 2){
textbox3.value ="6000TL"
}else if(x.value == 3 && y.value == 1){
textbox3.value ="5000TL"
}else if(x.value == 3 && y.value == 2){
textbox3.value ="7000TL"
}else if(x.value == 4 && y.value == 1){
textbox3.value ="5500TL"
}else { x.value == 4 && y.value == 2
textbox3.value ="6500TL"
}

}
// Enterprise
