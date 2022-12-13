let count = 0
let books = [
    {
      id: count++,
      title: 'Psychology of influence. Convince, Influence, Protect',
      authors: 'Robert Cialdini',
      year: '2020',
      image: 'https://i2.mybook.io/p/x378/book_covers/d6/87/d6876237-8c94-409a-a9cc-ac3e8d42d4ae.jpg'
    },
    {
      id: count++,
      title: 'Morning magic. How the first hour determines your success',
      authors: 'Hal Elrod',
      year: '2019',
      image: 'https://i2.mybook.io/p/x378/book_covers/5c/ea/5ceaae8e-e836-4edc-979b-101a56fced84.jpg'
    },
    {
      id: count++,
      title:
      'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
      authors: 'Stoyan Stefanov',
      year: 2008,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
      id: count++,
      title:
      'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
      authors: 'David Flanagan',
      year: 2011,
      image:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
    ]

    console.log(books)
    const myEditBtn =document.getElementById("btnEdit")
    myEditBtn.addEventListener('click', updateBook)

    const closeEditModalBtn = document.getElementById("close-edit-modal")
    closeEditModalBtn.addEventListener('click', () => {
      document.getElementById('bookEditDialog').style.display = 'none';
    });

    const containerBtn = document.getElementById("myContainer")

    const myButton = document.getElementById("btnCheck")

    const closeModalButton = document.getElementById("close-modal-button")


   function closeModal() {
        containerBtn.style.display = "none"
   }

   function openModal() {
        containerBtn.style.display = "flex"
   }
    
    myButton.addEventListener('click', openModal)
    closeModalButton.addEventListener('click', closeModal)

    
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
                <button id='up-date-book-${book.id}' class="button-block">Изменить</button>
                <button id='delete-book-${book.id}' class="button-block">Удалить</button>
              </div>
            </div>
          `
          books.forEach((book) => {
            const upDateBtn = document.getElementById(`up-date-book-${book.id}`)

            const makeUpDate = () => {
              openEditWindow(book.id)
            }
            try{
              upDateBtn.addEventListener('click', makeUpDate);
            } catch(y) {
              console.log(y, book.id);
            }
          })
          books.forEach((book) => {
            const deleteBtn = document.getElementById(`delete-book-${book.id}`)
      
            const makeDelete = () => {
              deleteBook(book.id)
            }
            try{
              deleteBtn.addEventListener('click', makeDelete);
            } catch(e) {
              console.log(e, book.id);
            }
          });
      })
    }
     function openEditWindow(id) {
      const book = books.find((b) => {
        return b.id === id
      })
      

      document.getElementById('nameBookEdit').value = ""
      document.getElementById('linkBookEdit').value = ""
      document.getElementById('yearBookEdit').value = ""
      document.getElementById('authorsBookEdit').value = ""

      document.getElementById('nameBookEdit').value = book.title
      document.getElementById('linkBookEdit').value = book.image
      document.getElementById('yearBookEdit').value = book.year
      document.getElementById('authorsBookEdit').value = book.authors
      document.getElementById('bookIdEdit').value = book.id


      
      const bookEdit = document.getElementById('bookEditDialog')
      bookEdit.style.display = "flex"

      renderBooks()
    }
    function updateBook() {
      const bookId = Number(document.getElementById('bookIdEdit').value);
      const index = books.findIndex((b) => {
        return b.id === bookId
      });
      books[index].title = document.getElementById('nameBookEdit').value;
      books[index].image = document.getElementById('linkBookEdit').value;
      books[index].year = document.getElementById('yearBookEdit').value;
      books[index].authors = document.getElementById('authorsBookEdit').value;
      renderBooks()
      saveToLocalStorage()
      document.getElementById('bookEditDialog').style.display = 'none';
    }

    function deleteBook(id) {
      const book = books.find((b) => {
        return b.id === id
      })

      const bookIndex = books.indexOf(book)
      books.splice(bookIndex, 1)
      renderBooks()

      saveToLocalStorage()
    }


    function clearForm() {
      document.getElementById('nameBook').value = ""
      document.getElementById('linkBook').value = ""
      document.getElementById('yearBook').value = ""
      document.getElementById('authorsBook').value = ""
    }
    
    function saveToLocalStorage() {
      const booksJSON = JSON.stringify(books)
      localStorage.setItem('books', booksJSON)
    }

    function btnSave() {
      const titleValue = document.getElementById('nameBook').value
      const authorsValue = document.getElementById('authorsBook').value
      const yearValue = document.getElementById('yearBook').value
      const linkValue = document.getElementById('linkBook').value

      if (titleValue.length === 0) {
        alert('Укажите название книги')
        containerBtn.style.display = "flex"
        return
      }
      if (authorsValue.length === 0) {
        alert('Укажите автора')
        containerBtn.style.display = "flex"
        return
      }
      if (yearValue.length === 0) {
        alert('Укажите год издания')
        containerBtn.style.display = "flex"
        return
      }

      const book = {
        id: count++,
        image: linkValue,
        title: titleValue,
        year: yearValue,
        authors: authorsValue,
      }
      books.push(book)
      renderBooks()
      clearForm()
      closeModal()
      saveToLocalStorage()
    }

    const myButtonSave = document.getElementById("btnSave")
    myButtonSave.addEventListener('click', btnSave)

    const booksJSON = localStorage.getItem('books')

    if (booksJSON) {
      books = JSON.parse(booksJSON)
    }

    renderBooks()