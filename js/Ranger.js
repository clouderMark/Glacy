function rangeInputChangeEventHandler() {
    let minBtn = document.querySelector('.min');
    let maxBtn = document.querySelector('.max');
    let range_min = document.querySelector('.range_min');
    let range_max = document.querySelector('.range_max');
    let minVal;
    let maxVal;

    minBtn.addEventListener('input', () => {
        minVal = minBtn.value;
        range_min.textContent = minVal;
        minBtn.value = range_min.textContent;
    });

    if (minBtn.value > maxBtn.value - 5) {
        minBtn.value = maxBtn.value - 5;
        range_min.textContent = minBtn.value;
    }

    maxBtn.addEventListener('input', () => {
        maxVal = maxBtn.value;
        range_max.textContent = maxVal;
        maxBtn.value = range_max.textContent;
    });

    if (maxBtn.value - 5 < minBtn.value) {
        maxBtn.value = minBtn.value + 5;
    }
}

let ranges = document.querySelectorAll('input[type="range"]');
for (let range of ranges) {
    range.addEventListener('input', rangeInputChangeEventHandler)
}
