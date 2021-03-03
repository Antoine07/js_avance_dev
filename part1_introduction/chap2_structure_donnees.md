# Introduction aux structures de données

## Les tableaux

Vous pouvez définir un tableau, qui n'est rien d'autre qu'un objet JS, simplement à l'aide de crochets :

```js
let fruits =  ['Apple', 'Orange'];
```

### Exercice reference array

1. Reprenez la variable fruits ci-dessus. Que vaut le console.log dans l'exemple suivant? Affichez le contenu des deux tableaux :

```js
let fruits =  ['Apple', 'Orange'];

let newFruits = fruits;

newFruits.push('Banana')

console.log(newFruits.length === fruits.length)
```

2. Ecrivez un script pour créer un nouveau tableau newFruits qui n'a pas la même référence que le tableau fruits.


## Exercice populations

- 1. Parcourez le tableau populations et ajoutez un champ count qui compte le nombre d'occurence(s) de a et l dans les noms. Utilisez un for of.

```js

const populations = [
    { "id": 0, "name": "Alan" },
    { "id": 1, "name": "Albert" },
    { "id": 2, "name": "Jhon" },
    { "id": 3, "name": "Brice" },
    { "id": 4, "name": "Alexendra" },
    { "id": 5, "name": "Brad" },
    { "id": 6, "name": "Carl" },
    { "id": 7, "name": "Dallas" },
    { "id": 8, "name": "Dennis" },
    { "id": 9, "name": "Edgar" },
    { "id": 10, "name": "Erika" },
    { "id": 11, "name": "Isaac" },
    { "id": 12, "name": "Ian" }
];
```

- 2. Ordonnez maintenant le tableau par ordre croissant de nombre de a et l dans les noms.

## Fonction map

La méthode map permet de parcourir un tableau et d'exécuter une fonction pour chaqu'un de ses éléments. Elle retournera un nouveau tableau.

```js
const sheeps = ['🐑', '🐑', '🐑'];

const newSheeps = sheeps.map( sheep => sheep + sheep );
 // ["🐑🐑", "🐑🐑", "🐑🐑"]
```

### Exercice square numbers

1. Soit le point A suivant, calculez la distance de ce point à l'ensemble des points de la liste positions. Vous donnerez les résultats dans un nouveau tableau distances.

```js
const A = [8.3, 7.5];
const positions = [[1,1], [2, 2], [3, 4.5], [0, 9]];
const distances = [];
```

Rappelons comment on effectue le calcul de la distance avec une précision de deux chiffres après la virgule :

```js
const X = [1,2];
const B = [4,1.5];

const d = Math.floor( Math.square( (X[0] - B[0] )**2 + (X[1] - B[1] )**2 ) * 100) / 100 ;
```

### Exercice string

1. Inversez la chaîne de caractères sentence ci-après.

2. Comptez le nombre de caractères de chaque mot.

3. Faites un script qui prend en argument une phrase et qui retourne dans un tableau le nombre de caractères de chaque mot. Vous ne compterez pas les espaces comme un caractère.

Indication : utilisez la méthode split pour transformer la chaîne de caractères en tableau.

```js
const sentence = "Bonjour tout le monde, vous aimez JS ?";
```

## Structure de données Map

Un objet Map est une collection de paires clé/valeur qui peut utiliser n'importe quel type de valeur pour sa clé.

```js
const jedi = new Map()

```

### Ajout de valeurs dans un Map 

Vous utiliserez la méthode set de l'objet Map pour ajouter des valeurs.

```js
jedi.set('firstName', 'Luke')
jedi.set('lastName', 'Skywalker')
jedi.set('job', 'Jedi Master')
```

Vous pouvez également ajouter des valeurs dans un map à l'aide d'un tableau de tableaux :

```js
const jedi = new Map([
  ['firstName', 'Luke'],
  ['lastName', 'Skywalker'],
  ['job', 'Jedi Master'],
])
```

Exemple de quelques fonctions utiles :

```js

// rechercher une clé 
jedi.has('shark') // false

// accéder à une valeur à partir de sa clé
jedi.get('firstName')

// taille du Map
jedi.size

// supprimer un élément
jedi.delete('firstName');

// tout supprimer
jedi.clear()

// les keys et values
jedi.keys()
jedi.values()
// les deux 
jedi.entries()
```

### Itération sur un Map

- à l'aide d'un for of

```js
for (const [key, value] of jedi) {
  console.log(`${key}: ${value}`)
}
```

- à l'aide d'un foreEach 

```js
jedi.forEach(( v, k ) =>  console.log(v, k));
```

### Exercice average Map 

1. En utilisant les données DataStudents et la clé average, créez un Map puis calculez la moyenne de chaque étudiant. Les valeurs seront données avec une précision de deux décimales après la virgule.

2. Mettez à jour la mention en fonction de la moyenne obtenue, voir la clé mention dans les données. Pour les différentes moyennes vous utiliserez le code d'attribution de la mentions suivant :

- TB pour 17 à 20
- B pour 14 à 16
- AB pour 12 à 13
- P pour 10 à 11
- Pour les autres cas ne mettre aucune mention.

3. Créez un script qui permet d'ajouter un étudiant avec la convention de clé suivante : sX, où X représente un nombre. Vérifiez avant l'ajout que la clé n'existe pas dans le littéral.

```js

const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
        "s4",
        {
            "name": "Naoudi",
            "mention": "",
            "notes": [14.5, 19, 18],
            "average" : null,
            "url": "http://lorempixel.com/100/100/cats/3"
        }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ],
         [
            "s6",
            {
                "name": "Shere Khan",
                "mention": "",
                "notes": [],
                "average": null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];

// création du Map
const dataStMap = new Map(DataStudents);
```

## Set

L'objet Set, qui se traduit par ensemble en français, permet de stocker des valeurs uniques de n'importe quel type : primitif ou objet.

Voici en résumé les différentes méthodes d'un Set.

```js
const ensemble = new Set();

ensemble.add(1);         
ensemble.add(5);         
ensemble.add("100");

ensemble.has(1); // true
ensemble.has(3); // false
ensemble.size; // 3

ensemble.delete(5); // retire 5 du set
ensemble.has(5);    // false, 5 a été retiré de l'ensemble

ensemble.size; // 2, on a retiré une valeur de l'ensemble
console.log(ensemble); // Set [ 1, "du texte" ]
```

## Exercice count letters

Comptez chacune des lettres dans "Mississipi". Affichez le résultat dans une structure de données lisible.

Généralisez et créez maintenant une fonction qui prend en paramètre une chaîne de caractères et qui retourne le nombre d'occurences de chacune de ses lettres.

## Exercice count digit

Soit la chaîne de caractères suivante, récupérez tous les numériques de cette chaîne dans un tableau :

```js
const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';
```

D'autres structures de données existent en JS comme les WeakSet, WeakMap par exemple. Nous vous invitons, pour approfondir vos connaissances, à les découvrir sur la documentation devlopper.mozilla.org.
