// Single Responsibility Principle
//single responsibility principle  каждый класс отвечает за единственный функционал (зачто то одно).
//Какой либо класс должен обладать только одной зоной оветственности.
// Например класс для отправки емаил только для емаил

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false; //  говорит была ли новость изменена
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news
  }
  html() {
    return `
    <div class="news">
      <h1>${this.news.title}</h1>
      <p>${this.news.text}</p>
    </div>
   `;
  }

  json(){
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified
    }, null, 2)
  }

  xml(){
    return `
    <news>
      <title>${this.news.title}</title>
      <text><${this.news.text}</text>
    </news>
    `
  }
}
const news = new News('Главная новость', 'Сегодня затмение солнца')
news.update('Затмение перенесли на завтра')

const printer = new NewsPrinter(news)
console.log(printer.html());
console.log(printer.xml());
console.log(printer.json() );