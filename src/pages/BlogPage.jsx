import React from 'react';

const BlogPage = () => {
  return (
    <div className="page-content blog-page">
      <h1>Blog</h1>
      <div className="content-wrapper">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src="https://static.videezy.com/system/resources/previews/000/035/086/original/P1170066_9_5.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="content">
          <h2>Welcome to Our Blog</h2>
          <p>
            Stay updated with the latest trends, insights, and stories from our experts. Our blog covers a wide range of topics related to finance, technology, and more. Dive in and explore!
          </p>
          <h2>Financial Tips</h2>
          <p>
            Discover expert tips on managing your finances, investing, and saving money. Our financial tips are designed to help you make informed decisions and achieve your financial goals.
          </p>
          <h2>Technology Updates</h2>
          <p>
            Stay ahead of the curve with the latest technology updates. We cover everything from fintech innovations to cybersecurity trends, ensuring you're always in the know.
          </p>
          <h2>Success Stories</h2>
          <p>
            Read inspiring success stories from our users and partners. Learn how P2P Pay has helped individuals and businesses achieve their financial goals and grow.
          </p>
          <h2>Industry News</h2>
          <p>
            Get the latest news and updates from the finance and technology industries. Our industry news section keeps you informed about the latest developments and trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;


