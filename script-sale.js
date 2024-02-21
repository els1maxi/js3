function calculate() {
    var price = parseFloat(document.getElementById('price').value);
    var discountCode = document.getElementById('discount-code').value;
    var quantity = parseInt(document.getElementById('quantity').value);

    var discountPercentages = {
        'NEWYEAR': 0.2,
        'BLACKFRIDAY': 0.3,
        'SUMMERSALE': 0.15
    };

    var resultElement = document.getElementById('result');

    if (!isNaN(price) && discountCode && quantity > 0) {
        var discountPercentage = discountPercentages.hasOwnProperty(discountCode) ? discountPercentages[discountCode] : 0.05;
        var discountPrice = price * (1 - discountPercentage);
        var totalDiscount = price - discountPrice;

        if (quantity >= 3) {
            discountPrice *= 0.95; // Additional 5% discount for buying 3 or more items
            totalDiscount += price * 0.05;
        }

        if (discountPrice * quantity > 1000) {
            discountPrice *= 0.9; // Additional 10% discount for total purchase over $1000
            totalDiscount += price * 0.1;
        }

        resultElement.innerHTML = 'Кінцева вартість товару: $' + discountPrice.toFixed(2) + '<br>' +
            'Загальна знижка: $' + totalDiscount.toFixed(2);
    } else {
        resultElement.textContent = 'Будь ласка, заповніть всі поля.';
    }
}