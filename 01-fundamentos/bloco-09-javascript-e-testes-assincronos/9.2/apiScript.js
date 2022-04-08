// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = (elemento) => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => { elemento.innerHTML = data.joke });
};

const insertHTML = () => {
  const body = document.body
  let elemento = document.createElement('p');
  body.appendChild(elemento);
  return elemento;
};

window.onload = () => {
  fetchJoke(insertHTML());
};
