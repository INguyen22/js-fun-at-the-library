function createTitle(bookIdea) {
  return `The ${bookIdea}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
}

function saveReview(string, reviews) {
  //if reviews includes this string
    if (reviews.includes(string)) {
      //don't add string again
      return;
    }
    //otherwise
    else {
      //add the string
      return reviews.push(string)
    }
}
//adds to the end of an array
//reviews.push()
//adds a value to a object
//saveReview.propertyToAdd = 'blah'
//loop
//for (var i = 0; i < reviews.length; i++)

function calculatePageCount(title) {
  //refactored
  var title = title.length * 20
  return title
}

  //for every letter in the title
  //for (var i = 0; i < title.length; i++) {
    //multiply the number of letters in the title by 20
    //return title.length * 20
//var bookPages = bookTitle.length * 20
//return bookPages
//2+2 is similar to 2*2
//title going though is "The teeanage ghoul from the first function of createTitle"
//title.length calculates the length of the title (which is a string)
//the title has 17 charcaters (including the spaces).
//17*20 is 340

function writeBook(bookTitle, bookCharacter, genre) {
return {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: genre
  }
}
//console.log(bookTitle) logs the result 'the teenage ghoul'
//function() {
  //for (var i = 0; i < bookTitle.length; i++) {
    //return bookTitle.length * 20

function editBook(bookTitle) {
  //re-assign key to a different value and multipkying it by 0.75
  bookTitle.pageCount = bookTitle.pageCount * 0.75
  return bookTitle.pageCount
}
//pageCountcalculatePageCount(bookTitle) * 0.75
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
