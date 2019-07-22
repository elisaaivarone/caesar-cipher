encodeArea = () => {
  const message = document.getElementById('messageEncode').value;
  const offSet = parseInt(document.getElementById('offSet').value);
  document.getElementById('messageEncode').value = encodeCipher(message, offSet);
} 
document.querySelector('#encode').addEventListener('click', encodeArea);

encodeCipher = (message, offSet) => {
  let code = '';
  for (let i in message) {
   const codeAsc = message.charCodeAt(i);
    if (codeAsc >= 65 && codeAsc <= 90) {
      code += String.fromCharCode(((codeAsc - 65 + (offSet % 26) + 26) % 26) + 65);
    }else if (codeAsc >= 97 && codeAsc <= 122) {
      code += String.fromCharCode(((codeAsc - 97 + (offSet % 26) + 26) % 26) + 97);
    }else {
      code += String.fromCharCode(codeAsc);
    }
  }
  return code;
}

decodeArea = () => {
  const message = document.getElementById('messageDecode').value;
  const offSet = parseInt(document.getElementById('offSet').value);
  document.getElementById('messageDecode').value = decodeCipher(message, offSet);
}
document.querySelector('#decode').addEventListener('click', decodeArea);

decodeCipher = (message, offSet) => {
  let code = '';
  for (let i in message) {
    let codeASCII= message.charCodeAt(i);
    if (codeASCII>= 65 && codeASCII<= 90) {
      code += String.fromCharCode(((codeASCII - 65 - (offSet % 26) + 26) % 26) + 65);
    }else if (codeASCII>= 97 && codeASCII<= 122) {
      code += String.fromCharCode(((codeASCII- 97 - (offSet % 26) + 26) % 26) + 97);
    }else {
      code += String.fromCharCode(codeASCII);
    }
  }
  return code;
}



