/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
let a = [str];
let b = [];
for(let i = a.length - 1; i >= 0; i--){
  b.push(a[i]);
  }
  b.toString();
  return b ;
}
