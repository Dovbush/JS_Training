/*

  Регулярные выражения - это шаблоны используемые для сопоставления последовательностей символов в строках.
  https://regexr.com/
  https://regexper.com/
  https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp  

*/

/*
  Регулярное выражение создается:
  - выделением слешами /yourRegExp/gim
  - через конструктор: new RegExp( regExpString, regExpFlags )
*/

/*
  Флаги RegExp которые поддерживает JS:

  -g = global (Глобальный поиск по строке)
  -i = case insensitive (Поиск не зависит от реестра буквы: А\а)
  -m = multiline
*/

/*

  Примеры регулярных выражений:

  [] - группа символов
  [^] - группа символов кроме
  [A-Z] - все загланвые буквы
  [a-z] - все строчные буквы
  [a-zA-Z] - все строчные и заглавные буквы
  [0-9] - все цифры от 0-9
  \d -  все цифры от 0-9
  \D - все кроме цифр
  \w - все, что является буквой или цифрой
  \W - все, что не является буквой или цифрой
  \s - пробел
  \S - все что не является пробелом

  \b - граница слова |myWord|
      /\ban\b/g - найти все слова an
  \B - не граница слова
      /\Ban\B - найти an которое не стоит в начале и в конце.
      
  | - Условие "или" в regExp
      /\Bab|an\B - найти an которое не стоит в начале или в конце.

      gray|grey - найти слова gray или grey
      gr(a|e)y - тоже самое что и выше

  тот же пример со словом center:
      center | centre
      cent(er|re)

  . - любой символ
  \. - найти точку, так же подходит для любых зарезервированых символов в regExp
      - /\[\w+\]/g -> найти слово в квадратных кавычках
      - /\.gif/ -> найти .gif

  {4} - количство посторений выражения
      .{4} - любых 4 символа
      .{2,6} - от двух до шести любых символов
      .{2,} - любые 2

  ? - исключает символ перед ним
  color / colour ->
      /colou?r/

  Жадные и не жадные повторения
  - по умолчению все поторения жадные.
    /a.{2,10}e/ -> pl>[aceholde]r re]peat<
  - не жадное повторение%
    /a.{2,10}?e/ -> pl>[aceholde]r repeat<

    /a.{1,}?e/ -> найдет все повторения a-e в тексте с любым количество символов между ними, где есть хоть 1 символ между ними
    /a.+?e/ -> тоже что и пример выше
  + - все повторения, больше или равно 1
  * - все повторения, больше или равно 0

  lockhead  -> дополнительное выражение после основного которое не будет включено в результат
  (?=exp)
      /and(?=\she)/ -> найдет все and после которых идет " he";
  (?!exp)->
      /and(?! he)/ -> найдет все and после которых НЕ идет " he";
  Group:
    Групируем результат на группы кажый из которых можно найти отдельно.
    (\b\w*)@(\w+\.\w+\b) -> найдет выражение и разобьет его на 2 группы пр символу ()
      каждую из которых можно получить отдельно
*/

  // var string = "Hello my name is Jack and my email is JackSurname@gmail.com";
  /*
    string.match(regExp); -> вернет все совпадения по выражению
  */

  // var pattern = /\w+/g; // все слова
  // var result = string.match(pattern);
  // console.log( result );

  /*
    string.search("regExp"); -> вернет index первого совпадения или -1 если ничего не найдено
  */
  // var result = string.search(/Jack/);
  // console.log(result);

  /*
    string.split(regExp); ->
  */

  //var string = "Hello,                 my name is       Jack and my     email is JackSurname@gmail.com";
  //var result = string.split(" ");
  // var result = string.split(/\s+/); // Разбить строку по разделителю пробел который повторяется 1 и более раз
  // console.log(result);

  /*
    string.replace(regExp, string);
  */
  // console.log(string);
  // console.log( string.replace(/(\w+)@(\w+.)(\w+)/, "Invalid link") );


  // для практики и закрепления регулярок
  // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#regular-expressions