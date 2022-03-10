function convertDoubleSpaceToSingle(str) {//convertir doble espacio a unico
    return str.split('  ').join(' ');
   
    
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"





//function convertDoubleSpaceToSingle(str) {//convertir doble espacio a unico
//return str.split('  ').join(' ');
//.................................................................................
// works, but is 5 lines
// function convertDoubleSpaceToSingle(str) {
//   str = str.split('  ');
//   str = str.join(' ');
//   return str;
// }

//.................................................................................
// works, but is 11 lines.
// function convertDoubleSpaceToSingle(str) {
//   str = str.split(' ');
//   var newStr = [];
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] !== '') {
//       newStr.push(str[i]);
//     }
//   }
//   newStr = newStr.join(' ');
//   return newStr;
// }

//.................................................................................
//works but still don't understand regex
// function convertDoubleSpaceToSingle(str) {
  
//   str = str.split(/\s+/).join(' ');
//   //return str.split(/\s+/); //[ 'string', 'with', 'double', 'spaces' ]
//   //return str.split(/\s+/).join(' '); //string with double spaces
   
//   return str;
// }



// function convertDoubleSpaceToSingle(str) {

//   //var re = /\s*;\s*/;

//   //str = str.replace(/\s\s+/g, ' ');


//   //var splitString = str.split(re);
//   //var joinString = splitString.toString('/');
//   //return splitString;
// }

//var nameList = names.split(re);
//string = string.replace(/\s\s+/g, ' ');


