const hambuger = document.querySelector('.hambuger');
const cancel = document.querySelector('.cancel');
const sideBar = document.querySelector('.side-bar');

hambuger.addEventListener('click', () =>{
    sideBar.style.display = 'block'
    sideBar.style.transition = 'left 1s ease-in-out'
});

cancel.addEventListener('click', () => {
    sideBar.style.display = 'none';
})