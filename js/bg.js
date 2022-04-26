let radios = document.getElementsByName('iceCream');
let val = 1;
for (let radio of radios) {
    radio.addEventListener('click', function () {
        val = radio.value;
        if (val == 1) {
            document.body.style.backgroundImage = "url('/img/iceCream1.png'), url('/img/backLight1.png')"; 
            document.body.style.backgroundColor = "#849d8f";
        }
        if (val == 2) {
            document.body.style.backgroundImage = "url('/img/iceCream2.png'), url('/img/backLight2.png')"; 
            document.body.style.backgroundColor = "#8996a6";
        }
        if (val == 3) {
            document.body.style.backgroundImage = "url('/img/iceCream3.png'), url('/img/backLight3.png')"; 
            document.body.style.backgroundColor = "#9d8b84";
        }
    })
}

