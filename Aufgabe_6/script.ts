const germany = "Deutschland";
const italy = "Italien";
const france = "Frankreich";
const spain = "Spanien";
const population2022DE = 83803014;
const population2020DE = 83651225;
const population2022IT = 60505719;
const population2020IT = 60505719;
const population2022FR = 66050242;
const population2020FR = 65202014;
const population2022SP = 46467847;
const population2020SP = 46745832;

let ProzentDE =(1-population2020DE/population2022DE)*100;
let ProzentIT =(1-population2020DE/population2022DE)*100;
let ProzentFR =(1-population2020DE/population2022DE)*100;
let ProzentSP =(1-population2020DE/population2022DE)*100;

console.log("In" + germany + "beträgt die aktuelle Einwohnerzahl" + population2022DE);
console.log("In" + germany + "betrug die Einwohnerzahl 2020" + population2020DE);
console.log("Die Einwohnerzahl in" + germany + "ist in den letzten 2 Jahren um" + ProzentDE + "% gestiegen.");

console.log("In" + italy + "beträgt die aktuelle Einwohnerzahl" + population2022IT);
console.log("In" + italy + "betrug die Einwohnerzahl 2020" + population2020IT);
console.log("Die Einwohnerzahl in" + italy + "ist in den letzten 2 Jahren um" + ProzentIT + "% gestiegen.");

console.log("In" + france + "beträgt die aktuelle Einwohnerzahl" + population2022FR);
console.log("In" + france + "betrug die Einwohnerzahl 2020" + population2020FR);
console.log("Die Einwohnerzahl in" + france + "ist in den letzten 2 Jahren um" + ProzentFR + "% gestiegen.");

console.log("In" + spain + "beträgt die aktuelle Einwohnerzahl" + population2022SP);
console.log("In" + spain + "betrug die Einwohnerzahl 2020" + population2020SP);
console.log("Die Einwohnerzahl in" + spain + "ist in den letzten 2 Jahren um" + ProzentSP + "% gesunken.");