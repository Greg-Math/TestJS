const nounourses = [{
  colors: ["Tan", "Chocolate", "Black", "White"],
  _id: "5be9c8541c9d440000665243",
  name: "Norbert",
  price: 2900,
  imageUrl: "teddy_1.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},{
  colors: ["Pale brown", "Dark brown", "White"],
  _id: "5beaa8bf1c9d440000a57d94",
  name: "Arnold",
  price: 3900,
  imageUrl: "teddy_2.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},{
  colors: ["Brown"],
  _id: "5beaaa8f1c9d440000a57d95",
  name: "Lenny and Carl",
  price: 5900,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl: "teddy_3.jpg"
},{
  colors: ["Brown", "Blue", "Pink"],
  _id: "5beaabe91c9d440000a57d96",
  name: "Gustav",
  price: 4500,
  imageUrl: "teddy_4.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},{
  colors: ["Beige", "Tan", "Chocolate"],
  _id: "5beaacd41c9d440000a57d97",
  name: "Garfunkel",
  price: 5500,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl: "teddy_5.jpg"
}]

function afficherNomDesNounours(liste) {
  for (let elem of liste) {
    console.log(`${elem.name}`)
  }
}

function afficherPrixTotal(liste) {
  let TotalPrice = 0;
  for (let elem of liste) {
    TotalPrice += elem.price
  }
  TotalPrice /= 2
  console.log(TotalPrice)
}

function affichierColorisDisponibles(liste) {
  for (let elem of liste) {
    console.log(`${elem.name} est disponible en  ${elem.colors.length} couleurs`)
  }
}

function afficherSuperieurTrente(liste) {
  for (let elem of liste) {
    let priceEuro = elem.price/100
    if (elem.price >= 3000)
      console.log(`${elem.name} à un prix supérieur à 30€, son prix est de ${priceEuro}€`)
    else
      console.log(`${elem.name} à un prix abordable et inférieur à 30€, son prix est de ${priceEuro}€`)
  }
}

function afficherSommeDescriptions(liste) {
  let SommeDescriptions = "";
  for (let elem of liste) {
    SommeDescriptions += elem.description
  }
  console.log(SommeDescriptions)
}

function afficherTroisiemeCouleurDispo(liste) {
  for (let elem of liste) {
    if (elem.colors[2] != undefined)
      console.log(`La 3ème couleur disponible de ${elem.name} est ${elem.colors[2]}`)
    else
      console.log(`La peluche ${elem.name} n'a pas de 3eme couleurs disponible`)
  }
}

// afficherTroisiemeCouleurDispo(nounourses) 

function ajouterParagraphe(message) {
  let ancre = document.getElementById("ancre") /* Choper l'elemnt "ancre" de la page html a modifier */
  let para = document.createElement("p") /* Création de la balise <p> dans le HTML */
  para.innerHTML = message /* Ajout du "message" dans le "para" */
  ancre.appendChild(para) /* Mettre un enfant "para" dans "ancre" */
}

ajouterParagraphe("Bonjour c'est moi")