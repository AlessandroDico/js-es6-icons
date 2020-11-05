/*
milestone 1:
definire un array di oggetti; ogni oggetto
rappresenta un'icona, che è caratterizzata da:
nome, prefisso, tipo e famiglia.

Utilizzando la funzione forEach e il template
literal, visualizzare in pagina tutte le icone con il
proprio nome.
*/

/*
milestone 2:
definire un array di colori e associare ad ogni
tipo di icona un colore.
Visualizzare le icone di colore diverso in base al
tipo.
*/

/*
milestone 3:
aggiungere una select per filtrare le icone in base al tipo.
//AGGIUNGERE IN HTML UNA SELECT CON DELLE OPTIONS

Popolare le options della select dinamicamente
//VUOL DIRE AGGIUNGERE LE OPTIONS DAL JS E NON IN HTML

ogni volta che cambia il valore selezionato,
visualizzare le icone corrispondenti.
*/

$(document).ready(function(){


    // console.log('hello');

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

// --------------------------SPOSTATO PIU' IN BASSO PER 'LEGGERE' I COLORI---- ---------------
// icons.forEach( (singleIcon) => {
//     // console.log(singleIcon.name);
//     const {name, prefix, family} = singleIcon;
//     // console.log(name);
//     $('.icons-container').append(`
//     <div class="single-icon-container">
//         <i class="${family} ${prefix}${name}" style="color:${colorPosition}"></i>
//         <p>${name}</p>
//     </div>
//         `);
// });
// --------------------------SPOSTATO PIU' IN BASSO PER 'LEGGERE' I COLORI---- ---------------







// definire un array di colori
//un colore per ogni tipo di icona
const iconsColors = ['green', 'orange', 'purple'];

// associare ad ogni tipo di icona un colore.
//devo ricavarmi i tipi di icona
//dovro' ciclare l'array di oggetti ed estrarre solo i tipi
//per estrarre una sola volta ogni tipo posso fare un array e pushare dentro ogi volta che c'è un tipo nuovo
const iconsType = [];

icons.forEach((item) => {
    // console.log(item.type);
    if (!iconsType.includes(item.type)) {
        iconsType.push(item.type);
        // Popolare le options della select dinamicamente
        //lo faccio qua per avere solo tre type all'interno del select
        $('.select').append(`
        <option class="option">${item.type}</option>
        `);
    }
});

console.log(iconsType);

// ogni volta che cambia il valore selezionato visualizzare le icone corrispondenti.
// quindi quando seleziono es. il tipo animali dovro' vedere solo gli animali
//questo non si fa con il click ma con un altra funzione change
// quando seleziono un type dovro' cancellare tutte le icone dalla pagina e visualizzare solo quelle del type selezionato
//per togliere le icone dalla pagina basta che svuoto .empty() il container delle icone
//poi dovro' aggiungere quelle del type giusto... come?

$('.select').change(() => {
    console.log('funziona');
    $('.single-icon-container').empty();
});





//dato che i tipi sono tre e i colori sono tre ed entrambi sono dentro a degli array trovero' la corrispondenza tramite index
// attenzione.. il collegamento item/colore va fatto dentro il ciclo che poi dara' il colore in pagina alle icone

icons.forEach( (singleIcon) => {
    const {name, prefix, family} = singleIcon;

        const typePosition = iconsType.indexOf(singleIcon.type);
        // console.log(typePosition);

        colorPosition = iconsColors[typePosition];
        // console.log(colorPosition);

    // console.log(singleIcon.name);
    // console.log(name);

    $('.icons-container').append(`
    <div class="single-icon-container">
        <i class="${family} ${prefix}${name}" style="color:${colorPosition}"></i>
        <p>${name}</p>
    </div>
        `);




        // console.log(singleIcon.name);

        // $('.icons-container').append(`
        // <div class="single-icon-container">
        //     <i class="${singleIcon.family} ${singleIcon.prefix}${singleIcon.name}" style="color:${colorPosition}"></i>
        //     <p>${singleIcon.name}</p>
        // </div>
        //     `);

});












});
