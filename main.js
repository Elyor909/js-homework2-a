var age = +prompt('Введите свой возраст');

if (age < 18) {
    alert('Вы еще молоды, вам нужно учиться');
} else if (age < 50) {
    alert('Вам нужно работать');
} else if (age < 59) {
    alert('Вам скоро на пенсию');
} else if (age < 100) {
    alert('Вы пенсионер');
} else {
    alert('Что-то пошло не так');
}