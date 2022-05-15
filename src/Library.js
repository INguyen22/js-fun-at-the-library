function createLibrary(name) {
return {
  name: name,
  shelves: {
      fantasy:[],
      fiction:[],
      nonFiction:[],
    }
    }
  }

function addBook(libraryName, title) {
 if (title.genre === "fantasy") {
   return libraryName.shelves.fantasy.push(title)
 }
 else if (title.genre === 'nonFiction') {
   return libraryName.shelves.nonFiction.push(title)
 }
 else {
   return libraryName.shelves.fiction.push(title)
 }
}

//Tom F. showed this. Don't understand how it works very well but will put down to learn it later
//libraryName.shelves[title.genre].push(title)

//console.log(libraryName) logs the result
//name: 'Denver Public Library',
//shelves: { fantasy: [], fiction: [], nonFiction: [] }

//console.log(title) logs the result
//title: 'Dracula',
//mainCharacter: { name: 'Count Dracula', age: undefined, pronouns: 'he/him' },
//pageCount: 418,
//genre: 'fantasy'

function checkoutBook(libraryName, title, genre) {
  for (var i = 0; i < libraryName.shelves[genre].length; i++) {
  if (libraryName.shelves[genre][i].title === title) {
    return libraryName.shelves[genre].splice(0, 1), `You have now checked out ${title} from the ${libraryName.name}`
  }
}
return `Sorry, there are currently no copies of ${title} available at the ${libraryName.name}`
}



//works but not ideal
/*if (title && genre === "Dracula" && "fantasy") {
    return libraryName.shelves.fantasy.splice(0, 1), `You have now checked out ${title} from the ${libraryName.name}`
}
else if (title && genre === "Pride and Predjudice" && "fiction") {
  return libraryName.shelves.fiction.splice(0, 1), `You have now checked out ${title} from the ${libraryName.name}`
}
else if (title && genre === "Born a Crime" && "nonFiction") {
  return libraryName.shelves.nonFiction.splice(0, 1), `You have now checked out ${title} from the ${libraryName.name}`
}
  else
return `Sorry, there are currently no copies of ${title} available at the ${libraryName.name}`
}/*


  /*if (title === "Pride And Prejudice") {
    return `You have now checked out ${title} from the ${libraryName}`
  }
  else if (title === "Born A Crime") {
    return `You have now checked out ${title} from the ${libraryName}`
  }
  else
  return `You have now checked out ${title} from the ${libraryName}`
}*/

//`You have now checked out ${title} from the ${libraryName}`
//console.log(genre) logs the result 'fiction'
/*if (libraryName.includes(title)) {
libraryName.shelves.pop(title)
}*/
//console.log(title) logs the result 'Pride and predjudice'
//  console.log(title.length) logs 19
//console.log(libraryName)logs the result
//name: 'Denver Public Library',
 //shelves: {
   //fantasy: [ [Object] ],
   //fiction: [ [Object] ],
   //nonFiction: [ [Object] ]
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
