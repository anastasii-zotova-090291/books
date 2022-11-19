const books = [
    {
      title: 'Psychology of influence. Convince, Influence, Protect',
      authors: 'Robert Cialdini',
      year: '2020',
      image: 'https://i2.mybook.io/p/x378/book_covers/d6/87/d6876237-8c94-409a-a9cc-ac3e8d42d4ae.jpg'
    },
    {
      title: 'Morning magic. How the first hour determines your success',
      authors: 'Hal Elrod',
      year: '2019',
      image: 'https://i2.mybook.io/p/x378/book_covers/5c/ea/5ceaae8e-e836-4edc-979b-101a56fced84.jpg'
    },
    {
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]

    const container = document.getElementById("container-books")

    books.forEach((book) => {
      container.innerHTML += `
          <div class="books-container">
            <div class="container">
              <div class="book-block">
                <img src="${book.image}" class="img-block"/>
                <h3 class="name-books">${book.title}</h3>
                <p class="year-books">${book.year}</p>
              </div>
              <p class="authors-books">${book.authors}</p>
            </div>
            <div class="buttons">
              <button class="button-block">Изменить</button>
              <button class="button-block">Удалить</button>
            </div>
          </div>
         `
    })