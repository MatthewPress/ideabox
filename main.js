// querySelector variables
var newTitle = document.querySelector('#new-title');
var newBody = document.querySelector('#new-body');
var saveIdeasButton = document.querySelector('.save-ideas-button');
var cardBox = document.querySelector('.cards-box');

// additional data to use
var ideas = [];

// event listeners
newTitle.addEventListener('input', enableButton);
newBody.addEventListener('input', enableButton);
saveIdeasButton.addEventListener('click', validateForm);
cardBox.addEventListener('click', deleteCard);
cardBox.addEventListener('click', favoriteCard);

// functions and event handlers (event targets)
function saveIdeas() {
  var newIdeas = new Idea(newTitle.value, newBody.value);

  ideas.push(newIdeas);

  newTitle.value = "";
  newBody.value = "";

  createNewIdeas();
}

function createNewIdeas() {
  cardBox.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
    cardBox.innerHTML += `
    <article class="card" id="${ideas[i].id}">
      <div class="card-header">
        <button class="star" title="Favorite">
          <img class="star-icon" src="assets/FEE-M1_ideabox_redux_icons/star.svg" alt="Not Favorited" />
        </button>
        <button class="delete" title="Delete">
          <img class="delete-icon" src="assets/FEE-M1_ideabox_redux_icons/delete.svg" alt="delete" />
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
    `;
  }

  saveIdeasButton.classList.add('disable');
}

function enableButton() {
  if (newTitle.value != "" && newBody.value != "") {
    saveIdeasButton.classList.remove('disable');
  }
}

function validateForm() {
  event.preventDefault();

  if (newTitle.value === "") {
    alert ("Title must be filled out");
    return false;
  } else if (newBody.value === "") {
    alert ("Body must be filled out");
    return false;
  }
  saveIdeas();
}

function deleteCard() {
  if (event.target.classList.contains("delete-icon")) {
    for (var i = 0; i < ideas.length; i++) {
      if (event.target.closest("article").id == ideas[i].id) {
        ideas.splice(i, 1);
      }
    }
    event.target.closest("article").remove();
  }
}

function favoriteCard() {
  if (event.target.classList.contains("star-icon")) {
    for (var i = 0; i < ideas.length; i++) {
      if (event.target.closest("article").id == ideas[i].id) {
        if (!ideas[i].star) {
          ideas[i].star = true;
          event.target.src = "assets/FEE-M1_ideabox_redux_icons/star-active.svg";
          event.target.alt = "Favorited"
        } else {
          ideas[i].star = false;
          event.target.src = "assets/FEE-M1_ideabox_redux_icons/star.svg";
          event.target.alt = "Not Favorited"
        }
      }
    }
  }
}
