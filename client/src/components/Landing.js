import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="container">
    <div className="row">
      <div className="col s12">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <h5>Title</h5>
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
            <div className="card-action">
              <Link to="/post/1">Read more...</Link>
            </div>
          </div>
          <div className="card-image">
            <img
              src="https://lorempixel.com/100/190/nature/6"
              alt="image_nature"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
