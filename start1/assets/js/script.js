var dataAttuale = new Date();

var giorno = dataAttuale.getDate();
var mese = dataAttuale.getMonth();
var mesi = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
var anno = dataAttuale.getFullYear();


document.getElementById('scrivi').innerHTML += `${giorno} / ${mesi[mese]} / ${anno}`;
document.getElementById('dataTotale').innerHTML = dataAttuale;
document.getElementById('giorno').innerHTML += giorno;
document.getElementById('mese').innerHTML += mesi[mese];
document.getElementById('oggi').innerHTML += `${giorno}-${mese + 1}-${anno}`;

salutare();

function salutare() {
    if (dataAttuale.getHours() < 12) {
        document.getElementById('saluto').innerHTML = `Buongiorno!😁`;
        document.getElementById('body').style.backgroundImage = 'linear-gradient(to right, #8360c3, #2ebf91)';
    }
    else if (dataAttuale.getHours() < 18) {
        document.getElementById('saluto').innerHTML = `Buon pomeriggio!🤩`;
        document.getElementById('body').style.backgroundImage = 'linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )';
    }
    else if (dataAttuale.getHours() < 22) {
        document.getElementById('saluto').innerHTML = `Buona sera!🧐`;
        document.getElementById('body').style.backgroundImage = 'linear-gradient(to right, #DECBA4, #3E5151)';
    }
    else {
        document.getElementById('saluto').innerHTML = `Buona notte!😴`;
        document.getElementById('body').style.backgroundImage = 'linear-gradient(to right, #141e30, #243b55)';
        document.getElementById('body').style.color = 'white';
    }
}
