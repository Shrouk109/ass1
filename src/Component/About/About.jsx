/*eslint-disable*/
import React from "react";
import style from "./About.module.scss";

export default function About() {
  return (
    <>
      <section>
        <div
          className={`${style["landing"]} d-flex flex-column justify-content-center align-items-center`}
        >
          <div className="text-white text-center">
            <h1 className="text-uppercase  fw-bold">about component</h1>
            <div className={`${style["star-icon"]} text-center`}>
          <i class="fa-solid fa-star my-2 fa-xl">&#9733;</i>
          </div>
          </div>
          <div className="container w-75 mt-3">
            <div className="row gy-2">
              <div className="col-md-6">
                <p className={`${style["line-h"]}`}>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p className={`${style["line-h"]}`}>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
