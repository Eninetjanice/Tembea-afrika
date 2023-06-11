import React, { useState } from 'react';

const BlogSection = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <section className="blog-section">
            <div className="article-thumbnail">
                <img src="./assets/images/article-image-1.jpg" alt="Article 1" />
                <h3>Article Title 1</h3>
                <p>
                    Brief description or summary of Article 1{' '}
                    {!showDetails && (
                        <button onClick={toggleDetails}>Read More</button>
                    )}
                </p>
                {showDetails && (
                    <div>
                        {/* Full-blown article details */}
                        <p>Full article content goes here...</p>
                        <button onClick={toggleDetails}>Show Less</button>
                    </div>
                )}
            </div>

            <div className="article-thumbnail">
                <img src="./assets/images/article-image-2.jpg" alt="Article 2" />
                <h3>Article Title 2</h3>
                <p>
                    Brief description or summary of Article 2{' '}
                    {!showDetails && (
                        <button onClick={toggleDetails}>Read More</button>
                    )}
                </p>
                {showDetails && (
                    <div>
                        {/* Full-blown article details */}
                        <p>Full article content goes here...</p>
                        <button onClick={toggleDetails}>Show Less</button>
                    </div>
                )}
            </div>

            <div className="article-thumbnail">
                <img src="./assets/images/article-image-3.jpg" alt="Article 2" />
                <h3>Article Title 3</h3>
                <p>
                    Brief description or summary of Article 3{' '}
                    {!showDetails && (
                        <button onClick={toggleDetails}>Read More</button>
                    )}
                </p>
                {showDetails && (
                    <div>
                        {/* Full-blown article details */}
                        <p>Full article content goes here...</p>
                        <button onClick={toggleDetails}>Show Less</button>
                    </div>
                )}
            </div>

	    <div className="article-thumbnail">
                <img src="./assets/images/article-image-4.jpg" alt="Article 2" />
                <h3>Article Title 4</h3>
                <p>
                    Brief description or summary of Article 4{' '}
                    {!showDetails && (
                        <button onClick={toggleDetails}>Read More</button>
                    )}
                </p>
                {showDetails && (
                    <div>
                        {/* Full-blown article details */}
                        <p>Full article content goes here...</p>
                        <button onClick={toggleDetails}>Show Less</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
