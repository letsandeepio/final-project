export default function timeInputFormat(value, type) {
  const maxLength = 2;
  let output = value;
  console.log(value);

  if (output < 0) {
    output = 0;
  }
    
  if (isNaN(value)) {
    output = value.slice(0, value.length - 1);
  }

  if (value.length > 2) {
    output = value.slice(0, maxLength);
  }

  if (type === 'minutes' && value.slice(0, 2) >= 60) {
    output = value.slice(0, maxLength - 1);
  }
  console.log(output);
  return Number(output);
}