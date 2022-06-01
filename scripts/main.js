let textout = document.querySelector('.content-block');

let textin = document.querySelector('input[name="input-val"]');
textin.addEventListener('change', (ev) => {
    let text = ev.target.value;
    textout.innerHTML = text;
    console.log(text);
    
})







