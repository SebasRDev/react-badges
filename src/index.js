// const element = document.createElement('h1');
// element.innerText = "Hello, Platzi Badges! Sebas"

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello, Platzi Badges! Sebas React</h1> //jsx
//const element = React.createElement('h1', {}, "Hello, Platzi Badges! Sebas React create element"); //react create element, es lo mismo que el de jsx

//uso de atributos
// const element = React.createElement('a', {href: 'https://platzi.com', target:"_blank"}, 'ir a web de platzi'); //como colocar atributos en create elemnt
// const element = <a href="https://platzi.com" target="_blank">ir a web de platzi desde jsx</a>

//uso de variables variables
const name = 'Sebastian Ramirez';
// const element = React.createElement('h1',{},`Hola, soy ${name}`); //uso de variables con react create element
// const element = <h1>Hola soy, { name }</h1> //uso de variables en jsx es entre {}

//por qué se usa más jsx que create element?
// const element = (
//   <div>
//     <h1>Hola, Soy {name}</h1>
//     <p>Soy ingeniero y trabajo en front end</p>
//   </div>
// );

const element = React.createElement(
  'div',
  {},
  React.createElement('h1',{}, `Hola, Soy ${name}`),
  React.createElement('p', {}, 'Soy ingeniero de websites')
)
//jsx es más declarativo que create elements y por eso se utiliza más

const container = document.getElementById('app');

ReactDOM.render(element, container); //render(que, dónde)

