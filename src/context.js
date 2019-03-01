import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    links: [
      {
        id: 1,
        name: "github",
        url: "https://github.com/nixlend",
        fontawesome: "fab fa-2x fa-github-alt"
      },
      {
        id: 2,
        name: "linkedin",
        url:
          "https://www.linkedin.com/in/nicholas-lee-263b4511b/?originalSubdomain=ca",
        fontawesome: "fab fa-2x fa-linkedin"
      }
    ],
    projects: [
      {
        id: 1,
        name: "CursesChat",
        description:
          "A chatroom application written in Python terminal base style. This is a group of 4 project.",
        url: "https://github.com/tristanp2/CursesChat"
      },
      {
        id: 2,
        name: "Efiiroute",
        description:
          "A High Fidelity UI design to find the most efficient errands for user. This is a group of 4 project.",
        url: "https://projects.invisionapp.com/share/S26L8TWWT#/screens"
      },
      {
        id: 3,
        name: "MineSweeper",
        description: "A minesweeper game written in jQuery and javaScript.",
        url: "https://minesweepy.herokuapp.com/"
      },
      {
        id: 4,
        name: "Wordpress website",
        description:
          "A wordpress website created for a local R&B artist, it is currently still under final development processs.",
        url: "./img/wpwork.jpg" //just upload a pic
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
