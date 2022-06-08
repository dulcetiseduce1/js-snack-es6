//array squadre
let footballTeams = [
  {
    nome: "Liverpool",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Foggia",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Manchester",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Juve",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Roma",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Napoli",
    punti: 0,
    falli: 0,
  },
  {
    nome: "La squadra del cuore",
    punti: 0,
    falli: 0,
  },
];

// array per i score
teamsScores = [];

// ciclo numeri random
for (let i = 0; i < footballTeams.length; i++) {
  let punti = Math.floor(Math.random() * 100);
  let falli = Math.floor(Math.random() * 100);

  // con spread
  footballTeams[i] = {
    ...footballTeams[i],
    punti,
    falli,
  };

  // destructuring push
  teamsScores.push({
    nome: footballTeams[i].nome,
    falli: footballTeams[i].falli,
  });
}

//log
console.table(footballTeams);
console.table(teamsScores);
