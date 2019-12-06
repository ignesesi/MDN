
const cl = console.log

var handlerPrefix = "on"
var handlerTest = new RegExp(`^${handlerPrefix}.*`)
var internalHandlerTest = new RegExp(`^__${handlerPrefix}.*`)
cl(handlerTest, internalHandlerTest)
cl(handlerTest.test("onEventChangeActiveBet"))
cl(handlerTest.test("on"))
cl(handlerTest.test("on.EventChangeActiveBet"))
cl(handlerTest.test("_onChangeActiveBet"))

cl(internalHandlerTest.test("__onChangeActiveBet"))
cl(internalHandlerTest.test("__.onChangeActiveBet"))

let prop = "asdfghjkl;plkjhgfdsasdtgfyhuiujhygtfrdeswadfgh"
let handler = prop.split("_");
console.log (handler[0].slice(2), handler[1]);


let eventName = "onEventChangeActiveBet"
cl(eventName.substr(2), eventName) //.split("_")[0]