const codes = require('./code');

/**
 * @param {string} stringText
 * String text to convert to morse code
 */
module.exports.morse = (stringText) => {
  let morseBox = [];
  stringText
    .toUpperCase()
    .split('')
    .forEach((str) => {
      codes.forEach((code) => {
        if (str === code.letter) {
          morseBox.push(code.code);
        }
      });
    });
  return morseBox.join('.');
};
/**
 * @param {string} stringSentence
 * String Sentence to convert to morse seperated by "|"
 */
module.exports.morseSentence = (stringSentence) => {
  let sentenceBox = [];
  stringSentence.split(' ').forEach((string) => {
    sentenceBox.push(this.morse(string));
  });
  return sentenceBox.join('|');
};

/**
 * @param {string} morseText
 * Morse code to convert to String text
 */
module.exports.string = (morseText) => {
  let stringBox = [];
  morseText.split('.').forEach((morse) => {
    codes.forEach((code) => {
      if (morse === code.code) {
        stringBox.push(code.letter);
      }
    });
  });
  return stringBox.join('');
};

/**
 * @param {string} morseSentence
 * Morse code sentence to convert to string seperated by " "
 */
module.exports.stringSentence = (morseSentence) => {
  let sentenceBox = [];
  morseSentence.split('|').forEach((morse) => {
    sentenceBox.push(this.string(morse));
  });
  return sentenceBox.join(' ');
};
