const input = document.querySelector('input')

const bg_color = document.querySelector('body');

bg_color.addEventListener('keypress',function(e){
    const key = e.key;
    if(key=="Enter")
    bg_color.style.backgroundColor=input.value
},false)