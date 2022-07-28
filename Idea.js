class Idea {
  constructor(title, body, star) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = star || false;
  }
  updateIdea() {
    this.star;// method will return idea's starred state (boolean)
  }
}
