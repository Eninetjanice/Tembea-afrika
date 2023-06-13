import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommunityPage = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const [discussionForums, setDiscussionForums] = useState([]);
  const [photoGalleries, setPhotoGalleries] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [socialFeatures, setSocialFeatures] = useState([]);
  const [events, setEvents] = useState([]);
  const [moderation, setModeration] = useState([]);

  useEffect(() => {
    fetchUserProfiles();
    fetchDiscussionForums();
    fetchPhotoGalleries();
    fetchBlogPosts();
    fetchReviews();
    fetchSocialFeatures();
    fetchEvents();
    fetchModeration();
  }, []);

  const fetchUserProfiles = () => {
    axios.get('/api/userProfiles')
      .then(response => {
        setUserProfiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching user profiles:', error);
      });
  };

  const fetchDiscussionForums = () => {
    axios.get('/api/discussionForums')
      .then(response => {
        setDiscussionForums(response.data);
      })
      .catch(error => {
        console.error('Error fetching discussion forums:', error);
      });
  };

  const fetchPhotoGalleries = () => {
    axios.get('/api/photoGalleries')
      .then(response => {
        setPhotoGalleries(response.data);
      })
      .catch(error => {
        console.error('Error fetching photo galleries:', error);
      });
  };

  const fetchBlogPosts = () => {
    axios.get('/api/blogPosts')
      .then(response => {
        setBlogPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
      });
  };

  const fetchReviews = () => {
    axios.get('/api/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  };

  const fetchSocialFeatures = () => {
    axios.get('/api/socialFeatures')
      .then(response => {
        setSocialFeatures(response.data);
      })
      .catch(error => {
        console.error('Error fetching social features:', error);
      });
  };

  const fetchEvents = () => {
    axios.get('/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  };

  const fetchModeration = () => {
    axios.get('/api/moderation')
      .then(response => {
        setModeration(response.data);
      })
      .catch(error => {
        console.error('Error fetching moderation data:', error);
      });
  };

  return (
    <div className="community-page">
      <div className="community-header">
        <h2>Welcome to the Tembea Afrika Community!</h2>
        <p>Join us and share your travel experiences in Africa.</p>
      </div>
      <div className="community-content">
        {/* User Profiles */}
        <section className="user-profiles">
          <h3>User Profiles</h3>
          {/* Render user profiles */}
          {userProfiles.map(profile => (
            <div key={profile.id}>
              <h4>{profile.name}</h4>
              {/* Render profile details */}
              <p>{profile.bio}</p>
              <img src={profile.profilePicture} alt="Profile Picture" />
            </div>
          ))}
        </section>

        {/* Discussion Forums */}
        <section className="discussion-forums">
          <h3>Discussion Forums</h3>
          {/* Render discussion forums */}
          {discussionForums.map(forum => (
            <div key={forum.id}>
              <h4>{forum.title}</h4>
              {/* Render forum details */}
              <p>{forum.description}</p>
            </div>
          ))}
        </section>

        {/* Photo Galleries */}
        <section className="photo-galleries">
          <h3>Photo Galleries</h3>
          {/* Render photo galleries */}
          {photoGalleries.map(gallery => (
            <div key={gallery.id}>
              <h4>{gallery.title}</h4>
              {/* Render gallery photos */}
              {gallery.photos.map(photo => (
                <img key={photo.id} src={photo.url} alt="Gallery Photo" />
              ))}
            </div>
          ))}
        </section>

        {/* Blog Section */}
        <section className="blog-section">
          <h3>Blog</h3>
          {/* Render blog posts */}
          {blogPosts.map(post => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              {/* Render blog post content */}
              <p>{post.content}</p>
            </div>
          ))}
        </section>

        {/* Review System */}
        <section className="review-system">
          <h3>Review System</h3>
          {/* Render review system */}
          {reviews.map(review => (
            <div key={review.id}>
              <h4>{review.title}</h4>
              {/* Render review details */}
              <p>{review.rating}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </section>

        {/* Social Features */}
        <section className="social-features">
          <h3>Social Features</h3>
          {/* Render social features */}
          {socialFeatures.map(feature => (
            <div key={feature.id}>
              <h4>{feature.title}</h4>
              {/* Render social feature details */}
              <p>{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Events and Meetups */}
        <section className="events-meetups">
          <h3>Events and Meetups</h3>
          {/* Render events and meetups */}
          {events.map(event => (
            <div key={event.id}>
              <h4>{event.title}</h4>
              {/* Render event details */}
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          ))}
        </section>

        {/* Moderation and User Management */}
        <section className="moderation-user-management">
          <h3>Moderation and User Management</h3>
          {/* Render moderation and user management features */}
          {moderation.map(feature => (
            <div key={feature.id}>
              <h4>{feature.title}</h4>
              {/* Render moderation feature details */}
              <p>{feature.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
