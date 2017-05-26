// 6. In index.js, add the needed code so that when we submit the form, a new comment text should appear in the div with the id of "comments". You may use the code that you wrote for part one but this is not a requirement. Get it to work.

$(document).ready(function(){
const $commentList = $("#comment-list")  //    <div id='comment-list'></div>
const $form = $("#note-form")   //    <form id="note-form">
const $userComment = $("input")


const commenter = function(a) {
  a.preventDefault()
  makeComment()
}

function makeComment() {
  const comment = new Comment($userComment.val())
  const list = new CommentList()
  list.addComment(comment.text)
  return $($commentList).append(list.render())
  // return $($commentList).html(list.render())
}


$form.submit(commenter);

})
