'use strict';

const showModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

const showModalFun = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

const closeModalFun = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

    for (let i = 0; i < showModal.length; i++) 
        showModal[i].addEventListener('click', showModalFun); // For single statment, we can omit curly braces. REMEMBER !!!!

    overlay.addEventListener('click', closeModalFun);
    closeModal.addEventListener('click', closeModalFun);

document.addEventListener('keydown', function(e){
    console.log(e.key);

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModalFun();
    }
            
})