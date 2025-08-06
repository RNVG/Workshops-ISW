function addautor() {
  const autor = $('#title').val().trim();

  if (autor === '') {
    alert('Por favor escribe un nombre de autor.');
    return;
  }

  let booksDb = JSON.parse(localStorage.getItem('Autores')) || [];

  const newAuthor = {
    name: autor,
    id: booksDb.length + 1
  };

  booksDb.push(newAuthor);
  localStorage.setItem('Autores', JSON.stringify(booksDb));

  console.log('Autores guardados:', booksDb);

 
}

$('#add-book-autor').on('click', function () {
  addautor();
});