



class Comment {

  // 1. create a constructor for a `Comment`. New comments should initialize with some text.
  constructor(text){
    this.text = text
  }



  // 2. instances of comments should have a prototype method called 'render' that returns a string of an `li` with that comment's text inside.
  render(){
    return `<li>${this.text}</li>`
  }
}
