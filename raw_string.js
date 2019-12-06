const cl = console.log

cl(String.raw`Hi\n${2+3}!`);
// 'Hi\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

cl(String.raw`Hi\u000A!`);
// 'Hi\u000A!', same here, this time we will get the
//  \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.

let name = 'Bob';
cl(String.raw`Hi\n${name}!`);
// 'Hi\nBob!', substitutions are processed.

// Normally you would not call String.raw() as a function,
// but to simulate `foo${2 + 3}bar${'Java' + 'Script'}baz` you can do:
cl( String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script') ); // 'foo5barJavaScriptbaz'
// Notice the first argument is an object with a 'raw' property,
// whose value is an iterable representing the separated strings
// in the template literal.
// The rest of the arguments are the substitutions.

// The first argument’s 'raw' value can be any iterable, even a string!
// For example, 'test' is treated as ['t', 'e', 's', 't'].
// The following is equivalent to
// `t${0}e${1}s${2}t`:
cl(String.raw({ raw: 'test' }, 0, 1, 2)); // 't0e1s2t' 


cl(String.raw({ raw: `te${name}st` }, 0, "sdfdsfds")); // 't0e1s2t' 
cl(String.raw({ raw: "te" + name + "st" }, 0, "sdfdsfds")); // 't0e1s2t' 
cl(String.raw({ raw: ["te", name, "st"] }, 0, "sdfdsfds")); // 't0e1s2t' 