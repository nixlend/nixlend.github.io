import React, { Component } from "react";
import PropTypes from "prop-types";

class Project extends Component {
  render() {
    const { name, description, url } = this.props.project;
    return (
      <div className="col-lg-8">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-success"
        >
          <h4>{name}</h4>
        </a>
        <p>{description}</p>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
