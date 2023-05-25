//1. Написать функцию, которая получает один аргумент (массив целых чисел) и возвращает сумму положительных элементов.
function ArrayOfIntegers(someArray) {
    let sum = 0;
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i] > 0) {
            sum += someArray[i];
        }
    }
    return
}
//Написать функцию, которая получает один аргумент (массив целых чисел) и наибольшее число из массива.
function LargestNumber(someArray) {
    let number = 0;
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i] > number) {
            number = someArray[i];
        }
    }
    return number;
}
//Написать функцию, которая вычисляет площадь окружности.
function AreaOfACircle(radius) {
    return Math.PI * radius ** 2;
}