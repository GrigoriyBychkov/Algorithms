// Вводим знаменатель N от 1 до 9999.
// Программа выводит период дроби 1/N
// (для 1/3 период 3, для 1/2 период 0)

function fractionToDecimal(dev) {

    let res = "";

    let mp = new Map();
    mp.clear();

    let rem = 1;

    while ((rem !== 0) && (!mp.has(rem))) {

        mp.set(rem, res.length);

        rem = rem * 10;

        let part = Math.floor(rem / dev);
        res += part.toString();

        rem = rem % dev;
    }

    if (rem === 0)
        return 0;
    else if (mp.has(rem))
        return res.substr(mp.get(rem));

    return '';
}


console.log(fractionToDecimal(9))
