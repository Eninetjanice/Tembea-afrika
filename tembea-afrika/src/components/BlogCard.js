import React from 'react';

const BlogCard = ({ post }) => {
  const handleCommentSubmit = (e) => {
  e.preventDefault();
  const commentText = e.target.comment.value; // Get the comment text from the form

  // Add logic to submit the comment to the API or database
  // For example, you can make an API request to save the comment
  const commentData = {
    postId: post.id, // Assuming you have a unique identifier for the blog post
    text: commentText,
    // Add any additional fields you want to store with the comment (e.g., author, date)
  };

  // Make an API request to save the comment
  fetch('https://api.example.com/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  })
    .then((response) => {
      if (response.ok) {
        // Comment submission was successful
        // Add logic to update the UI or display a success message
        console.log('Comment submitted successfully');
      } else {
        // Comment submission failed
        // Add logic to handle the error or display an error message
        console.log('Failed to submit comment');
      }
    })
    .catch((error) => {
      // Handle any network or request errors
      console.log('Error submitting comment:', error);
    });

  // Clear the comment input field
  e.target.comment.value = '';
};

  const handleShare = () => {
    const shareUrl = window.location.href; // Get the current page URL
    const shareText = `Check out this blog post: ${post.title}`; // Customize the share text
    const shareParams = encodeURIComponent(`${shareText}\n\n${shareUrl}`);

    // Open a new window or redirect to the social media platform
    window.open(`https://platform.example.com/share?url=${shareParams}`);
  };

  return (
    <div className="blog-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      <div className="comment-section">
        <h4>Comments</h4>
        <form onSubmit={handleCommentSubmit}>
          <input type="text" placeholder="Enter your comment" />
          <button type="submit">Submit</button>
        </form>
        {/* Display comments */}
        {post.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
            <p>By: {comment.author}</p>
          </div>
        ))}
      </div>
      <div className="share-section">
        <h4>Share</h4>
        <button onClick={handleShare}>Share on Social Media</button>
      </div>
    </div>
  );
};

export default BlogCard;
