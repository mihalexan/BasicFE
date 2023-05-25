//1. Дайте ответ на вопрос, что такое объект в JS. Это неупорядоченный массив с ключевым значением.
//функция это некая самостоятельная часть кода благодаря которой повышается читабельность.
//2. Напишите функцию, которая принимает товары (массив объектов) и возвращает строку 'Самый дорогой товар <НАЗВАНИЕ> стоит  EUR'.
function findTheMostExpensiveItem(ArrayObjects) {
    let maxPrice = 0;
    let maxTitle = "";
    for (let i = 0; i < ArrayObjects.length; i++) {
        if (ArrayObjects[i].price > maxPrice) {
            maxPrice = ArrayObjects[i].price;
            maxTitle = ArrayObjects[i].title;
        }
    } 
    return `Самый дорогой товар ${maxTitle} стоит ${maxPrice} EUR`;
}
//3. Напишите функцию, которая принимает товары (массив объектов) и возвращает их общую сумму (скаляр).
function Summator(ArrayObjects) {
    let sum = 0;
    for (let i = 0; i < ArrayObjects.length; i++) {
        sum += ArrayObjects[i].price;
}
return sum;
}