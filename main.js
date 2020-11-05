/*
milestone 1:
definire un array di oggetti; ogni oggetto
rappresenta un'icona, che è caratterizzata da:
nome, prefisso, tipo e famiglia.

Utilizzando la funzione forEach e il template
literal, visualizzare in pagina tutte le icone con il
proprio nome.
*/

$(document).ready(function(){


    console.log('hello');

    // definire un array di oggetti

    const icons = [
        // ogni oggetto rappresenta un'icona, che è caratterizzata da:nome, prefisso, tipo e famiglia.
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

// Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone
//aggiungere ad ognuna il proprio nome.

icons.forEach( (singleIcon) => {
    console.log(singleIcon.name);
    const {name, prefix, family} = singleIcon;
    // console.log(name);
    $('.icons-container').append(`
    <div>
        <i class="${family} ${prefix}${name}"></i>
        <p>${name}</p>
    </div>
        `);
});

/*
icons.forEach( (singleIcon) => {
    console.log(singleIcon.name);

    $('.icons-container').append(`
    <div>
        <i class="singleIcon.family singleIcon.prefixsingleIcon.name"></i>
        <p>singleIcon.name</p>
    </div>
        `);
});
*/

});
