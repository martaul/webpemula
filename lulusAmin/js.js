// navbar

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

// pemesanan
function HargaTotal() {
var myForm = document.pemesanan;
var total1;
var total2;
var total3;
var jumlah1 = parseInt(myForm.jumlah1.value);
var jumlah2 = parseInt(myForm.jumlah2.value);
var jumlah3 = parseInt(myForm.jumlah3.value);

if(myForm.jumlah1.value == "") jumlah1=0;
if(myForm.jumlah2.value == "") jumlah2=0;
if(myForm.jumlah3.value == "") jumlah3=0;

total1 = parseInt(myForm.harga1.value)*jumlah1;
total2 = parseInt(myForm.harga2.value)*jumlah2;
total3 = parseInt(myForm.harga3.value)*jumlah3;

myForm.total.value = total1 + total2 + total3;
}

function TotalBayar() {
var myForm = document.pemesanan;

myForm.bayar.value = parseInt(myForm.total.value);
}

function proses() {
HargaTotal();
}

function batal() {
var element = document.pemesanan;

element.jumlah1.value = "";
element.jumlah2.value = "";
element.jumlah3.value = "";
element.total.value = "";
element.bayar.value = "";
}