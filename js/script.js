    "use strict";

    /* Задание на урок 1:

    1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
    'Сколько фильмов вы уже посмотрели?'

    2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

    3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
    Ответы стоит поместить в отдельные переменные
    Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

    Проверить, чтобы все работало без ошибок в консоли */


    /* Задание на урок 2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


/* Задание на урок 3:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

/* Задание на урок 4:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


    const personalMovieBD = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieBD.count = +prompt('How many films are you watched?').trim();

        while (personalMovieBD.count === '' || personalMovieBD.count === null || isNaN(personalMovieBD.count)) {
            personalMovieBD.count = +prompt('How many films are you watched?');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('What film are you watched last time?'),
                  rateFilm = prompt('How much do you rate it?');
        
        if (lastFilm !== '' && rateFilm !== '' && lastFilm !== null && rateFilm !== null && lastFilm.length < 50) {
            personalMovieBD.movies[lastFilm] = rateFilm;
        } else {
            i--;
        }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieBD.count < 10) {
            console.log('Quite a few films have been viewed');
        } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
            console.log('You are classic watcher');
        } else if (personalMovieBD.count >= 30){
            console.log('You are film fan');
        } else {
            console.log('An error has occurred');
        }
        },
        showMyDB: function(hidden) {
            if (!hidden) {
                console.log(personalMovieBD);
            }
        },
        toggleVisibleMyDB: function() {
            personalMovieBD.privat === true? personalMovieBD.privat = false : personalMovieBD.privat = true;
        },
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {
            let genre = prompt(`What is your favorite genre number ${i}`);

            if (genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieBD.genres[i - 1] = genre;
            }
    }
            personalMovieBD.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
}
};



















/* 
let i = 0;

 while (i < 2) {
    const lastFilm = prompt('What film are you watched last time?'),
          rateFilm = prompt('How much do you rate it?');
          i++;
 }
*/     
 



// pyramid from stars
// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);



            











    





