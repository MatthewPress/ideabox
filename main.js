// querySelector variables
var userTitle = document.querySelector('#user-title')
var userBody = document.querySelector('#user-body')
var saveIdeasButton = document.querySelector('.save-ideas-button')
// additional data to use
var ideas = [];

// event listeners
saveIdeasButton.addEventListener('click', validateForm)

// functions and event handlers (event targets)
function createNewIdeas() {
var newIdeas = new Idea(userTitle.value, userBody.value)
ideas.push(newIdeas)
console.log(ideas)

  // need a fxn that takes the values of this.title and this.body
  // ensure form validation = all fields must have input
  // create a new instance of the idea class
  // new instance will be pushed into the ideas array
  // clear out current innerHTML in cards body
  // add all object instances in ideas array from the cards body
}

function validateForm() {
  event.preventDefault();
  if (userTitle.value == "") {
    alert ("Title must be filled out");
    return false;
  }
  if (userBody.value == "") {
    alert ("Body must be filled out");
    return false;
  }
  createNewIdeas();
}
