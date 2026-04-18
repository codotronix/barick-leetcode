/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    return words.map((w, i) => w.includes(x) ? i : -1).filter(x => x !== -1);
};