prompt("Assalomu alaykum, Alisherjon qayerga sayohatga bormiqchisiz?",  "Fransiya");
var userCoast = prompt("Mablag'ingizni kiriting...", );


// Travel expenses
var TICKETPRICE = 500;
var HOTELPAYMENT = 250;
var FORMUSEUM = 120;

// Course currency
var courseDollar = 9433.34;
var courseEur = 10354.03;

// Total Coast
var totalDollarCoast = (Math.round(TICKETPRICE + HOTELPAYMENT) * courseDollar);
var toralEurCoast = (Math.round(FORMUSEUM * courseEur));
var totalCoast = (Math.round(totalDollarCoast + toralEurCoast));

console.log(totalCoast);
if (userCoast >= totalCoast){
    alert("Oq yo’l, Alisherjon yaxshi borib keling!");
} else {
    alert("Alisher, ozgina sabr qilish kerak bo’lar ekan. Keyingi yil borarsiz xudo xolasa");
}