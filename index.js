function encodeStringXSS(string) {
  
  const encodedString = string.split('').map(char => char.charCodeAt(0)).join(',')
  const result = `String.fromCharCode(${encodedString})`

  return result;
  
}

encodeStringXSS('<h1>Hello, World!</h1>')
