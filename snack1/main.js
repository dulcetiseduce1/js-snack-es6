//array membri
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
let biciMinorPeso = {nome,peso};

for (let i = 1; i < arrayBici.length; i++) {
    const bici = arrayBici[i];

    if(biciMinorPeso.peso > bici.peso){
        biciMinorPeso = bici;
    }
    const biciHTML = document.querySelector(".container");

    biciHTML.innerHTML =`
    <p>best bike is ${biciMinorPeso.name} ${biciMinorPeso.weight}</p>
    `
}