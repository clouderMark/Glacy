let data = [
    {
        title: 'Сливочное с апельстновым джемом и цитрусовой стружкой',
        price: 310,
        imgUrl: 'img/1.jpg',
    },
    {
        title: 'Сливочно кофейное с кусочками шоколада',
        price: 380,
        imgUrl: '/img/2.jpg',
    },
    {
        title: 'Сливочно-клубничное с присыпкой из белого шоколада',
        price: 355,
        imgUrl: '/img/3.jpg',
    },
    {
        title: 'Сливочное крем-брюле с карамельной подливкой',
        price: 415,
        imgUrl: '/img/4.jpg',
    },
    {
        title: 'Сливочное с брусничным джемом',
        price: 325,
        imgUrl: '/img/5.jpg',
    },
    {
        title: 'Сливочно-черничное с цельными ягодами черники',
        price: 410,
        imgUrl: '/img/6.jpg',
    },
    {
        title: 'Сливочно-лимоннное с карамельной присыпкой',
        price: 375,
        imgUrl: '/img/7.jpg',
    },
    {
        title: 'Сливочное с шоколадной стружкой',
        price: 320,
        imgUrl: '/img/8.jpg',
    },
    {
        title: 'Сливочно-ванильное с кусочками шоколада',
        price: 440,
        imgUrl: '/img/9.jpg',
    },
    {
        title: 'Сливочное с ментоловым сиропом',
        price: 435,
        imgUrl: '/img/10.jpg',
    },
    {
        title: 'Сливочное с кусочками черного шоколада',
        price: 355,
        imgUrl: '/img/11.jpg',
    },
    {
        title: 'Сливочное с мятным сиропом',
        price: 420,
        imgUrl: '/img/12.jpg',
    },
];
let template = document.querySelector('#catalog__item');
for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let clone = template.content.cloneNode(true);
    let hitsTitle = clone.querySelector('.hits__title');
    let hitsPrice = clone.querySelector('.hits__price-content');
    let hitsImg = clone.querySelector('.hits__img');
    hitsTitle.textContent = item.title;
    hitsPrice.textContent = item.price;
    hitsImg.src = item.imgUrl;
    template.parentNode.appendChild(clone);
}