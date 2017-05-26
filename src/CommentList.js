

class CommentList{

// 3. create a constructor for a `CommentList`. New comment lists should initialize with an array of comments (this will be empty to start).
  constructor(comments){
    this.comments = []
  }

// 4. instances of CommentList should have a method called 'render' that returns a string of a `ul`. Inside of the ul, the comment list should include the return value of the render method of all of it's comments.
  render() {
  let comments = this.comments.map(function(comment){
    return comment.render()
  })
  return `<ul>${comments.join("")}</ul>`
}

// 5. instances of CommentList should have a method called 'addComment' that takes in a string. It should instantiate a new Comment and add it to the CommentList's array of comments.
  addComment(string) {
    let comment = new Comment(string)
    this.comments.push(comment)
  }




}
