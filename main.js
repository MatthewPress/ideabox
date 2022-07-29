// querySelector variables
var newTitle = document.querySelector('#new-title');
var newBody = document.querySelector('#new-body');
var saveIdeasButton = document.querySelector('.save-ideas-button');
var cardsBox = document.querySelector('.cards-box');
// var showFavsButton = document.querySelector('.show-favs-button');

// additional data to use
var ideas = [];

// event listeners
newTitle.addEventListener('input', enableButton);
newBody.addEventListener('input', enableButton);
saveIdeasButton.addEventListener('click', validateForm);
cardsBox.addEventListener('click', deleteCard);
cardsBox.addEventListener('click', favoriteCard);
// showFavsButton.addEventListener('click', showFavorited);

// functions and event handlers (event targets)
function saveIdeas() {
  var newIdeas = new Idea(newTitle.value, newBody.value);
  ideas.push(newIdeas);

  newTitle.value = "";
  newBody.value = "";

  createNewIdeas(ideas);
}

function createNewIdeas(selectedIdeas) {
  cardsBox.innerHTML = "";
  for (var i = 0; i < selectedIdeas.length; i++) {
    cardsBox.innerHTML +=
    `<article class="card" id="${selectedIdeas[i].id}">
      <div class="card-header">
        <button class="star" title="Favorite">
          <img class="star-icon" src="assets/FEE-M1_ideabox_redux_icons/star.svg" alt="Not Favorited" />
        </button>
        <button class="delete" title="Delete">
          <img class="delete-icon" src="assets/FEE-M1_ideabox_redux_icons/delete.svg" alt="delete" />
        </button>
      </div>
      <div class="card-body">
        <h2>${selectedIdeas[i].title}</h2>
        <p>${selectedIdeas[i].body}</p>
      </div>
      <div class="comment-bar">
        <button class="comment">
          <img src="assets/FEE-M1_ideabox_redux_icons/comment.svg" alt="add comment button" />
        </button>
      </div>
    </article>`;
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

// function showFavorited() {
//   var favIdeas = [];
//   for (var i = 0; i < ideas.length; i++) {
//     if (ideas[i].star) {
//       favIdeas.push(ideas[i]);
//     }
//   }
//   createNewIdeas(favIdeas);
// }

// this is saying, not only are we checking to see that the event target is 'are you there', we are making sure it's the right one selected
// checking to see if all of the conditions are true before deleting



// Iteration 3 -
// will need to delete a new instance when delete button is pressed
// need to remove the deleted card from the data model
// and make sure it is removed from the DOM or view as well
// utilizing event propogation to addEventListener on parent element of the cards
// event targeting the child elements within -
