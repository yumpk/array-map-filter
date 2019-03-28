/* Array.prototype.filter - Exercice 3

Ecrire une fonction keepStarks, qui prend en arguments un tableau de chaînes
(plus spécifiquement, des noms de personnages de Game of Thrones).

La fonction doit renvoyer un tableau ne contenant que les membres de la famille Stark.

Il y a plusieurs façons d'écrire cette fonction, et outre filter, tu auras probablement
besoin d'une de ces méthodes de String: endsWith ou split.

Exemple d'entrée:
  [
    'Bran Stark',
    'Cersei Lannister',
    'Sandor Clegane',
    'Arya Stark',
    'Yara Greyjoy',
    'Sansa Stark'
  ]

Sortie attendue:
  ['Bran Stark', 'Arya Stark', 'Sansa Stark']

 */

function keepStarks(names) {
  let stark = name =>{
    let splitName = name.split(' ');
    let lastName = splitName[1];
    const verifyLastName = lastName => {
    if (lastName === 'Stark'){
      return true;
    };
  };
  return verifyLastName(lastName);
  };
  const starkArray = names.filter(function(completeNames){
    if (stark(completeNames) === true){
      return completeNames;
    }; 
  }
  );
  return starkArray;
};

// Ne pas modifier l'export
module.exports = keepStarks;
