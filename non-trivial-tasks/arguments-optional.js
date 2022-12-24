function addTogether(...props) {
  let [a, b] = props;

  if (typeof a !== 'number') {
    return undefined;
  }
  
  if (props.length === 1) {
    const fallback = (b) => addTogether(a = a, b);
    return fallback;
  }

  if (typeof b !== 'number') {
    return undefined;
  }

  return a + b;
}

console.log(addTogether(1, 2))