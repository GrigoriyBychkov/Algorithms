// Вводим число N. Программа выводит – простое ли оно (делится только на 1 и N без остатка)
// (12 – не простое, делится на 2, 3 и 6; 5 - простое)

function isPrime(number) {
    if (number < 1) return false;
    if (number % 2 === 0) return (number === 2);
    if (number % 3 === 0) return (number === 3);
    for (let i = 5; i <= Math.sqrt(number); i += 6) {
        if (number % i === 0) {
            return false;
        }
        if (number % (i + 2) === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(239));
