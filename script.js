const books = [
    {
      id: 1,
      title: 'Psychology of influence. Convince, Influence, Protect',
      authors: 'Robert Cialdini',
      year: '2020',
      image: 'https://i2.mybook.io/p/x378/book_covers/d6/87/d6876237-8c94-409a-a9cc-ac3e8d42d4ae.jpg'
    },
    {
      id: 2,
      title: 'Morning magic. How the first hour determines your success',
      authors: 'Hal Elrod',
      year: '2019',
      image: 'https://i2.mybook.io/p/x378/book_covers/5c/ea/5ceaae8e-e836-4edc-979b-101a56fced84.jpg'
    },
    {
      id: 3,
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      id: 4,
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]
    
    let isOpen = false
  
    
    const containerBtn = document.getElementById("myContainer")

    const myButton = document.getElementById("btnCheck")
   function myContainer() {

      if (isOpen) {
        containerBtn.style.display = "none"
        isOpen = false
      } else {
        containerBtn.style.display = "flex"
        isOpen = true
      }
    }
    myButton.addEventListener('click', myContainer)

    
    const container = document.getElementById("container-books")
    
    function renderBooks() {
      container.innerHTML = ""
    
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
                <button onclick='upDateBook(${book.id})' class="button-block">Изменить</button>
                <button onclick='deleteBook(${book.id})' class="button-block">Удалить</button>
              </div>
            </div>
          `
      })
    }
    


    function deleteBook(id) {
      const book = books.find((b) => {
        return b.id === id
      })

      const bookIndex = books.indexOf(book)
      books.splice(bookIndex, 1)
      renderBooks()
    }

    function clearForm() {
      document.getElementById('nameBook').value = ""
      document.getElementById('linkBook').value = ""
      document.getElementById('yearBook').value = ""
      document.getElementById('authorsBook').value = ""
    }

    function btnSave() {
      const titleValue = document.getElementById('nameBook').value
      const authorsValue = document.getElementById('authorsBook').value
      const yearValue = document.getElementById('yearBook').value
      const linkValue = document.getElementById('linkBook').value

      const book = {
        image: linkValue,
        title: titleValue,
        year: yearValue,
        authors: authorsValue
      }
      books.push(book)
      renderBooks()
      clearForm()
     
    }

    renderBooks()

    const myButtonSave = document.getElementById("btnSave")
    myButtonSave.addEventListener('click', btnSave)