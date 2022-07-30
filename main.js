// querySelector variables
var newTitle = document.querySelector('#new-title');
var newBody = document.querySelector('#new-body');
var saveIdeasButton = document.querySelector('.save-ideas-button');
var cardsBox = document.querySelector('.cards-box');
var showStarredButton = document.querySelector('.show-starred-button');

// additional data to use
var ideas = [];
var favIdeas = [];
var favsDisplayed = false;

// event listeners
window.addEventListener('load', getLocalStorage);
newTitle.addEventListener('input', enableButton);
newBody.addEventListener('input', enableButton);
saveIdeasButton.addEventListener('click', validateForm);
cardsBox.addEventListener('click', deleteCard);
cardsBox.addEventListener('click', favoriteCard);
showStarredButton.addEventListener('click', displayFavIdeas);

// functions and event handlers (event targets)
function getLocalStorage() {
  var retrievedIdeas = localStorage.getItem('localIdeas');
  var parsedIdeas = JSON.parse(retrievedIdeas);

  for (var i = 0; i < parsedIdeas.length; i++) {
    ideas.push(parsedIdeas[i]);
    displayNewIdeas(ideas[i]);
  }
}

function saveIdeasLocal() {
  var stringifiedIdeas = JSON.stringify(ideas);
  localStorage.setItem('localIdeas', stringifiedIdeas);
}

function saveIdeas() {
  var newIdea = new Idea(newTitle.value, newBody.value);
  ideas.push(newIdea);
  saveIdeasLocal();

  displayNewIdeas(newIdea);

  newTitle.value = "";
  newBody.value = "";

  saveIdeasButton.classList.add('disable');
}

function displayNewIdeas(selectedIdea) {
  cardsBox.innerHTML +=
  `<article class="card" id="${selectedIdea.id}">
    <div class="card-header">
      <button class="star" title="Favorite">
        <img class="star-icon" src="assets/FEE-M1_ideabox_redux_icons/star.svg" alt="Not Favorited" />
      </button>
      <button class="delete" title="Delete">
        <img class="delete-icon" src="assets/FEE-M1_ideabox_redux_icons/delete.svg" alt="delete" />
      </button>
    </div>
    <div class="card-body">
      <h2>${selectedIdea.title}</h2>
      <p>${selectedIdea.body}</p>
    </div>
    <div class="comment-bar">
      <button class="comment">
        <img src="assets/FEE-M1_ideabox_redux_icons/comment.svg" alt="add comment button" />
      </button>
    </div>
  </article>`;
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
        saveIdeasLocal();
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
          favIdeas.push(ideas[i]);
          event.target.src = "assets/FEE-M1_ideabox_redux_icons/star-active.svg";
          event.target.alt = "Favorited";
        } else {
          ideas[i].star = false;
          event.target.src = "assets/FEE-M1_ideabox_redux_icons/star.svg";
          event.target.alt = "Not Favorited";
        }
      }
    }
  }
}

function displayFavIdeas() {
  cardsBox.innerHTML = "";

  if (!favsDisplayed) {
    favsDisplayed = true;
    showStarredButton.innerText = "Show All Ideas";
    for (var i = 0; i < favIdeas.length; i++) {
      displayNewIdeas(favIdeas[i]);
    }
  } else {
    favsDisplayed = false;
    showStarredButton.innerText = "Show Starred Ideas";
    for (var j = 0; j < ideas.length; j++) {
      displayNewIdeas(ideas[j]);
    }
  }
}
