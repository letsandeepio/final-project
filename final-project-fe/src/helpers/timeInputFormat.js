export default function timeInputFormat(value, type) {
  const maxLength = 2;
  let output = value;
    
  if (isNaN(output)) {
    output = value.slice(0, value.length - 1);
  }

  if (value.length > 2) {
    output = value.slice(0, maxLength);
  }

  if (type === 'minutes' && value.slice(0, 2) >= 60) {
    output = value.slice(0, maxLength - 1);
  }
  
  return Number(output);
}