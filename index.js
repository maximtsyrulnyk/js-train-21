/*
 * Клас: Musician
 * Статичні поля:
 * ------------------------
 * | Поле   |  Значення   |
 * |--------|-------------|
 * | count  |  0          |
 *
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Тип                |
 * |--------------|---------------------|
 * | #name        |  String             |
 * | #instrument  |  String             |
 *
 * Гетери:
 * ---------------------
 * | Гетер    |  Повертає |
 * |----------|-----------|
 * | name     |  string   |
 * | instrument | string  |
 *
 * Методи:
 * --------------------------
 * | Метод   |  Дія         |
 * |---------|--------------|
 * | play()  | Виводить рядок в консоль |
 */

class Musician {
  static count = 0; // статичне поле count, яке відслідковує кількість музикантів, початкове значення 0
  // Об'являємо приватні поля #name; #instrument;
  #name; // Приватне поле для імені музиканта
  #instrument; // Приватне поле для інструменту музиканта

  constructor(name, instrument) {
    // Конструктор приймає два параметри: name та instrument
    this.#name = name; // присвоєння вхідного значення name до приватного поля #name
    this.#instrument = instrument; // присвоєння вхідного значення instrument до приватного поля #instrument
    Musician.count++; // збільшення значення статичного поля на 1
  }

  get name() {
    // гетер для приватного поля #name
    return this.#name; // повертає значення приватного поля #name
  }

  get instrument() {
    // гетер для приватного поля #instrument
    return this.#instrument; // повертає значення приватного поля #instrument
  }

  set name(newName) {
    // сетер для приватного поля #name
    this.#name = newName; // присвоює нове значення приватному полю #name
  }

  set instrument(newInstrument) {
    // сетер для приватного поля #instrument
    this.#instrument = newInstrument; // присвоює нове значення приватному полю #instrument
  }

  play() {
    console.log(`${this.#name} грає на ${this.#instrument}`); // метод, що виводить рядок в консоль <#name> грає на <#instrument>
  }
}
// Приклад використання класу Musician
const musician1 = new Musician('John', 'гітара');
const musician2 = new Musician('Alice', 'фортепіано');

musician1.play(); // Виведе: John грає на гітарі
musician2.play(); // Виведе: Alice грає на фортепіано

console.log(Musician.count); // Виведе: 2, тобто кількість створених музикантів

/*
 * Клас: Guitarist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Guitarist extends Musician {
  #band; // Об'являємо приватні поля #band;
  // Конструктор приймає три параметри: name, instrument та band
  constructor(name, instrument, band) {
    super(name, instrument); // виклик конструктора батьківського класу super з двома параметрами name, instrument
    this.#band = band;   // присвоєння вхідного значення band до приватного поля #band
  }
  get band() {// гетер для приватного поля #band
    return this.#band; // повертає значення приватного поля #band
  }
  set band(newBand) {// сетер для приватного поля #band
    this.#band = newBand; // присвоює нове значення приватному полю #band
  }
    // метод joinBand, що змінює значення #band, this.#band = band
    joinBand(newBand) {
    this.#band = newBand; // Метод для зміни значення групи
  }
    // перевизначений метод play(), що виводить рядок в консоль ${super.name} грає на ${super.instrument} в групі ${this.#band}
    play() {
    console.log(`${super.name} грає на ${super.instrument} в групі ${this.#band}`); // Перевизначений метод play
  }
}
// Приклад використання класу Guitarist
const guitarist1 = new Guitarist('Mike', 'гітара', 'Rock Band');

console.log(guitarist1.name); // Виведе: Mike
console.log(guitarist1.instrument); // Виведе: гітара
console.log(guitarist1.band); // Виведе: Rock Band

guitarist1.play(); // Виведе: Mike грає на гітарі в групі Rock Band

guitarist1.joinBand('Jazz Ensemble');
console.log(guitarist1.band); // Виведе: Jazz Ensemble

guitarist1.play(); // Виведе: Mike грає на гітарі в групі Jazz Ensemble

/*
 * Клас: Bassist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */
