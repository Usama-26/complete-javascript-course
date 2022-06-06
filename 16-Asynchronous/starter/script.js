'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/* 
#########################
## Our First AJAX Call ##
#########################
*/
function renderCountry(data, neighbour = '') {
  const html = `<article class="country ${neighbour}">
  <img class="country__img" src=${data.flag} />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

function renderError(msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

function getJSON(url, errMsg = '') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
    return response.json();
  });
}

/* function getCountry(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(request.responseText);
    console.log(data);
    renderCountry(data);
  });
}

getCountry('pakistan'); */

/* 
#######################
## The Callback Hell ##
#######################
*/

// Callback hell is special term that is used for the callback functions having callback functions

// setTimeout(() => {
//   console.log(`1 second passed`); // first callback
//   setTimeout(() => {
//     console.log(`2 seconds passed`); // second callback
//     setTimeout(() => {
//       console.log(`3 seconds passed`); // third callback.
//     }, 3000);
//   }, 2000);
// }, 1000);

// We will keep adding function callbacks as long as we're required.. this leads to messy code
/* 
########################
## Promises and Fetch ##
########################
*/

// A Promise is an object that is used as placeholder for the future result of an asynchronous function..
// It's a like container for future value that is delievered from an asynchronous function.. for example.. AJAX Response Call
// ES6 Feature

/* const fetchRequest = fetch('https://restcountries.com/v2/name/pakistan');
console.log(fetchRequest); */

// Life cycle of promises
// pending --> settled --> two types -- fulfilled OR rejected
// pending when a value hasn't yet arrived, settled when asynchronous operation has finished
// fulfilled OR rejected whether a operation has been successfull or an error has occured
// Promise comes from fetch API

/* 
########################
## Consuming Promises ##
########################
*/

// getCountry() function using promises
// .then() method will be only called when a promise is fulfilled
// .catch() method will be only called when an error is occured and promise is rejected
// fetch promises are only rejected if a network error is occured
// .finally() method will always be called no matter if a promise is fulfilled or rejected
// all methods return a new Promise whether a return value passed to them or not
// if a return value is specified, the method will also return that value along with promise
/* function getCountryData(country) {
  const fetchRequest = fetch(`https://restcountries.com/v2/name/${country}`);
  fetchRequest
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(neighbourData => renderCountry(neighbourData, 'neighbour'))
    .catch(err => {
      console.error(err);
      renderError(
        `Something Went wrong.💥💥💥 ${err.message}. Try Again later!`
      );
    })
    .finally(() => (countriesContainer.style.opacity = 1));
}
 */

// Enhanced version of above function
function getCountryData(country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  // getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not Found!')
  // .then(data => {
  //   console.log(data);
  //   renderCountry(data[0]);
  //   const neighbour = data[0].borders[0];
  //   if (!neighbour) throw new Error('No Neighbour Found');
  //   getJSON(`https://restcountries.com/v2/alpha/${neighbour}`);
  // })
  // .then(neighbourData => renderCountry(neighbourData, 'neighbour'))
  // .catch(err => {
  //   console.error(err);
  //   renderError(
  //     `Something Went wrong.💥💥💥 ${err.message}. Try Again later!`
  //   );
  // })
  // .finally(() => (countriesContainer.style.opacity = 1));
}
btn.addEventListener('click', () => {
  getCountryData('pakistan');
});
