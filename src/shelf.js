function shelfBook(bookTitle, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    return sciFiShelf.unshift(bookTitle)
  }
}

//works but is longer and not consise
  /*if (sciFiShelf.length >= 3) {
    return sciFiShelf - 1;
  }
  else {
  //starting at the zero index, delete zero items and add bookTitle
  return sciFiShelf.splice(0, 0, bookTitle)
}
}*/

//sciFiShelf.unshift(bookTitle)
//so when hyperion gets added in, it's at zero index
//but when dune gets run through the function, it gets added to the 0 index
//pushes hype to the first index

//DUNE NEEDS TO BE IN THE ZERO INDEX, NOT Hyperion
  //if (sciFiShelf.includes(bookTitle)) {
  //  return;
  //}
//else {
  //return sciFiShelf.push(bookTitle)
//}

//var dune = {
  //title: "Dune",
//  mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
  //pageCount: 421,
  //genre: "sciFi"
//};
//dune.title

//var shelfBook = {
//{var hype = {title:, character:, page:, genre:,}},
//{var dune = {title:, character:, page:, genre:,}}
//}
//console.log(shelfBook[0])

function unshelfBook(bookTitle, sciFiShelf) {
for (var i = 0; i < sciFiShelf.length; i++) {
  if (bookTitle === sciFiShelf[i].title) {
    return sciFiShelf.splice(i, 1)
  }
}
}
//starting at the zero index in the array
//if bookTitle is the title on the shelf at a certain INDEX
//remove it from the array at that index


function listTitles(fantasyShelf) {
  //the variable titles was declared and assigned to an empty array
  var titles = []
  //checks each fantasyShelf object key in the array
  for (var i = 0; i < fantasyShelf.length; i++) {
    //add fantasyShelf title to titles array
  titles.push(fantasyShelf[i].title)
}
//return each array joined together as a string
//.join add a comma and space
return titles.join(', ')
}

//for (var i = 0; i < fantasyShelf.length; i++) {
  //var fantasyShelf = fantasyShelf[i].title
//}


//.join
  //if (fantasyShelf[i] === fantasyShelf.length) {
    //return fantasyShelf.push()
  //}
//}
//}
  //return fantasyShelf.push(fantasyShelf[i].title)
//}
//}

function searchShelf(shelf, bookName) {
  var bookPresent = false
  //iterate over the shelf array
  for (var i = 0; i < shelf.length; i++) {
    //if shelf title strictly equals bookName
    if (shelf[i].title === bookName) {
      //return bookName
  bookPresent = true
}
else {
  bookPresent = false
}
}
return bookPresent
}
  //logs the result of false
  //the log of string results in hyperion
//  console.log(sciFiShelf.includes(string))
//  for (var i = 0; i < sciFiShelf.length; i++) {
    //if (sciFiShelf.includes(string) == string) {
    //  return true
  //  }
//}
  //console.log(bookTitle)
  //for (var i = 0; i < sciFiShelf.length; i++) {
  //return sciFiShelf.includes(bookTitle[i].title)
//}
//}
  /*for (var i = 0; i < sciFiShelf.length; i++) {
    return sciFiShelf[i].title.includes(titles)
  }
}*/
  /*var shelf = []
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (shelf !== sciFiShelf.length) {
return shelf.unshift(sciFiShelf[i].title)
}
else {
  return sciFiShelf.includes(sciFiShelf[i].title)
}
}
}*/

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
