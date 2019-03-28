/* Array.prototype.filter - Exercice 6

Ecrire une fonction filterOffensiveComments, qui attend deux paramètres, tous deux
des tableaux de chaînes de caractères :
1. des commentaires sur un fil d'actualité ou une vidéo.
2. une liste de mots "grossiers" ou "offensifs" à bannir

La fonction doit éliminer les commentaires contenant au moins un des mots "bannis".

Exemple d'entrée:
1. des commentaires (on est resté soft pour ne pas heurter les oreilles chastes)
[
  "Very useful tutorial, thank you so much!",
  "React is not a damn framework, it's a LIBRARY"
  "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
  "Which one is better, React or Angular?",
  'There is no "better", it depends on your use case, DAMN YOU'
]
2. mots à bannir: ['bloody', 'damn']

Sortie attendue:
[
  "Very useful tutorial, thank you so much!",
  "Which one is better, React or Angular?",
]

*/

function filterOffensiveComments(comments, bannedWords) {
  
  const array = comments.filter(function(comment){
    let count = 0;
    for (let i = 0; i < bannedWords.length; i++){
      let fWord = bannedWords[i];
      if (comment.toLowerCase().indexOf(fWord) !== -1){
        count++ ;
      };
    };

      if (count === 0){
        return comment;
      }
    }
    );  
    return array;
  };
  





// Ne pas modifier l'export
module.exports = filterOffensiveComments;
