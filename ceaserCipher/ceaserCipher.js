const plaintextAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function ceaserCipher(string, shift) {
  let newAlphabet = ciphertextAlphabet(shift);
  let str = '';
  string.split('').forEach((char) => {
    decipheredChar = newAlphabet[plaintextAlphabet.indexOf(char.toLowerCase())];
    if (!decipheredChar) {
      str += char;
    } else if (char == char.toUpperCase()) {
      str += decipheredChar.toUpperCase();
    } else {
      str += decipheredChar;
    }
  });
  return str;
}
module.exports = ceaserCipher;

function ciphertextAlphabet(shift) {
  newAlphabet = [];
  for (let i = shift; i < plaintextAlphabet.length; i++) {
    newAlphabet.push(plaintextAlphabet[i]);
  }
  plaintextAlphabet.slice(0, shift).forEach((e) => newAlphabet.push(e));
  return newAlphabet;
}