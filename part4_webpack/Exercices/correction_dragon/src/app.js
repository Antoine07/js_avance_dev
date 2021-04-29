import { addDragons, average, createButton } from "./core/utils"; // export normal nommé

import * as Dragon from "./core/dragons"; // export default peut être renommé

const main = document.getElementById("main");

<<<<<<< HEAD
// On attend que le DOM soit construit avant d'exécuter nos fonctions
document.addEventListener("DOMContentLoaded", (event) => {
  const {
    dragons: { names, count },
    relationships,
    forces,
  } = Dragon;

  const dragonsList = names.map((dragon) => {
    dragon.relations = [];
    const ids = relationships.find((r) => r.id === dragon.id)?.relations;
    if (ids) {
      dragon.relations = names
        .filter((d) => ids.includes(d.id))
        .map((d) => d.name);
    }
    // moyenne

    const notes = forces.find((f) => f.id === dragon.id)?.notes;

    dragon.average = average(notes);

    return dragon;
  });

  const btn = createButton("Order C/D (toggle)");
  document.getElementById("btn").appendChild(btn);

  let toggle = true;
  // écouteur sur un bouton que l'on vient de créer
  btn.addEventListener("click", (e) => {
    const ul = document.querySelector("#main > ul");
    const lis = document.querySelectorAll("#main > ul > li");

    // transformer la structure node du DOM en array que l'on peut parcourir 
    // correction Manuel
    Array.from( lis )
      .sort((a, b) => toggle ? a.id - b.id : b.id - a.id)
      .map( li => ul.appendChild(li));

    toggle = !toggle;
  });

  addDragons(main, dragonsList, count);
});
=======
document.addEventListener("DOMContentLoaded", (event) => {
  let {
    dragons: { names },
    forces,
    relationships,
  } = Dragon;

  const dragonsList = names.map((dragon) => {
    let notes = forces.find((f) => f.id === dragon.id)?.notes;
    dragon.average =  average(notes);

    dragon.relations = [];
    let ids = relationships.find((relation) => relation.id === dragon.id)?.relations;
    if (ids) {
      dragon.relations.concat( names.filter((d) => ids.includes(dragon.id)) );
    }

    return dragon ;
  });

  let toggle = true;
  const btn = createButton('Order list toggle');

  btn.addEventListener("click", (e) => {
    if (toggle) {
      dragonsList.sort((a, b) => a.average - b.average);
      addDragons(main, dragonsList, btn, true);
    } else {
      dragonsList.sort((a, b) => b.average - a.average);
      addDragons(main, dragonsList, btn, true);
    }
    toggle = !toggle;
  });

  addDragons(main, dragonsList, btn, false);
});
>>>>>>> 70a91be27603702c50e9324712f18c0284f55dbd
