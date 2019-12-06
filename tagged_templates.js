//'strict mode'

var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
  console.error(strings, strings[0])
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
  ageStr = 'centenarian';
  } else {
  ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}

var output = myTag`That ${ person } is a ${ age }`;
console.log(output);

function template(strings, ...keys) {
  return (function WTF(...values) {
    var dict = {}// (values[values.length - 1] || {}); // tova ne raboti
    console.warn(dict)
    var result = [ strings[0] ]; //ne razbiram - array 
    keys.forEach(function FORR(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  });
}
  
var t1Closure = template`${0}${1}${0}!`;
console.log(t1Closure('Y', 'A'));  // "YAY!"
var t2Closure = template`${'foo'} ${0}!`;
console.log(t2Closure('Hello', {foo: 'World'}));  // "Hello World!"

console.log(String.raw`\unicode`)
  
function latex(str) { 
  return { "cooked": str[0], "raw": str.raw[0] }
} 

console.log(latex`\\u00A9nicode`)
console.log("\u00A9nicode")
//console.log("\unicode") // error
 
//error
// let bad = `bad escape sequence: \unicode`;
// console.log(bad)