// Додаємо сетер для властивості 'band' до класу Musician
Object.defineProperty(Musician.prototype, 'band', {
  set: function(newBand) {
    this.band = newBand; // Встановлюємо нове значення приватного поля #band
  }
});
class Bassist extends Musician {
  #band; // Об'являємо приватні поля  #band;
  constructor(name, instrument, band) {   // Конструктор приймає три параметри: name, instrument та band
    super(name, instrument);   // виклик конструктора батьківського класу super з двома параметрами name, instrument
    this.#band = band; // присвоєння вхідного значення band до приватного поля #band
  }
  get band() {// гетер для приватного поля #band
    return this.#band; // повертає значення приватного поля #band
  }
  set band(newBand) {// сетер для приватного поля #band
    this.#band = newBand;  // присвоює нове значення приватному полю #band
  }
  joinBand(newBand) {
    this.#band = newBand; // метод joinBand, що змінює значення #band,this.#band = band
  }
  // перевизначений метод play(), що виводить рядок в консоль ${super.name} грає на ${super.instrument} в групі ${this.#band}
  play() {
    console.log(`${super.name} грає на ${super.instrument} в групі ${this.#band}`); 
  }
}
// Приклад використання класу Bassist
const bassist1 = new Bassist('David', 'бас-гітара', 'Rock Band');

console.log(bassist1.name); // Виведе: David
console.log(bassist1.instrument); // Виведе: бас-гітара
console.log(bassist1.band); // Виведе: Rock Band

bassist1.play(); // Виведе: David грає на бас-гітарі в групі Rock Band

bassist.joinBand('Jazz Ensemble');
console.log(bassist.band); // Виведе: Jazz Ensemble

bassist.play(); // Виведе: David грає на бас-гітарі в групі Jazz Ensemble

// Тут ми використовуємо Object.defineProperty(), щоб додати сетер band до класу Musician після його створення.
// Перший аргумент - це об'єкт, до якого ми хочемо додати властивість. У цьому випадку це Musician.prototype,
// тому що ми хочемо додати сетер до всіх екземплярів класу Musician.
// Другий аргумент - це ім'я властивості, яку ми хочемо додати. У цьому випадку це 'band'.
// Третій аргумент - це об'єкт, який описує властивість. У цьому випадку ми хочемо додати сетер,
// тому ми вказуємо функцію, яка буде викликатися при спробі встановити властивість 'band'.  this.band = newBand

/*
 * Клас: Band
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | members     |  array     |
 */

class Band {
    // Об'являємо приватні поля #name; #members;
  #name;
  #members;
  /*
  
   * Створюємо конструктор з двома вхідними параметрами: #name і #members
   * #members - це масив об'єктів, що є екземплярами класу Musician або його нащадків
   */
  constructor(name, members = []) { // Створюємо конструктор з двома вхідними параметрами: #name і #members
    this.#name = name; // Присвоєння вхідного значення назви гурту до приватного поля #name
    this.#members = members; // #members - це масив об'єктів, що є екземплярами класу Musician або його нащадків
  }
  // Створюємо getter для #name, що повертає приватну властивість #name
  get name() {
    return this.#name; 
  }
  // Створюємо getter для #members, що повертає приватну властивість #members
  get members() {
    return this.#members; 
  }
  // Створюємо сетер для #name
  set name(newName) {
    this.#name = newName; // Сеттер для оновлення назви гурту
  }
  // Створюємо метод addMember(), що додає нового учасника до гурту
  addMember(newMember) {
      // Перевіряємо чи Musician є прототипом newMember
      if (newMember instanceof Musician) {
        if (!this.#members.includes(newMember)) {
          this.#members.push(newMember); // Ось тут ми використовуємо сетер band класу Musician

        } else {
          console.log("Цей учасник вже є в гурті");
        }
      // До приватного поля #members яке є масивом додаємо мового музиканта   
    } 
      // Якщо ні виводимо в консоль повідомлення Новий учасник повинен бути екземпляром класу Musician
    // Створюємо метод playMusic(), за допомогою forEach перебираємо масив і викликаємо метод play() для кожного учасника гурту

    else {
      console.log("Новий учасник повинен бути екземпляром класу Musician");
    }
  }
  removeMember(memberToRemove) {
    const index = this.#members.indexOf(memberToRemove);
    if (index !== -1) {
      this.#members.splice(index, 1);
      console.log(`${memberToRemove.name} був видалений з гурту`);
    } else {
      console.log("Даний учасник не є членом гурту");
    }
  }
  findMemberByName(name) {
    const foundMembers = this.#members.filter(member => member.name === name);
    return foundMembers.length > 0 ? foundMembers[0] : null;
  }
  playMusic() {
    this.#members.forEach(member => member.play()); // Виклик методу play() для кожного учасника гурту
  }
  
}

