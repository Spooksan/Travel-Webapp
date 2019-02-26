import React, { Component } from "react";
import "./Tour.scss";
export default class Tour extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img src="" alt="" />
        </div>
        <span className="close- btn">
          <i className="fas fa-window-close" />
        </span>
        <div className="tour-info">
          <h3>city</h3>
          <h4>name</h4>
          <h5>
            info{" "}
            <span>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          <p>
            Mollit excepteur non duis pariatur esse occaecat consequat
            exercitation reprehenderit aute officia. Lorem dolor id sunt id
            eiusmod id mollit id incididunt exercitation est. Ipsum minim
            adipisicing consequat in aliqua id cupidatat commodo commodo
            deserunt. Non proident est reprehenderit aliqua voluptate anim.
          </p>
        </div>
      </article>
    );
  }
}
