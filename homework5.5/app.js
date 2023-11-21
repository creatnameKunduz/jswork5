function removeDuplicates(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

// Пример использования
var arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
var  arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

console.log(arrayWithoutDuplicates); // Вывод: [1, 2, 3, 4, 5]

//2
function filterAndMapBooks(books) {
  // Фильтруем книги с буквой 'у'
  var booksWithU = books.filter(book => book.toLowerCase().includes('у'));

  // Формируем новый массив с добавлением текста "книга с буквой 'у'"
  var mappedBooks = books.map(book => {
    if (booksWithU.includes(book)) {
      return `${book} - книга с буквой 'у'`;
    } else {
      return book;
    }
  });

  // Выводим результат в консоль
  console.log('Книги с буквой "у":');
  console.log(booksWithU.join('\n'));

  console.log('\nОстальные книги:');
  console.log(mappedBooks.join('\n'));
}

// Пример использования
var bookTitles = [
  'The Hobbit',
  'Harry Potter',
  'Lord of the Rings',
  'The Great Gatsby',
  'To Kill a Mockingbird',
];

filterAndMapBooks(bookTitles);


///3
var users = [
  { name: 'Kunduz', age: 25 },
  { name: 'Zhyldyz', age: 30 },
  { name: 'Erzhan', age: 22 },
  { name: 'Arhat', age: 40 },

];

function findAgeDifference(users) {
  // Нахд.самого молодого пользователя
  var youngestUser = users.reduce((minUser, currentUser) =>
    currentUser.age < minUser.age ? currentUser : minUser
  );

  // Нахд.самого старшего пользователя
  var  oldestUser = users.reduce((maxUser, currentUser) =>
    currentUser.age > maxUser.age ? currentUser : maxUser
  );

  // Нахд.разницу в возрасте
  var ageDifference = Math.abs(oldestUser.age - youngestUser.age);

  // Выв.результат в консоль
  console.log(`Пользователь ${oldestUser.name} старше ${youngestUser.name} на ${ageDifference} лет`);
}

// Пример использования
findAgeDifference(users);


