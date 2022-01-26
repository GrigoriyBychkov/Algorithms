// Вводим число N. Программа выводит матрицу NxN с числами от 1 до N²
// по спирали начиная с верхнего левого угла.
// Желательно не использовать массивы.
//   Для 3:
// 1 2 3
// 8 9 4
// 7 6 5

// 1 2 3  8 9 4  7 6 5

// 1  2  3  4
// 12 13 14 5
// 11 16 15 6
// 10 9  8  7

// 1  2  3  4  5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9

// 1  2  3  4   12 13 14 5   11 16 15 6   10 9  8  7

function matrix(n) {
    let s = ('    ').repeat(n * n);
    let r = 0;
    let c = -1;
    let reverse = false;
    let reduce = 0;
    let number = (n*n).toString().length + 1;

    for (let i = 1; i <= n*n; i++) {

        if (!reverse) {
            if (c < n - 1 - reduce) {
                c++;
            } else if (r < n - 1 - reduce) {
                r++;
            }
            if (c === n - 1  - reduce && r === n - 1  - reduce) {
                reverse = true;
            }
        } else {
            if (c > reduce) {
                c--;
            } else if (r > 1) {
                r--;
            }
            if (c === 0 + reduce  && r === 1 + reduce) {
                reverse = false;
                reduce += 1;

            }
        }

        let index = r * n * number + c * number;
        let is = i.toString();
        is = (' ').repeat(number - is.length) + is;
        s = s.substr(0, index) + is + s.substr(index + number, s.length);
    }

    for (let i = n; i >= 0; i--) {
        let index = i * number * n;
        s = s.substr(0, index) + '\n' + s.substr(index + 1, s.length);
    }
    console.log(s)
}
matrix(6);
