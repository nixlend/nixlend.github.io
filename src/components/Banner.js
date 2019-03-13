import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="banner-container mx-auto mt-5">
        <img
          className="rounded-circle mx-auto d-block mb-1"
          src="./img/nicholas-image.jpg"
          alt=""
        />
        <h1 className="banner-name text-center display-3">Nicholas Lee</h1>
      </div>
    );
  }
}

export default Banner;
