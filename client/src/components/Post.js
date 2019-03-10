import React from 'react';

const Post = () => (
  <div className="container">
    <div className="row">
      <div className="col s12">
        <h1>Title</h1>
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <img
          className="responsive-img"
          src="https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?cs=srgb&dl=landscape-mountains-nature-67517.jpg&fm=jpg"
          alt="blog_image"
        />
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <h3>What is Lorem Ipsum?</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  </div>
);

export default Post;
