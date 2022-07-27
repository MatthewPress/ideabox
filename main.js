// querySelector variables
var userTitle = document.querySelector('#user-title')
var userBody = document.querySelector('#user-body')
var saveIdeasButton = document.querySelector('.save-ideas-button')
var cardBox = document.querySelector('.cards-box')
// additional data to use
var ideas = [];

// event listeners
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
  <article class="card">
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
      <h2>Idea title</h2>
      <p>Idea body. Don't ever play yourself. Every chance I get, I water the plants, Lion! Cloth talk. Bunch of random shit to keep testing this shit out. Idea body. Don't ever play yourself. Every chance I get, I water the plants, Lion! Cloth talk. Bunch of random shit to keep testing this shit out.</p>
    </div>
    <div class="comment-bar">
      <button class="comment">
        <img src="assets/FEE-M1_ideabox_redux_icons/comment.svg" alt="add comment button" />
      </button>
    </div>
  </article>
  `
}
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
