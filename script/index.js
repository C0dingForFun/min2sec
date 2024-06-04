let input = document.querySelector('input');
let button = document.querySelector('button');
let span = document.querySelector('span')

function minToSec(min){ //function for converting minutes to seconds
    return  min * 60; 
}

button.addEventListener('click', () =>{
    span.innerText = minToSec(input.value) + ' sec'
})

