async function deleteFormHandler(event) {
  event.preventDefault();

  const post_id1 = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const post_id = post_id1.charAt(0);

  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
