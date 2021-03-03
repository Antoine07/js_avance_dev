<<<<<<< HEAD
export function addDragons(main, dragonsList, count, clean = false) {
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(`Nombre de dragon(s) : ${count}`));
  main.appendChild(p);

  const ul = document.createElement("ul");

  for (const { id, name, element, relations, average } of dragonsList) {
    const li = document.createElement("li");
    li.id = average;
    const content = document.createTextNode(`Name : ${name} ${element ?? ""}`); // test ?? ''
    li.appendChild(content);

    if (relations.length > 0) {
      const ulR = document.createElement("ul");
      // titre 
      const hR = document.createElement("h2");
      ulR.appendChild( hR.appendChild(document.createTextNode("Relation(s) :")) );
      for (const nameR of relations) {
        const liR = document.createElement("li");
=======
export function addDragons(main, dragonsList, button, clean) {

  if (clean === true) {
      while(main.firstChild){
          main.removeChild(main.firstChild)
      }
  }

  main.appendChild(button);
  const ul = document.createElement("ul");

  for (const { id, name, average, relations } of dragonsList) {
    const li = document.createElement("li");
    const content = document.createTextNode(name);
    li.appendChild(content);

    if (average) {
      let p = document.createElement("p");
      p.appendChild(document.createTextNode(`Moyenne forces :  ${average}`));
      li.appendChild(p);
    }

    if (relations) {
      let ulR = document.createElement("ul");
      let liR = null;
      for (const { name: nameR } of relations) {
        liR = document.createElement("li");
>>>>>>> 70a91be27603702c50e9324712f18c0284f55dbd
        liR.appendChild(document.createTextNode(nameR));
        ulR.appendChild(liR);
      }

      li.appendChild(ulR);
    }

<<<<<<< HEAD
    // moyenne ?
    if(average){
      const pAverage = document.createElement("p");
      pAverage.appendChild(document.createTextNode(`Moyenne des forces : ${average}`));
      li.append(pAverage);
    }

=======
>>>>>>> 70a91be27603702c50e9324712f18c0284f55dbd
    ul.appendChild(li);
  }

  main.appendChild(ul);
}

export const average = (data) => {
<<<<<<< HEAD

  if(data.length > 0){
    return (
      Math.floor( (data.reduce((acc, curr) => acc + curr) / data.length) * 100 ) / 100
    );
  }
=======
  if (data.length > 0)
    return (
      Math.floor((data.reduce((acc, curr) => acc + curr) / data.length) * 100) /
      100
    );
>>>>>>> 70a91be27603702c50e9324712f18c0284f55dbd

  return null;
};

export const createButton = (label) => {
<<<<<<< HEAD
  const btn = document.createElement("button");
  const btnTxt = document.createTextNode(label);
  btn.appendChild(btnTxt);

  return btn;
};
=======
  const button = document.createElement("button");
  const buttonText = document.createTextNode(label);
  button.appendChild(buttonText);

  return button;
}
>>>>>>> 70a91be27603702c50e9324712f18c0284f55dbd
