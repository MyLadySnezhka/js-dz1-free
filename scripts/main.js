let textlink1 = document.querySelector('.content-block1');
let textlink2 = document.querySelector('.content-block2');

let textin1 = document.querySelector('input[name="input-val1"]');
textin1.addEventListener('change', (ev) => {
    let text1 = ev.target.value;
    textlink1.innerHTML = text1;
    // console.log(text1);
})

let textin2 = document.querySelector('input[name="input-val2"]');
textin2.addEventListener('change', (ev) => {
    let text2 = ev.target.value;
    textlink2.innerHTML = text2;
    console.log(text2);
})










