let letters = new Array('a','b','c','d','e');
console.log(letters);
letters = new Array(5); //crea el array vacío 
console.log(letters);

const number = [1,2,3,4,5,6,7,8];
console.log(number[1]); //indicar indice
console.log(number.at(1)); //igual al anterior 

const props = ["a",2, true];//array con varios tipos de datos
/* props.forEach( prop => { //mostrar cada elemento
    console.log(prop);
})
 */


//MUTAR ARRAY ORIGINAL

//push agregar en ultima posicion. pop quita al final del array.
//unshift añade al incio del arreglo. shift quita al incio del arreglo.

props.push('b');
console.log(props);
props.pop();
console.log(props);
props.unshift(2);
console.log(props);
props.shift();
console.log(props);

//OBJ A ARRAY
const text = "abc";
let otroLetter = text.split('');
let letters2 = Array.from(text)
console.log(otroLetter);
console.log(letters2);

//spread
let letters3 = [...text];
console.log(letters3);

const textNumbers = "12345";
/* const numeros = Array.from(textNumbers, (numero) => Number(numero));
console.log(numeros);
 */

let numeroRef=[];
/* const numeros = [...textNumbers].forEach(numero => {
    const number = Number(numero);
    numeroRef.push(number);
});
console.log(numeroRef); */

const numeros2 = [...textNumbers].map((numero) => Number(numero));
console.log(numeros2);

//JOIN para unir
//sort ordenar
//reverse al reves
const text2 = "abc";
console.log(text2.split(''));
console.log(text2.split('').join(''));
console.log(text2.split('').reverse().join(''));
console.log(text2.split('').sort().join(''));
console.log(text2.split('').reverse().join(''));

//CONCAT

let array1 = [6, 7,8,9,10];
let array2 = [11,12,13,14,15,6];
let newArray = numeros2.concat(array1,array2);
console.log(newArray);
console.log(newArray.indexOf(6));
console.log(newArray.lastIndexOf(6));

const names = [
    {name:'Sebas',age:26},
    {name:'jorge',age:26},
    {name:'pdro',age:29},
    {name:'hipo',age:34},
    {name:'potamo',age:16},
    {name:'omato',age:26},
    {name:'popi',age:66},
    {name:'marta',age:46},
];

const findElement = (array, searchedAge) => {
    ageFound = 0;
    array.forEach(element => {
        if (element.age === searchedAge) {
        ageFound = element;
        return;
        }
    });
    return ageFound;
};
/*     return array.find(element => element.age === searchedAge);
}; */


    /* for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.age === searchedAge) return element;
    } */
/*     return null;
} */

console.log(findElement(names,26));

const elements = ["a", "b", "c", "d", "e","f"];
console.log(elements);
elements.reverse(); //modifica el arreglo original
console.log(elements);

const reversedElements = elements.toReversed(); //crea un nuevo arreglo y no modifica el orginal
console.log(elements);
console.log(reversedElements);

const nombres = ["pilar","alberto","pedro","juan","ana","santiago","zoe","yinyon"];
console.log(nombres);
console.log(nombres.sort()); //ordena alfabeticamente y modifica al orginal

const sortedNombres = nombres.toSorted(); //ordena alfabeticamente creando una nueva variable
console.log(sortedNombres);

const prueba = "holi";
const toCapitalCase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(toCapitalCase(prueba));

let numerosPositivos = [-2,1,2,3,4,5];
let numString;
let num;
let todosPositivos = numerosPositivos
    .every(number => number >= 0); //Determina si todos los elementos en el array satisfacen una condición
console.log(todosPositivos); //bool

let unoNeg = numerosPositivos
    .some(number => number < 0); //si al menos uno de los elementos cumplen una condicion
console.log(unoNeg); //bool

const arr1 = [0,1,2,[3,[4,5]]];
console.log(arr1);
console.log(arr1.flat()); //crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
console.log(arr1.flat(2));

let numeros = [1,2,3,4,5];
let resultado = numeros.flatMap(numero => { //primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. Es idéntico a un map seguido de un flattende profundidad 1
    return [numero, numero*2];
});
console.log(resultado);


let usuarios = [
    {id: 1,
    nombre: 'Jorge',
    hobby: 'Estudiar'},
    {id: 2,
    nombre: 'Sebas',
    hobby: 'Aventuras'},
    {id: 3,
    nombre: 'Pedro',
    hobby: 'Senderismo'},
    {id: 4,
    nombre: 'Sebas',
    hobby: 'Cocinar'},
];

let usuarioId = usuarios.find( usuario => { //devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
    //el primero que encuentra de izq a derecha
    return usuario.id === 2;
});

console.log(usuarioId);


let usuarioId2 = usuarios.findLast( usuario => {
    return usuario.nombre === 'Sebas'
});

console.log(usuarioId2);



let buscarUsuarioNombre = usuarios.find( usuario => {
    return usuario.nombre === 'Jorge';
});

console.log(buscarUsuarioNombre);


let buscarUsuarioNombre2 = nombre => {
    return usuarios.find( usuario => {
        return usuario.nombre === nombre;
    });
};
//no tiene dependencias externas, solo poner el paámetro
 
console.log(buscarUsuarioNombre2('Jorge'));
console.log(buscarUsuarioNombre2('Sebas'));
console.log(buscarUsuarioNombre2('Pedro'));


let buscarIdPorNombre = nombre => {
    return usuarios.findIndex(usuario => {
        return usuario.nombre === nombre;
    });
};

console.log(buscarUsuarioNombre2('Jorge'));
console.log(buscarIdPorNombre('Sebas'));


//uso de reduce

let palabras = ['hola', 'mundo', 'javascript', 'hola', 'mundo','javascript', 'hola','Python'];
let frecuenciaPalabras = palabras
    .reduce((acumulador, palabra) =>{//acumulador es el objeto
        if (palabra in acumulador) acumulador[palabra]++;
        else acumulador[palabra] = 1;
        return acumulador;
    }, {})//valor inicial un objeto vacio;

console.log(frecuenciaPalabras);


let numbers = [1,2,6,54,3,8,5];

console.log(numbers.reduce((first,second) => first-second));//de izq a derecha
console.log(numbers.reduceRight((first,second) => first-second)); //derecha a izq


//destructuracion de arrays

const elementos = [5,4,3,2]
console.log(elementos);
const [first,second,third] = elementos; //destructuracion. sacar valores del array y crear nuevos valores
console.log(first);
console.log(second);
console.log(third);


let a = 5;
let b = 10;
console.log('antes de intercambio');
console.log('a: '+ a);
console.log('b: '+ b);

[a,b] = [b,a]
console.log('despues de intercambio');
console.log('a: '+ a);
console.log('b: '+ b);



function obtenerCoordenadas () {
    return [43.33, -76.656];
};

console.log(obtenerCoordenadas());
let coordenadas = obtenerCoordenadas();
let latitud1 = coordenadas[0];
let longitud1 = coordenadas[1];
console.log(coordenadas);
console.log(latitud1);
console.log(longitud1);

let [latitud, longitud] = obtenerCoordenadas();
console.log(latitud,longitud);



const debug = (...param) => console.log(param);
debug(1,2,3,4,5,45,4,4,4,5);




//-------------DOM------------------------

