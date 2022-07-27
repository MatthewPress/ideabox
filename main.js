// querySelector variables
var userTitle = document.querySelector('#user-title')
var userBody = document.querySelector('#user-body')
var saveIdeasButton = document.querySelector('.save-ideas-button')
var cardBox = document.querySelector('.cards-box')
// additional data to use
var ideas = [];

// event listeners
userTitle.addEventListener('blur', enableButton)
userBody.addEventListener('blur', enableButton)
saveIdeasButton.addEventListener('click', validateForm)

// functions and event handlers (event targets)
function createNewIdeas() {
var newIdeas = new Idea(userTitle.value, userBody.value)
ideas.push(newIdeas)
userTitle.value = ""
userBody.value = ""
cardBox.innerHTML = ""
for (var i = 0; i < ideas.length; i++) {
  cardBox.innerHTML += `
  <article class="card" id="${ideas[i].id}">
    <div class="card-header">
      <button class="star">
        <img src="assets/FEE-M1_ideabox_redux_icons/star.svg" alt="star" />
        <img class="hidden" src="assets/FEE-M1_ideabox_redux_icons/star-active.svg" alt="star" />
      </button>
      <button class="delete">
        <img src="assets/FEE-M1_ideabox_redux_icons/delete.svg" alt="delete icon" />
        <img class="hidden" src="assets/FEE-M1_ideabox_redux_icons/delete-active.svg" alt="delete icon" />
      </button>
    </div>
    <div class="card-body">
      <h2>${ideas[i].title}</h2>
      <p>${ideas[i].body}</p>
    </div>
    <div class="comment-bar">
      <button class="comment">
        <img src="assets/FEE-M1_ideabox_redux_icons/comment.svg" alt="add comment button" />
      </button>
    </div>
  </article>
  `
}
saveIdeasButton.classList.add('disable')
}

function enableButton() {
  if (userTitle.value === "" || userBody.value === "") {
    return false
}
  saveIdeasButton.classList.remove('disable')
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
