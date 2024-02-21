function calculate() {
    var budget = parseFloat(document.getElementById('budget').value);
    var country = document.getElementById('country').value;
    var averageCosts = {
        'Україна': 500,
        'Італія': 1500,
        'Таїланд': 1000
    };

    var resultElement = document.getElementById('result');

    if (!isNaN(budget) && country && averageCosts.hasOwnProperty(country)) {
        var averageCost = averageCosts[country];
        if (budget >= averageCost) {
            resultElement.textContent = 'Ви можете собі дозволити подорож до ' + country + '.';
        } else {
            resultElement.textContent = 'На жаль, ваш бюджет недостатній для подорожі до ' + country + '.';
        }
    } else {
        resultElement.textContent = 'Будь ласка, заповніть всі поля.';
    }
}