function snakeToCamel(str) {
  const camelString = str.replaceAll('__','').split('_').reduce((acc, word, idx) => {
    if (idx === 0) {
      return acc + word;
    }
    return acc + word.charAt(0).toUpperCase() + word.slice(1);
  }, '');

  if (str.startsWith('__') && str.endsWith('__')){
    return `__${camelString}__`;
  }
  if (str.startsWith('__')) {
    return `__${camelString}`;
  }
  if (str.endsWith('__')) {
    return `${camelString}__`;
  }
  return camelString;
}