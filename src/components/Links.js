import React, { Component } from "react";
import Link from "./Link";
import { Consumer } from "../context";

class Links extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { links } = value;
          return (
            <div className="mx-auto text-center" style={{ width: "300px" }}>
              {links.map(link => (
                <Link key={link.id} link={link} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Links;
