'use strict'

/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";

function wordCutter(word) {
    let newWord = [];
    for (let i = 0; i < word.length; i++) {
        let num = Math.floor(Math.random() * word.length);
        newWord.push(word[num]);
        word.split(i, 1);
    }
    console.log(newWord);
    // :) 
}
wordCutter(testWord);

/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    let newWordsList = wordsList.map((element) => element.toLowerCase());
    let newWord = targetWord.toLowerCase();
    newWord = normalWord(newWord);
    newWord = newWordsList.includes(newWord);
    console.log(targetWord);
    if (newWord === true) {
        console.log(targetWord + " está contenido en la lista");
    } else {
        console.log(targetWord + " no está contenido en la lista");
    }
    // :)
}

function normalWord(word) {
    return word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

wordSearcherIgnoreCase(testTargetWordA, testWordsList);
wordSearcherIgnoreCase(testTargetWordB, testWordsList);
wordSearcherIgnoreCase(testTargetWordC, testWordsList);


/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan", //7
    "Comandante", //10
    "Teniente", //8
    "Cabo", //4
    "Brigadier", //9
    "Coronel", //7
    "Zar", //3
];

function wordLengthClassifier(wordsList) {
    let longestWord = wordsList[0];
    let shortestWord = wordsList[0];
    let total = 0;
    let promedio = 0;
    let obj = {};
    for (let i = 0; i < wordsList.length; i++) {
        const actualWord = wordsList[i];
        total += actualWord.length;
        promedio = total / wordsList.length
        if (actualWord.length > longestWord.length) {
            longestWord = actualWord;
        }
        if (actualWord.length < shortestWord.length) {
            shortestWord = actualWord
        }
        obj = {
            palabraMasCorta: shortestWord,
            palabraMasLarga: longestWord,
            tamañoPromedio: promedio.toFixed(2),
        };
    }
    console.log(obj);
    // :)
}

wordLengthClassifier(testSampleList);


/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
    let newArray = [];
    let newPalabra = "";
    for (let i = 0; i < word.length; i++) {
        newArray.push(word[i].toLowerCase());
    }
    newArray.reverse();
    for (let j = 0; j < newArray.length; j++) {
        newPalabra += newArray[j];
    }
    if (newPalabra === word.toLowerCase()) {
        console.log(word + " es un palíndromo");
    } else {
        console.log(word + " no es un palíndromo");
    }
    // :)
}

palindromeVerifier(onVerificationWordA);
palindromeVerifier(onVerificationWordB);
palindromeVerifier(onVerificationWordC);
palindromeVerifier(onVerificationWordD);


/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list: ["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}

function lettersCounter(objectContainer) {
    let countVocal = 0;
    let counConsonant = 0;
    let array = [];
    for (let i = 0; i < objectContainer.list.length; i++) {
        const word = objectContainer.list[i];
        for (let j = 0; j < word.length; j++) {
            const wordNew = word[j]
            if (wordNew.toLowerCase() === "a" || wordNew.toLowerCase() === "e" || wordNew.toLowerCase() === "i" ||
                wordNew.toLowerCase() === "o" || wordNew.toLowerCase() === "u") {
                countVocal++;
            } else {
                counConsonant++;
            }
        }
    }
    array.push(countVocal);
    array.push(counConsonant);
    console.log(array);
    // :)
}

lettersCounter(containerTestObject);

/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿", "cómo", "estás", "?"];
let wordArrayB = ["te", "ves", "igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    let sumArray = [...listA, ...listB];
    console.log(sumArray);
    // :)
}
arrayJoiner(wordArrayA, wordArrayB);

/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana", "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
    wordToExplore = wordToExplore.replace(/[^\w]/g, '').toLowerCase()
    listOfWords = listOfWords.replace(/[^\w]/g, '').toLowerCase()

    for (let i = 0; i < listOfWords.length; i++) {
        const palabra = listOfWords[i];
        if (wordToExplore.length !== palabra.length) {
            return false
        }
    }


    let list = list.split("")

    for (let char of wordToExplore) {
        if (!list.includes(char)) {
            return false
            break;
        } else {
            list.splice(list.indexOf(char), 1)
        }
    }

    return true

}

// :)

anagramVerifier(testWordToExplore, wordsToVerify);

/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA: ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB: ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    let nuevaLista = objectMultiContainer.listA.concat(objectMultiContainer.listB);

    for (let i = 0; i < nuevaLista.length; i++) {
        const palabra = nuevaLista[i];
        let nuevaPalabra = normalWord(palabra);
        nuevaLista.push(nuevaPalabra);
    }

    for (let i = 0; i < nuevaLista.length; i++) {
        const palabras = nuevaLista[i];
        console.log(palabras);
        for (let j = 0; j < palabras.length; j++) {
            const letter = palabras[j];
            console.log(letter);
            if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' ||
                letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') {
                palabras.split(j, 1);
            }
        }
        // :)
    }
    console.log(nuevaLista);
}

console.log(vocalsRemoverFromObject(testObjMultiContainer));

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    let countVocal = 0
    for (let i = 0; i < words.length; i++) {
        const palabra = words[i];
        for (let j = palabra.length - 1; j > -1; j--) {
            const letter = palabra[j];

            if (letter === 'a' || letter === 'e' || letter === 'i' ||
                letter === 'o' || letter === 'u') {
                countVocal++;
            }
            if (countVocal === 1) {
                console.log(countVocal);
                letter.replace(j, "x");
            }
        }
    }
    console.log(words);
    // :)
}

lastVocalReplacer(someWordsToTest);


/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor", "firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    let newArray = [];
    let nuevaPalabra;
    for (let i = 0; i < listA.length; i++) {
        nuevaPalabra = listA[i];
        for (let j = nuevaPalabra.length - 1; j >= 0; j--) {
            const letter = nuevaPalabra[j];
            newArray.push(letter);
        }
    }

    console.log(newArray);
    // :)
}

doubleListVerifier(testListA, testListB);