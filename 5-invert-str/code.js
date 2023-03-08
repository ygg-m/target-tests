function invertString(str) {
  let invertedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    invertedStr += str[i];
  }

  return invertedStr;
}

const str = "Me contrata target!";

console.log(`Normal: ${str}`);
console.log(`Invert: ${invertString(str)}`);
