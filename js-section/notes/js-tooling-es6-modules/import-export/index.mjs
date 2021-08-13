import Pessoa, { nome as nomeExportado, sobrenome } from "./exports.mjs";
// import * as alias from "./exports.mjs" --> importa tudo que está sendo exportado

const p1 = new Pessoa(nomeExportado, sobrenome);
console.log(p1);