/*
 * Клас: Performance
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 */
class Performance {
  // Об'являємо приватні поля #band; #location; #date;
  #band;
  #location;
  #date; 
  // Створюємо конструктор з трьома вхідними параметрами: #band, #location та #date
  constructor(band, location, date) {
    this.#band = band;
    this.#location = location;
    this.#date = date;
  }
  // Створюємо getter для #band, що повертає приватну властивість #band
  get band() {
    return this.#band;
  }
  // Створюємо getter для #location, що повертає приватну властивість #location
  get location() {
    return this.#location;
  }
  // Створюємо getter для #date, що повертає приватну властивість #date
  get date() {
    return this.#date;
  }
  // Визначаємо метод info(), що виводить рядок в консоль `Гурт ${this.#band.name} виступить в ${this.#location} ${this.#date.toLocaleDateString()}`
  info() {
    return `Гурт ${this.#band.name} виступить в ${this.#location} ${this.#date.toLocaleDateString()}`;
  }
}

/*
 * Клас: Concert
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 * | ticketPrice |  number    |
 */
class Concert extends Performance {
   // Об'являємо приватні поля #ticketPrice;
   #ticketPrice;
  // Створюємо конструктор з чотирма вхідними параметрами: #band, #location, #date та #ticketPrice
  constructor(band, location, date, ticketPrice) {
        // використання super для виклику конструктора базового класу

      super(band, location, date);
    this.#ticketPrice = ticketPrice;
  }
        // Створюємо getter для #ticketPrice, що повертає приватну властивість #ticketPrice

  get ticketPrice() {
    return this.#ticketPrice;
  }
  // Створюємо setter для #ticketPrice, що дозволяє змінити приватну властивість #ticketPrice
  set ticketPrice(newTicketPrice) {
    this.#ticketPrice = newTicketPrice;
  }
  // Визначаємо метод info(), що виводить рядок в консоль `Гурт ${super.band.name} виступить в ${super.location} ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`
  info() {
    return `Гурт ${this.band.name} виступить в ${this.location} ${this.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`;
  }
}

/*
 * Клас: Vocalist
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 */
class Vocalist {
    // Об'являємо приватні поля #name; #band;
  #name;
  #band;
  // Створюємо конструктор з двома вхідними параметрами: #name та #band
  constructor(name, band) {
    this.#name = name;
    this.#band = band;
  }
  // Створюємо getter для #name, що повертає приватну властивість #name
  get name() {
    return this.#name;
  }
  // Створюємо getter для #band, що повертає приватну властивість #band
  get band() {
    return this.#band;
  }
  // Створюємо setter для #name, що дозволяє змінити приватну властивість #name
  set name(newName) {
    if (typeof newName === 'string') {
      this.#name = newName;
    } else {
      console.error('Ім\'я вокаліста має бути рядком');
    }
  }
  // Створюємо setter для #band, що дозволяє змінити приватну властивість #band
  set band(newBand) {
    if (typeof newBand === 'string') {
      this.#band = newBand;
    } else {
      console.error('Назва гурту має бути рядком');
    }
  }
  // Визначаємо метод info(), який виводить інформацію про вокаліста
  // Виводимо інформацію у форматі: "Вокаліст ${this.name} є членом гурту ${this.band}"
}

/*
 * Клас: SongWriter
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | #songs       |  array     |
 */
