const fs = require('fs');
const parser = require('xml2json');
const parser2 = require('json2xml');
const json2xml = require('json2xml');

const XMLFormatter = require('xml-beautifier');

let datosXML = fs.readFileSync(__dirname + '/gamelist.xml', {encoding: 'utf-8'});

let convertedXML = JSON.parse(parser.toJson(datosXML));


let nuevoJuego = {
    path: "Ruta",
    name: "God of War",
    desc: 'l juego comienza cuando Kratos, convertido en dios de la Guerra, amenaza con destruir a toda Grecia, ya que un espartano lo invoca para lograr la "Gloria de Esparta", luego llega Atenea y le dice que no destruya la ciudad o ya no podrá protegerlo, pero Kratos la ignora y se lanza desde lo más alto del Monte Olimpo a la ciudad de Rod',

}

let add = convertedXML.gameList.game.push(nuevoJuego);

//console.log(convertedXML.gameList.game)

fs.writeFile('./newfile.xml', XMLFormatter(json2xml(convertedXML)), function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
