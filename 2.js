// Вводим число N от 1 до 8999. Программа выводит его представление римскими цифрами (12=XII, 20=XX)
// Для памятки:
// 1 I
// 5 V
// 10 X
// 50 L
// 100 C
// 500 D
// 1000 M
function intToRoman(x) {
    if (x > 8999 || x < 1) {
        return false
    }
    let result = '';
    let romanMap = {
        M: 1000,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }

    for (let i in romanMap) {
        while (x >= romanMap[i]) {
            result += i;
            x -=  romanMap[i];
        }
    }
    return result;
}

// intToRoman(8999);
