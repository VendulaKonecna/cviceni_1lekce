//proměnné Výplata
document.body.innerHTML += "<p>" + "Mzda je " + 320 * 7 * 21 + " Kč." + "</p>"
document.body.innerHTML += "<p>" + "Daň je " + (Math.floor(47040*0.4*0.15)) + "Kč." + "</p>"

//proměnné Délka filmu
document.body.innerHTML += "<p>" + "Délka filmu v minutách je " + 223 + " minut." + "</p>"
document.body.innerHTML += "<p>" + "Film trvá " + (Math.floor(223 / 60)) + " hodiny a " + (223 % 60) + " minut."

//proměnné E-mail
document.body.innerHTML += "<p>" + "Vendula" + "." + "Konecna" + "@mujmail.com" + "</p>"


//Funkce Ultramaraton
const start = 15
const delka = 16
const konec = (start + delka) % 24
document.body.innerHTML += "<p>" + "Běžec doběhl v " + konec + ".00 hodin" + "</p>"

//Funkce Náhodná čísla
document.body.innerHTML += "<p>" + "Náhodné číslo " + (Math.random()) + "</p>"

//Funkce Převod měny
const wageInEur = 20
const wageInCzk = (Math.round(20 * 24.55))
document.body.innerHTML += "<p>" + "<h1> Mzda v korunách: " + wageInCzk + " Kč </h1>"  + "</p>"


//Kodim Příjem divadla
const vstupne =  12
const navstevnici = 174
const predstaveni = 15
const prijem = vstupne * navstevnici * predstaveni
document.body.innerHTML += "<p>" + "Měsíční příjem divadla je " + prijem + " €" + "</p>"
const vstupneStudent = vstupne * 0.65
const navstevniciStudent = navstevnici * 0.4
const prijemStuden = vstupneStudent * navstevniciStudent * predstaveni
const navstevniciPlne = navstevnici * 0.6
const prijemPlne = vstupne * navstevniciPlne * predstaveni
const prijemSleva = prijemStuden + prijemPlne
document.body.innerHTML += "<p>" + "Měsíční přijem divadla se studentskou slevou je " + prijemSleva + " €" + "</p>"

//Kodím Schopnější zaokrouhlování
const cislo = 5323.6984
document.body.innerHTML += "<p>" + (Math.round(cislo * 10) / 10) + "</p>"
document.body.innerHTML += "<p>" + (Math.round(cislo * 100) / 100) + "</p>"
document.body.innerHTML += "<p>" + (Math.round(cislo / 100) * 100) + "</p>"

//Kodím Házení kostkou
document.body.innerHTML += "<p>" + "Hod šestistěnnou kostkou: " + (Math.ceil(Math.random() * 6)) + "</p>" 