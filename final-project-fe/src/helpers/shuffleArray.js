export default function(array) {
  let output = array;
  //Fisher-Yates shuffle
  for (let i = output.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
}