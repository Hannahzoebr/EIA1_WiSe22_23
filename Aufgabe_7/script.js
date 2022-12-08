var de = "Deutschland";
var fr = "Frankreich";
var it = "Italien";
var es = "Spanien";
var eu = "Europäische Union";
var populationDE22 = 83.2;
var populationFR22 = 67.8;
var populationIT22 = 59.0;
var populationES22 = 47.4;
var populationEU22 = 446.8;
var populationDE20 = 83.16;
var populationFR20 = 67.38;
var populationIT20 = 59.45;
var populationES20 = 47.36;
var populationEU20 = 447.7;
var gesamt = document.querySelector("#gesamt");
var gesamttext = document.querySelector("#gesamttext");
var relativ = document.querySelector("#relativ");
var relativtext = document.querySelector("#relativtext");
var wachstum = document.querySelector("#wachstum");
var wachstumtext = document.querySelector("#wachstumtext");
var wachstumgesamt = document.querySelector("#wachstumgesamt");
var wachstumgesamttext = document.querySelector("#wachstumgesamttext");
var ProzentDE = (1 - populationDE20 / populationDE22) * 100;
var WachstumgDE = (populationDE22 - populationDE20);
var ProzentFR = (1 - populationFR20 / populationFR22) * 100;
var WachstumgFR = (populationFR22 - populationFR20);
var ProzentIT = (1 - populationIT20 / populationIT22) * 100;
var WachstumgIT = (populationIT22 - populationIT20);
var ProzentES = (1 - populationES20 / populationES22) * 100;
var WachstumgES = (populationES22 - populationES20);
var ProzentEU = (1 - populationEU20 / populationEU22) * 100;
var WachstumgEU = (populationEU22 - populationEU20);
document.querySelector("#de").addEventListener("click", function () {
    changeTo(populationDE22, populationDE20, ProzentDE, WachstumgDE, "stylede");
});
document.querySelector("#fr").addEventListener("click", function () {
    changeTo(populationFR22, populationFR20, ProzentFR, WachstumgFR, "stylefr");
});
document.querySelector("#it").addEventListener("click", function () {
    changeTo(populationIT22, populationIT20, ProzentES, WachstumgIT, "styleit");
});
document.querySelector("#es").addEventListener("click", function () {
    changeTo(populationES22, populationES20, ProzentES, WachstumgES, "stylees");
});
document.querySelector("#eu").addEventListener("click", function () {
    changeTo(populationEU22, populationEU20, ProzentEU, WachstumgEU, "styleeu");
});
function changeTo(population22, population20, Prozent, Wachstumg, style) {
    gesamt.innerHTML = population22.toString();
    gesamttext.innerHTML = "Gesamtzahl EinwohnerInnen in 2022 in Mio";
    relativ.innerHTML = population20.toString();
    relativtext.innerHTML = "Gesamtzahl EinwohnerInnen im Jahr 2020 in Mio";
    wachstum.innerHTML = Prozent.toFixed(2).toString();
    wachstumtext.innerHTML = "Wachstumsrate seit 2022 in Prozent";
    wachstumgesamt.innerHTML = Wachstumg.toFixed(2).toString();
    wachstumgesamttext.innerHTML = "Wachstumsrate gesamt zwischen 2020 und 2022 in Mio";
    document.getElementById("chart").className = style;
}
//# sourceMappingURL=script.js.map