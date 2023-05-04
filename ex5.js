// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'away', 'silent', 'generate', 'stunning', 'complete'];

// Usa el método filter para filtrar las palabras que empiezan por la letra 'e'
const e = words.filter(word => word.startsWith ("e"));

console.log(e); // TODO [ 'elite', 'exuberant']

// Usa el método filter para filtrar las palabras que empiezan por vocal
// BONUS: Usa una expresión regular!

const vocal = words.filter(word => /^[aeiou]/i.test(word))

console.log(vocal); // TODO [ 'elite', 'exuberant', 'away']
 