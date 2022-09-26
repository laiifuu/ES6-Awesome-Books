export default class Library {
  constructor() {
    this.booksList = [];
  }

  addBook(title, author) {
    const book = {
      title,
      author,
    };
    this.booksList.push(book);
    localStorage.setItem('bookList', JSON.stringify(this.booksList));
  }

  removeBook(title, author) {
    this.booksList = this.booksList.filter(
      (item) => item.title !== title && item.author !== author,
    );
  }

  createBookDiv(book) {
    const div = document.createElement('div');
    div.className = 'book';
    div.innerHTML = `<p>"${book.title}" by ${book.author}</p>
        <button class="remove-btn">Remove</button>`;

    const removeBtn = div.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => {
      this.removeBook(book.title, book.author);
      div.remove();
      localStorage.setItem('bookList', JSON.stringify(this.booksList));
    });
    return div;
  }
}