class SongWriter {
  // Об'являємо приватні поля #songs;
  #songs;
  // Створюємо конструктор з одним вхідним параметром: #songs
  constructor(songs = []) {
    this.#songs = songs;
  }
  // Створюємо getter для #songs, що повертає приватну властивість #songs
  get songs() {
    return this.#songs;
  }
  // Створюємо метод addSong для додавання нової пісні до масиву #songs
  addSong(newSong) {
    if (typeof newSong === 'string') {
      this.#songs.push(newSong);
    } else {
      console.error('Пісня має бути рядком');
    }
  }
  // Визначаємо метод info(), який виводить інформацію про автора пісень
  // Виводимо інформацію у форматі: "Написав ${this.songs.length} пісень"
}

/*
 * Клас: LeadSinger
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 * | songs       |  array     |
 */

class LeadSinger extends Vocalist {
    // Створюємо конструктор з двома вхідними параметрами: name, band
  constructor(name, band) {
      // super(name, band);
    super(name, band);
  }
}

/*
 * Створення musician екземпляра класу Musician
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "John"           |
 * | instrument  | "Guitarist"      |
 */
const musician = new Musician("John", "Guitarist");
/*
 * Створення guitarist екземпляра класу Guitarist
 * ---------------------------------------------------
 * | Властивість |  Значення         |
 * |-------------|-------------------|
 * | name        | "Jimmy Page"      |
 * | instrument  | "гітара"          |
 * | band        | "Led Zeppelin"    |
 */
const guitarist = new Guitarist("Jimmy Page", "гітара", "Led Zeppelin");
/*
 * Створення bassist екземпляра класу Bassist
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "Paul McCartney" |
 * | instrument  | "бас-гітара"     |
 * | band        | "The Beatles"    |
 */
const bassist = new Bassist("Paul McCartney", "бас-гітара", "The Beatles");
// Створення band екземпляру класу Band
const bassist_1 = new Bassist("Paul McCartney", "бас-гітара", "The Beatles");
/*
 * Створення band екземпляра класу Band
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "The Beatles"    |
 * | members     | [bassist]       |
 */
const band = new Band("The Beatles", [bassist]);
// Додаємо guitarist до band за допомогою addMember
band.addMember(guitarist);
/*
 * Створення vocalist екземпляра класу Vocalist
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | name        | "Freddie Mercury" |
 * | band        | "Queen"           |
 */
const vocalist = new Vocalist("Freddie Mercury", "Queen");
/*
 * Створення songwriter екземпляра класу SongWriter
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */
const songs = ["Yesterday", "Hey Jude", "Let It Be"];
const songwriter = new SongWriter(songs);
// Створення performance екземпляра класу Performance
/*
 * ------------------------------------------------------
 * | Властивість |       Значення                       |
 * |-------------|--------------------------------------|
 * | band        | band                                 |
 * | location    | "Liverpool"                          |
 * | date        | new Date('2023-08-01')               |
 */
const band1 = new Band("The Beatles", [bassist]);
const performance = new Performance(band, "Liverpool", new Date('2023-08-01'));
// використання Object.assign() для успадкування властивостей songwriter для LeadSinger.prototype
Object.assign(LeadSinger.prototype, { songs: songwriter.songs });
/*
 * Створення concert екземпляра класу Concert
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | band        | band             |
 * | location    | "BBC studios"    |
 * | date        | new Date("1994-07-06") |
 * | ticketPrice | 100              |
 */
const concert = new Concert(band, "BBC studios", new Date("1994-07-06"), 100);
/*
 * Створення leadsinger екземпляра класу LeadSinger
 * -------------------------------------
 * | Властивість |  Значення         |
 * |-------------|------------------|
 * | name        | "Mick Jagger"    |
 * | band        | "The Rolling Stones" |
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */
const leadsinger = new LeadSinger("Mick Jagger", "The Rolling Stones", ["Yesterday","Hey Jude","Let It Be"]);
// Методи для тестування розкоментувати після виконня всіх завдань
musician.play();
guitarist.play();
bassist.play();
band.playMusic();
performance.info();
concert.info();
vocalist.info();
songwriter.info();
leadsinger.info();
