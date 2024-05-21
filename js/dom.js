const parrafo1 = document.getElementById('parrafo1');
const parrafo2 = document.getElementById('parrafo2');
const boton = document.getElementById('boton');
const divs = document.querySelectorAll('div');
let cambio  = false;

function cambioColores() {
    if (cambio) {
        parrafo1.classList.remove('elementoPrincipal');
        parrafo2.classList.remove('elementoSecundario');
        parrafo1.classList.add('elementoPrincipal2');
        parrafo2.classList.add('elementoSecundario2');
    } else {
        parrafo1.classList.remove('elementoPrincipal2');
        parrafo2.classList.remove('elementoSecundario2');
        parrafo1.classList.add('elementoPrincipal');
        parrafo2.classList.add('elementoSecundario');
    };

    cambio =!cambio;
}

boton.addEventListener('click',cambioColores);

//const elements = document.getElementsByClassName('saludo');
//const elements = document.getElementsByName('container');
/* const elements = document.getElementsByTagName('div');//no se comportar como array
console.log(elements);
const divs = document.querySelectorAll('div'); //se comporta como array
console.log(divs); */


/* console.log(divs[0]);
console.log(divs[0].innerHTML);
console.log(divs[0].firstChild.nodeValue);
divs[0].firstChild.nodeValue = 'nuevo texto'; */


//crear elementos 

parrafo3 = document.createElement('p');//etiqueta
contentParrafo3= document.createTextNode('parrafo 3');//crea el texto
parrafo3.appendChild(contentParrafo3);//asignar el hijo
document.body.appendChild(parrafo3);//ubicar el elemento
parrafo3.classList.add('elementoPrincipal');//agregar clase
parrafo3.id = 'parrafo3';//agregar id

//verificar si un elemento está conectado al DOM existe en el eHTML

const estado = parrafo3.isConnected;
console.log(estado);

const p = document.createElement('p');
p.innerText = 'parrafo 4';
let div = document.createElement('div');
div.appendChild(p);
p.classList.add('elementoSecundario');//agregar clase
p.id = 'parrafo4';//agregar id


let body = document.querySelector('body');
document.body.appendChild(div);
let body2 = document.getElementsByTagName('body');
body2[0].appendChild(div);//agregar posicion 


//elegir ubi
document.body.insertBefore(p, parrafo3);



const fragment = document.createDocumentFragment();

for (let i=0; i <5;i++) {
    const divs = document.createElement('div');
    divs.textContent = `div número ${i + 1}`;
    divs.classList.add('divFragmento');
    fragment.appendChild(divs);
}

document.body.insertBefore(fragment, parrafo3);

const div2 = document.createElement('div');
div2.innerText = 'nuevo  div';
document.body.appendChild(div2)
div2.id = 'divId';
div2.classList.add('btn','btn-primary'); //también puede ser .remove
/* console.log(div2.hasAttributes()); */
console.log(div2.getAttributeNames());
console.log(div2.getAttribute('id'));
div2.setAttribute('type', 'button');
div2.setAttribute('name','buttonName');
div2.setAttribute('id', 'divIdReplaced');
div2.classList.toggle('btn-success'); //cambiar la clase. alternar 
//console.log(div2.classList.item(0));
// console.log(div2);
/* console.log(div2.innerText);
console.log(div2.outerText);
console.log(div2.innerHTML);
console.log(div2.outerHTML);
console.log(div2.textContent);
console.log(div2.nodeName); */



personas = [
   {nombre: 'Jorge',
    apellido: 'Muñoz',
    clan:'Bezos',
    edad: 26},
    {nombre: 'Sebas',
    apellido: 'Garcìa',
    clan:'Bezos',
    edad: 22},
    {nombre: 'sant',
    apellido: 'Zulu',
    clan:'Bezos',
    edad:23},
    {nombre: 'sebas',
    apellido: 'serna',
    clan:'Bezos',
    edad: 25},
    {nombre: 'juan',
    apellido: 'perez',
    clan:'Bezos',
    edad: 23}
];

/* var tbody = document.querySelector('tbody');

personas.forEach(persona => {
    const fila = document.createElement('tr');

    const nombre = document.createElement('td');
    nombre.textContent = persona.nombre
    fila.appendChild(nombre);

    const apellido = document.createElement('td');
    apellido.textContent = persona.apellido
    fila.appendChild(apellido);

    const clan = document.createElement('td');
    clan.textContent = persona.clan
    fila.appendChild(clan);

    const edad = document.createElement('td');
    edad.textContent = persona.edad
    fila.appendChild(edad);

    tbody.appendChild(fila);
}); */

//VERSION en CLASE

const populateTableBody = (data) => {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');

        Object.values(item).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
}

populateTableBody(personas);


const URLbase = "http://localhost:3000/usuarios";

async function getUsuarios() {
    let response = await fetch(`${URLbase}/usuarios`);
    const dara = response.json();
    console.log(data);
    return data;
}

async function renderUsers() {
    const usuarios = await getUsuarios();
    const populateTableBody = (data) => {
        const tbody = document.getElementById('tbody');
        tbody.innerHTML = '';
    }
}