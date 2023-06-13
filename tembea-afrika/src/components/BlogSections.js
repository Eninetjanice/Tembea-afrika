import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { getBlogPosts } from '../api/blogApi';

const BlogSections = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from API or database
    const fetchBlogPosts = async () => {
      try {
        const response = await getBlogPosts();
        setBlogPosts(response.data); // Assuming the API response contains the blog posts data
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className="blog-section">
      <h2>Blog</h2>
      <div className="blog-cards">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogSections;
