export default function timeInputFormat(value, type) {
  const maxLength = 2;
  let output = value;

  if (output < 0) {
    output = 0;
  }
    
  if (isNaN(value)) {
    output = value.slice(0, value.length - 1);
  }

  if (type === 'minutes' && value >= 60) {
    output = value.slice(0, maxLength - 1);
  }
  return Number(output);
}