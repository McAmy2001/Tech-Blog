async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const blog_text = document.getElementById('blog_text_edit').value.trim();
  const post_id1 = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const post_id = post_id1.charAt(0);

  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      blog_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }

}

document.querySelector('.save-post-btn').addEventListener('click', editFormHandler);
