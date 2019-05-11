function encode() {
    let message = document.getElementById('messageEncode'). value;
  
    let key = parseInt (document.getElementById('offSet'). value );
  
    let result = encodeCipher(message, key); 
    document.getElementById('messageEncode').value = result;
  }
  
  function encodeCipher(message, key) {
    let code = '';
    let codeASCII = [];
  
    for (let i = 0; i < message.length; i++) {
      codeASCII = message[i].charCodeAt();  
      if (codeASCII >= 65 && codeASCII <= 90) {
        code += String.fromCharCode(((codeASCII - 65 + (key % 26) + 26) % 26) + 65);
      } else if (codeASCII >= 97 && codeASCII <= 122) {
        code += String.fromCharCode(((codeASCII - 97 + (key % 26) + 26) % 26) + 97);
      } else {
        code += String.fromCharCode(codeASCII);
      }
    }
    return code;
  }
  
  function decode() {
    let message = document.getElementById('messageDecode'). value;
    let key = parseInt (document.getElementById('offSet'). value );
    let result = decodeCipher(message, key); 
    document.getElementById("messageDecode").value = result;
  }
  
  function decodeCipher(message, key) {
    let code = '';
    let codeASCII = [];
  
    for (let i = 0; i < message.length; i++) {
      codeASCII = message[i].charCodeAt();  
  
      if (codeASCII >= 65 && codeASCII <= 90) {
        code += String.fromCharCode(((codeASCII - 65 - (key % 26) + 26) % 26) + 65);
      } else if (codeASCII >= 97 && codeASCII <= 122) {
        code += String.fromCharCode(((codeASCII - 97 - (key % 26) + 26) % 26) + 97);
      } else {
        code += String.fromCharCode(codeASCII);
      }
    }
    return code;
  }