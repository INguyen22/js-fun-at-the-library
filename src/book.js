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

function saveReview(reviews) {
  return [
    console.log(reviews.length)
    .push()
  ]
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
