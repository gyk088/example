export const encode = (source) => {
  let result = '';
  for (let int32, i = 0; i < source.length; i++) {
    int32 = source.charCodeAt(i) + 3;
    result += String.fromCharCode(int32);
  }

  return result;
};

export const decode = (result) => {
  let source = '';
  for (let int32, i = 0; i < result.length; i++) {
    int32 = result.charCodeAt(i) - 3;
    source += String.fromCharCode(int32);
  }
  return source;
};
