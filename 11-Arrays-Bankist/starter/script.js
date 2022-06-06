'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/* 
#############################
## 1. SIMPLE ARRAY METHODS ##
#############################
*/

// Arrays also simple methods like strings e.g. splice(), slice(), push(), pop(), shift(), unshift(), toString(), concat(), at() etc.
// A detailed reference about arrays can be found here... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/* 
#################################
## 2. LOOPING ARRAYS: FOREACH  ##
#################################
*/

const movementsCopy = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let's loop over this movements Array using forEach --- 'E' capital
// forEach() basically a higher order function which means it accepts a callback

movementsCopy.forEach(function (elem, index, array) {
  // parameter1: currentElement, parameter2:currentIndex, parameter3: currentArray that we're looping over
  // we can also pass arrow function.. elem is current index or element of the array... and for each element of the array.. this callback will be executed.
  if (elem < 0) {
    console.log(`You withdrew $${Math.abs(elem)}`);
  } else console.log(`You deposited $${elem}`);
});
// forEach loop doesn't break or continue, this will loop over the entire array

/* 
####################################
## 3. FOREACH WITH MAPS AND SETS  ##
####################################
*/

const currenciesCopy = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currenciesCopy.forEach(function (value, key, map) {
  // Again, value: currentMapElement, key: currentElementKey, map: Map we're looping over
  console.log(`${key}: ${value}`);
});
// As we know that Set contains only unique values that means there is no key but only value, so we can loop over the Set just the way we did with arrays but no duplicate values.

const displayMovements = function (account) {
  containerMovements.innerHTML = '';
  account.movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const transactionHTML = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', transactionHTML);
  });
};

/* 
##########################
## 4. THE MAP() METHOD  ##
##########################
*/

// The Map method returns a new array after performing some operation on it which is written in callback. So .map method accepts a callback
const eurotousd = 1.1;
const movementsUSD = movements.map(mov => Math.trunc(mov * eurotousd));
console.log(movementsUSD);

const movementsDesc = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(
      mov
    )}`
);

const createUsernames = function (accnts) {
  accnts.forEach(accnt => {
    accnt.username = accnt.owner
      .toLowerCase()
      .split(' ')
      .map(elem => elem[0])
      .join('');
  });
};
createUsernames(accounts);

/* 
#############################
## 5. THE FILTER() METHOD  ##
#############################
*/
// Filter method filters out the array based on some condition, accepting the callback function
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

/* 
#############################
## 6. THE REDUCE() METHOD  ##
#############################
*/

// Reduce method reduces the array to one single number by adding up all the values in the array, accepting a callback and a initial Value. if initial value is not set, previous value will be set to first element of the array

const balance = movements.reduce((acc, current) => {
  // Unlike filter and map, it uses a accumulator variable that stores sum of all elements, as argument
  return acc + current;
});

// let's create reduce function for our app
const printCalcBalance = function (account) {
  account.balance = account.movements.reduce((prev, current) => prev + current);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, deposit) => acc + deposit);
  labelSumIn.textContent = `${income}€`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, withdrawal) => acc + withdrawal);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(minInt => minInt >= 1)
    .reduce((accu, interest) => accu + interest);
  labelSumInterest.textContent = `${interest}€`;
};

/* 
###########################
## 7. THE FIND() METHOD  ##
###########################
*/

// Find method work similar to .filter(), but instead of returning an array, it returns only one element of the array

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let currentAccount;

const updateUI = function (account) {
  // Display Movements
  displayMovements(account);
  // Display Balance
  printCalcBalance(account);
  // Display Summary
  calcDisplaySummary(account);
};

btnLogin.addEventListener('click', function (event) {
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    // Reset Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();
    // Display Welcome
    labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(' ')[0]}`;
    updateUI(currentAccount);
  } else console.log('Invalid Credentials');
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  console.log(currentAccount);
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();
});

/* 
################################
## 8. THE FINDINDEX() METHOD  ##
################################
*/

// findIndex() returns index of a specific element in the array.. that may be based on some certain condition.
// Accepts a callback
btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  } else console.log('Invalid');

  inputCloseUsername.value = inputClosePin.value = '';
});

/*
#######################################
## 9. THE SOME() AND EVERY() METHOD  ##
#######################################
*/

// some() method is similar to includes(), but in includes we can only check for equality but in with some method we can check for a certain condition.
// returns boolean, accepts callback

const anyDeposits = movements.some(mov => mov > 0); // returns true if there is any value in the array that is greater than 0
console.log(anyDeposits); // true

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  }
});

// every() method is works only if all the elements of the array satisfy some certain condition
// return boolean

console.log(movements.every(mov => mov > 0)); // false.. because there withdrawals as well
console.log(account4.movements.every(mov => mov > 0)); // true.. account 4 only has deposits.

/* 
##########################################
## 10. THE FLAT() AND FLATMAP() METHOD  ##
##########################################
*/
// The flat() method is used to flat or combine nested arrays
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1,2,3,4,5,6,7,8]

// For deep nested arrays, we pass a number argument to flat method, to flat the array that number level deeper
const arrDeep = [1, 2, [3, 4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // [1,2,3,4,5,6,7,8]

// flatMap() method is used to flat the arrays within the objects

const overAllBalance = accounts
.flatMap(account => account.movements)
.reduce((accu, mov) => accu + mov);
// flatMap goes only one level deep..for deeper level, we still have to use flat() method
console.log(overAllBalance);

/* 
############################
## 11. THE SORT() METHOD  ##
############################
*/

