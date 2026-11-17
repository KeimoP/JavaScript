/*
    Keimo Plaas
    12.11.2026
    Ülessanne 02
*/
let tunnid = 2;
let minutid = 38;
let sekundid = 59;
let kell = `${tunnid}:${minutid}:${sekundid}PM`;
console.log(kell);

let tsitaat = `"Tere tere vanakere" — Keimo Plaas`;
console.log(tsitaat);

let eesnimi = "Keimo";
let perenimi = "Plaas";
let mall = `${eesnimi} ${perenimi} nimetähed on ${eesnimi.charAt(0)}.${perenimi.charAt(0)}`;
console.log(mall);

let eesperenimi = `${eesnimi},${perenimi}`
let komaindex = eesperenimi.indexOf(",");
let indexeesnimi = eesperenimi.substring(0,komaindex);
console.log(perenimi.toUpperCase());
console.log(perenimi.length);

let epost = "metshein@netlog.com";
let hatindex = epost.indexOf("@");
let punktindex = epost.indexOf(".");
let comindex = punktindex + 4;
let emailname = epost.substring(0,hatindex);
let com = epost.substring(punktindex,comindex);

let domain = "gmail";
let uusepost = `${emailname}@${domain}${com}`;
console.log(uusepost);


let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let andmeridasplit = andmerida.split(",");
let email = andmeridasplit[3];
let ip = andmeridasplit[5];
let andmeemailhat = email.indexOf("@");
let emailnimi = email.substring(0,andmeemailhat);
console.log(`${ip} ja ${emailnimi}`)

