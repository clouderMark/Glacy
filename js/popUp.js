let search = document.querySelector('.nav__search');
let popUpSearch = document.querySelector('.modal-search');

let enter = document.querySelector('.nav__link-enter');
let popUpEnter = document.querySelector('.modal-enter');
let form = popUpEnter.querySelector('form'); 
let login = popUpEnter.querySelector('[name=login]');
let password = popUpEnter.querySelector('[name=password]');
let storage = '';
let isStorageSupport = true;


search.addEventListener('click', function(evt){
    evt.preventDefault();
    popUpSearch.classList.toggle('modal-show');
    if (popUpEnter.classList.contains('modal-show')) {
        popUpEnter.classList.remove('modal-show')
    }
})

try {
    storage = localStorage.getItem('login');
} catch (err) {
    isStorageSupport = false;
}

enter.addEventListener('click', function(evt) {
    evt.preventDefault();
    popUpEnter.classList.toggle('modal-show');
    if (popUpSearch.classList.contains('modal-show')) {
        popUpSearch.classList.remove('modal-show')
    }
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
})

form.addEventListener('submit', function(evt) {
    if (!login.value || !password.value){
    evt.preventDefault();
    popUpEnter.classList.remove('modal-error');
    popUpEnter.offsetWidth = popUpEnter.offsetWidth; 
    popUpEnter.classList.add('modal-error');
    } else {
        if(isStorageSupport) {
            localStorage.setItem('login', login.value);
        }
    }

});

window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27) {
        if (popUpSearch.classList.contains('modal-show') || popUpEnter.classList.contains('modal-show')){
            evt.preventDefault();
            popUpSearch.classList.remove('modal-show');
            popUpEnter.classList.remove('modal-show')
        }
    }
});