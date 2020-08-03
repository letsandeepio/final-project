export default function timeInputFormat(value) {
  let output = Number(value);
    
  if (isNaN(output)) {
    output = value.slice(0, value.length - 1);
  }

  if (value.length > 2) {
    output = value.slice(0,2);
  }
  
  return output;
}