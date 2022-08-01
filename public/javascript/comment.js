async function addCommentHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id1 = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const post_id = post_id1.charAt(0);
  
  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.add-comment-btn').addEventListener('click', addCommentHandler);