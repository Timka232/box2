const box = document.querySelectorAll('.box');

box.forEach(item => {
    item.addEventListener('click', () => {
        if(item.style.background == 'purple'){
            item.style.background = 'pink';
            item.style.borderRadius = '50%';
        }else{
            item.style.background = 'purple';
            item.style.borderRadius = '0%';
        }
    })
})