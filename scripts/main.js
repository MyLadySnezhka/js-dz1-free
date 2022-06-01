let textlink1 = document.querySelector('.content-block1');
let textlink2 = document.querySelector('.content-block2');
let textlink3 = document.querySelector('.content-block3');

let textin1 = document.querySelector('input[name="input-val1"]');
textin1.addEventListener('change', (ev) => {
    let text1 = ev.target.value;
    textlink1.innerHTML = text1;
    // console.log(text1);
})

let textin2 = document.querySelector('input[name="input-val2"]');
textin2.addEventListener('click', (ev) => {
    let text2 = ev.target.value;
    textlink2.innerHTML = text2;
    //console.log(text2);
})

let textin3 = document.querySelector('input[name="input-val3"]');
let button = document.querySelector('.button');

button.addEventListener('click', (ev) => {

        let text3 = textin3.value;
//        console.log(text3);
        textlink3.innerHTML = text3;
    
})








