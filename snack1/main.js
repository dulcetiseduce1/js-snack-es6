//array bici
const arrayBici = [
  {
    nome: "mercedes pedal",
    peso: 3,
  },
  {
    nome: "fiat bradipo",
    peso: 2,
  },
  {
    nome: "mazda rx2",
    peso: 5,
  },
  {
    nome: "barbie bike",
    peso: 4,
  },
  {
    nome: "shrek bike",
    peso: 6,
  },
  {
    nome: "la vespa a pedali",
    peso: 7,
  },
];

let { nome, peso } = arrayBici[0];
let biciMinorPeso = { nome, peso, };

for (let i = 1; i < arrayBici.length; i++) {
  const {nome, peso} = arrayBici[i];

  if (biciMinorPeso.peso > bici.peso) {
    biciMinorPeso = {nome,peso,};
  }
  const biciHTML = document.querySelector(".container");
}

  biciHTML.innerHTML = `<h1>${biciLeggera.nome}</h1>
  <h1>${biciLeggera.peso}</h1>`;
