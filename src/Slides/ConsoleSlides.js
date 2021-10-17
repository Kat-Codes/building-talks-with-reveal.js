import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
import { Flex } from '../Components/Box';
import JSX from '../Components/Highlight/JSX'

const basicConsoleLog = `
const solve = (a, b, c) => {
  const result = a + b + c;
  return result;
}

console.log(solve(1,2,-3)); // we expect 0
`;

const complexWrongConsoleLog = `
const solve = (a, b, c) => {
  const result = ((-1*b+Math.sqrt(Math.pow(b, 2))-(4*a*c))/(2*a));
  return result;
}

console.log(solve(1,2,-3)); // we expect 1
`;

const complexDebugConsoleLog = `
const solve = (a, b, c) => {
  const sqrRoot = Math.sqrt(Math.pow(b, 2))-(4*a*c);
  console.log(sqrRoot); // expect 4
  const top = (-1 * b) + sqrRoot;
  console.log(top); // expect 2
  const bottom = 2 * a; 
  console.log(bottom) // expect 2
  const result = top / bottom;
  return result;
}
console.log(solve(1, 2, -3)); // we expect 1
`;

const complexOutput = `
14
12
2
6
`;


const consoleassert = `
const addItem = (subtotal, itemCost) => {
  const total = subtotal + itemCost;
  return total;
}

const total = addItem(10,2);
console.assert(total == 10);
`;

const complexRightConsoleLog = `
const solve = (a, b, c) => {
  const result = (-1*b+Math.sqrt(Math.pow(b, 2)-(4*a*c)))/(2*a);
  return result;
}

console.log(solve(1,2,-3)); // we expect 1
`;

const consoleTrace = `

const addItem = (subtotal, itemCost) => {
  const total = subtotal + addTax(itemCost);
  return total;
}

const addTax = (itemCost) => {
  const tax = getTax();
  return itemCost + itemCost * tax;
}

const getTax = () => {
  console.trace("Our console trace");
  return 0.2;
}

addItem(10,2);
`;

const consoletime = `
console.time('loop-time');
for (let i = 0; i < 100; i++) {}
console.timeEnd('loop-time');
`;

const consoletraceoutput = `
Trace: Our console trace
    at getTax (/Users/katiewalker/Documents/repo/debugging-the-web/code-examples/trace.js:13:13)
    at addTax (/Users/katiewalker/Documents/repo/debugging-the-web/code-examples/trace.js:8:17)
    at addItem (/Users/katiewalker/Documents/repo/debugging-the-web/code-examples/trace.js:3:30)
    at Object.<anonymous> (/Users/katiewalker/Documents/repo/debugging-the-web/code-examples/trace.js:17:1)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
`;

const ConsoleSlides = () => (
  <>
    <Slide>
      <h2>The trusty console.log</h2>
      <Note>
        <p>The console log is a popular tool. I couldn't count how many times it's helped me, but I've definitely accidently commited it to master a couple of times too</p>
      </Note>
    </Slide>
    <Slide>
      <JSX code={basicConsoleLog} />
      <div class="fragment"><JSX code="0" /></div>
      <Note>
        Here's a really basic example of console.log in use. We expect to get 0 as the output. Luckily that's what we get
      </Note>
    </Slide>
    <Slide>
      <img src="./image/quadratic.jpg" />
      <Note>
        Here's a trickier problem - we want to use this equation in our app so we can solve quadratic equations. For simplicity we're just going to try solve for one of the answers
      </Note>
    </Slide>
    <Slide>
      <JSX style="width: 100%" code={complexWrongConsoleLog} />
      <div class="fragment"><JSX code="6" /></div>
      <Note>So we type up the equation in JS, and give it some numbers and we want to check it's right. So i plug the numbers into a calculator and get 1, cool! Now run the code: 6, weird</Note>
    </Slide>
    <Slide>
      <JSX code={complexDebugConsoleLog} />
      <div class="fragment"><JSX code={complexOutput} /></div>
      <Note>
        <ul>
          <li>To try find the error, we can break down the steps</li>
          <li>and log each step</li>
          <li>So I do this in a way I would split it down for a calculator and get the expected answer for each</li>
          <li>I can run my code and see where it differs</li>
          <li>It looks like it's the first line -aha, i've put the brackets in the wrong place - easy mistake</li>
        </ul>
      </Note>
    </Slide>
    <Slide>
      <JSX code={complexRightConsoleLog} />
      <div class="fragment"><JSX code="1" /></div>
      <Note>Put it back together and fix the original mistake and try again. we now get the right answer</Note>
    </Slide>
    <Slide>
      <Flex>
        <ul style={{ flex: 1, margin: 0 }} >
          <h4>Pros</h4>
          <li>Easy to use with no imports or libraries</li>
          <li>Minimal code to output variables</li>
          <li>Console object provides lots of different functions</li>
        </ul>
        <ul style={{ flex: 1 }} class="fragment" data-fragment-index="2">
          <h4>Cons</h4>
          <li>These can be useful in a pinch but not very efficient..</li>
          <li>Tedious to output a lot of info</li>
          <li>Usually needs cleaning up afterwards</li>
        </ul>
      </Flex>
      <Note>
        <ul>
          <li>So we've seen how easy it can be to add these console logs - no imports or libraries</li>
          <li>Once the code was split out we didnt need to add much - just a console.log wherever we wanted</li>
          <li>If we wanted to, we could've made use of the other console functions available</li>
          <li>However, it wasn't very efficent having to manually output each var</li>
          <li>Could get very tedious with a bigger problem</li>
          <li>We had to go back and cleanup afterwards</li>
          <li>So overall it worked for a simple problem, but was quite slow</li>
        </ul>
      </Note>
    </Slide>
    <Slide>
      <h3>console.trace</h3>
      <JSX code={consoleTrace} />
      <Note>
        <p>There are other functions you can make use of with the console. For example console trace Shows the path of function calls leading up to it</p>
      </Note>
    </Slide>
    <Slide>
      <h3>console.trace</h3>
      <JSX code={consoletraceoutput} />
    </Slide>
    <Note>
      <p>this would be great for trying to follow complex function calls</p>
    </Note>
    <Slide>
      <h3>console.assert</h3>
      <JSX code={consoleassert} />
      <JSX code="Assertion failed" />
      <Note>
        <p>Assert the expression you pass it is true. Not very useful in comparison to proper unit tests but good in a pinch</p>
      </Note>
    </Slide>
    <Slide>
      <h3>console.time</h3>
      <JSX code={consoletime} />
      <JSX code="loop-time: 100.101ms" />
      <Note>
        <p>Time how long it takes between calls, as a basic performance test</p>
      </Note>
    </Slide>
  </>
)

export default ConsoleSlides;
