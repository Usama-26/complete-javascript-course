/* 
#############################
## 6. CODING CHALLENGE - 1 ##
#############################
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const optionNumber = prompt(
      `${this.question}\n ${this.options.join('\n')}`
    );
    if (!optionNumber) return;
    validNumber = Number(optionNumber);
    if (validNumber < this.answers.length) {
      this.answers[validNumber]++;
      this.displayResults('show results');
    } else console.log('Invalid Choice');
  },
  displayResults(type = 'array') {
    if (typeof type === 'string')
      console.log(`Poll results are ${[...this.answers]}`);
    else console.log(this.answers);
  },
};

const answer = poll.registerNewAnswer.bind(poll);

document.querySelector('.poll').addEventListener('click', answer);

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

/* 
#############################
## 8. CODING CHALLENGE - 2 ##
#############################
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  return document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();

// In above code, the IIFE function expression is executed and long gone, but returning function is still able to access 'header' variable of execution context, in which the function was first created, preserved by scope chain, that means via 'Closure'.
