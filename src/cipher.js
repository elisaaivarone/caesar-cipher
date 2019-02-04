function encodeCipher(message, offSet) {
  let code = []
  let codeAscii = ""

  for (let i = 0; i < message.length; i++){
    code.push(message[i]. charCodeAt());

   if (codeAscii >= 65 && codeAscii <= 90){
       codeAscii= string.fromCharCode (codeAscii - 65 + (offSet)% 26 + 65);
   }   
   else if (codeAscii >= 97 && codeAscii <= 122){
       codeAscii = string.fromCharCode (codeAscii - 97 + (offSet)% 26 + 97);
   } 
   else {
    return String.fromCharCode(codeAscii);
  }

 let message = document.getElementById("messageEncode"). value;
 let offSet = parseInt (document.getElementById (offSet). value );


 function decodeCipher(message, offSet) {
  let code = []
  let codeAscii = ""

  for (let i = 0; i < message.length; i++){
    code.push(message[i]. charCodeAt());

   if (codeAscii >= 65 && codeAscii <= 90){
       codeAscii= string.fromCharCode (codeAscii - 65 - (offSet)% 26 + 65);
   }   
   else if (codeAscii >= 97 && codeAscii <= 122){
       codeAscii = string.fromCharCode (codeAscii - 97 - (offSet)% 26 + 97);
   }
   else {
    return String.fromCharCode(codeAscii);
  }
 
 let message = document.getElementById("messageDecode"). value;
 let offSet = parseInt (document.getElementById (offSet). value );