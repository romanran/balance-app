/* eslint-env node */

const fs = require('fs');

const config = {
    monthsToGenerate: 12,
    dateMin: new Date(2022, 8, 23),
    dateMax: new Date(2023, 8, 23),
    minAmount: -2000, maxAmount: 6000
}

const transactions = [];

function getRandomFloat(min, max) {
    const randomFloat = (Math.random() * (max - min) + min).toFixed(2)
    return parseFloat(randomFloat)
}

function getRandomDate(from, to) {
    return new Date(
        from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
}

function getTransaction(dateMin, dateMax, minAmount, maxAmount) {
    return {
        date: getRandomDate(dateMin, dateMax),
        amount: getRandomFloat(minAmount, maxAmount)
    }
}

function writeTransactionsfile(transactions) {
    fs.writeFileSync(`${__dirname}/src/data/transactions.json`, JSON.stringify(transactions))
}

for (let monthIndex = 0; monthIndex < config.monthsToGenerate; monthIndex++) {
    transactions.push(getTransaction(config.dateMin, config.dateMax, config.minAmount, config.maxAmount))
}
transactions.sort((transaction1, transaction2) => {
    return transaction1.date - transaction2.date
})

writeTransactionsfile(transactions)