/*
    Keimo Plaas
    17.11.2026
    Ülessanne 03
*/
let kilomeetrid = 50; // Distants kirjuta km
let kiirus = 100; // Kiirus km/h, kirjuta ainult km
let aeg = kilomeetrid / kiirus; // tunnid
let esimeneoutput = `${kilomeetrid}km läbimiseks kiirusega ${kiirus}km/h kulub ${aeg} tundi`;
console.log(esimeneoutput);

let postitustearv = 137;
let maksimaalnekuvamine = 10;
let viimaneleht = postitustearv % maksimaalnekuvamine;
let lehekulgi = postitustearv / maksimaalnekuvamine;
console.log(`${Math.round(lehekulgi)} lehekülge läheb vaja ja viimasele lehele jääb ${viimaneleht} postitust`);

let vatt = 400;
let elektrihind = 9.69; //senti/kWh
let voolutarbimine = vatt / 1000;
let kulu = voolutarbimine * elektrihind; //(eurod/kWh)
console.log(`Server, mis jookseb ${vatt} vatti peal ja elektrihind on ${elektrihind}, kulutab ${kulu}€/kWh`);