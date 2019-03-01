import React, { Component } from "react";
import Project from "./Project";
import { Consumer } from "../context";

class Projects extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { projects } = value;
          return (
            <div className="row mt-5 justify-content-center">
              <div className="col-8">
                <h3 className="mb-3">Projects that I have involved in</h3>
              </div>
              {projects.map(project => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Projects;
