import './scss/styles-for-example.scss';

import listIcons from './icons-list.json';


const body = document.querySelector('body');

/* For List Icons */
const divWrap = document.createElement('div');
divWrap.classList.add('wrap');

let i = '';
let div = '';
let span = '';

listIcons.map(value => {

    let nameSvg = value.slice(6, value.length);
    let nameIcons = nameSvg.slice(0, nameSvg.length - 4);
    
    i = document.createElement('i');
    i.classList.add("icon");
    i.classList.add("icon-"+nameIcons);
    
    span = document.createElement('span');
    span.innerText = 'icon icon-'+nameIcons;

    div = document.createElement('div');
    div.classList.add('box-icon');

    div.appendChild(i);
    div.appendChild(span);

    divWrap.appendChild(div)
})
/* End For List Icons */


/* For Example Code */
let exampleName = listIcons[0].slice(6, listIcons[0].length);
let exampleIcons = exampleName.slice(0, exampleName.length - 4);

let boxSample = document.createElement('div');
boxSample.classList.add('box-example');

const textSample1 = document.createElement('span');
textSample1.innerText = 'Contoh penggunaan';

const textSample2 = document.createElement('p');
textSample2.innerText = 'Copy file my-font-icons.css yang berada di dalam folder css, copy folder '+
                        'my-web-fonts & paste keduanya ke dalam folder project anda. '+
                        'Berikut di bawah ini adalah kode untuk '+
                        'cara memanggil font iconsnya';

const spanSample = document.createElement('pre');
spanSample.innerText = '<i class="icon icon-'+exampleIcons+'"></i>';
/* For Example Code */

body.appendChild(divWrap);

boxSample.appendChild(textSample1);
boxSample.appendChild(textSample2);
boxSample.appendChild(spanSample);

body.appendChild(boxSample)