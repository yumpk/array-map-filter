/* Array.prototype.map - Exercice 5

Ecrire une fonction multiplyOddIndices, qui prend en entrée un tableau de nombres.
* Chaque nombre situé à un index pair doit être renvoyé tel quel
* Chaque nombre situé à un index impair doit être renvoyé multiplié par son index

Il va donc falloir utiliser le 2ème argument de la fonction passée à map.

Exemple de tableau d'entrée:
  [3, 8, 11, 13, 19, 7]
Tableau renvoyé par multiplyOddIndices:
  [3, 8, 11, 39, 19, 35]
*/

function multiplyOddIndices(numbers) {
  const parity = (ind) =>{
    if (ind % 2 === 0){
      return true
    } else {
      return false
    }
  }
  const array = numbers.map(function(number,index){
    if (parity(index) === true){
      return number;
    }else{
      return number * index;
    }
  }
    );
  return array;
};

module.exports = multiplyOddIndices;