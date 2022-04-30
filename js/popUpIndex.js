let btnSupport = document.querySelector('.btn-address');
let popUpSupport = document.querySelector('.modal-support');
let close = popUpSupport.querySelector('.modal-close');
let loginSupport = popUpSupport.querySelector('[name=login-support]');
let userName = popUpSupport.querySelector('[name=userName]');
let overlay = document.querySelector('.overlay');

let mailing = document.querySelector('[name=mailing]');

if(storage) {
    mailing.value = storage;
}

btnSupport.addEventListener('click', function(evt) {
    evt.preventDefault();
    popUpSupport.classList.add('modal-show');
    overlay.classList.remove('visually-hidden');
    userName.focus();
    if (storage) {
        loginSupport.value = storage;
    } 
})

close.addEventListener('click', function(evt){
    evt.preventDefault();
    popUpSupport.classList.remove('modal-show');
    overlay.classList.add('visually-hidden');
})

window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27) {
        if (popUpSupport.classList.contains('modal-show')){
            evt.preventDefault();
            popUpSupport.classList.remove('modal-show');
            overlay.classList.add('visually-hidden');
        }
    }
});