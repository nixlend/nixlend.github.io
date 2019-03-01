import React, { Component } from "react";
import PropTypes from "prop-types";

class Link extends Component {
  render() {
    const { url, fontawesome } = this.props.link;
    return (
      <a
        className="text-secondary"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={"mx-2 " + fontawesome} />
      </a>
    );
  }
}

Link.propTypes = {
  link: PropTypes.object.isRequired
};

export default Link;
