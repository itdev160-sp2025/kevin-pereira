var user = 'Kevin';
var salulation = 'Hello, '
var greeting = salulation + user + ' Here are the latest Gaming chairs reviews.'
var greetingEl = document.getElementById('greeting')

greetingEl.textContent = greeting;


var price = 150,
    studentDiscount = .15,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

    priceEl.textContent = price.toFixed(2);
    studentPriceEl.textContent = studentPrice.toFixed(2);