// blogApi.js

// Function to fetch blog posts from the API
export const fetchBlogPosts = () => {
  return fetch('https://api.example.com/posts')
    .then(response => response.json())
    .then(data => data.posts)
    .catch(error => {
      console.error('Error fetching blog posts:', error);
      throw error;
    });
};

// Function to submit a comment for a specific blog post
export const submitComment = (postId, commentText) => {
  const commentData = {
    postId: postId,
    text: commentText,
    // Additional fields if needed (e.g., author, date)
  };

  return fetch('https://api.example.com/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  })
    .then(response => {
      if (response.ok) {
        console.log('Comment submitted successfully');
        // You can return any relevant response data if needed
        return response.json();
      } else {
        console.error('Failed to submit comment');
        throw new Error('Failed to submit comment');
      }
    })
    .catch(error => {
      console.error('Error submitting comment:', error);
      throw error;
    });
};
