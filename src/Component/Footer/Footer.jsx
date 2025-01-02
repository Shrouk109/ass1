/*eslint-disable*/
import React from "react";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer >
        <section className={` ${style["*"]} ${style["footer"]} `}>
        <div className="container text-center">
          <div className="row gy-5">
            <div className="col-md-4">
              <h3 className="text-uppercase">Location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243f</p>
            </div>
            <div className="col-md-4">
              <h3 className="text-uppercase">AROUND THE WEB</h3>
              <div className="icon ">
                <i class={`fa-brands fa-facebook ${style["icon-style"]}`}></i>
                <i class={`fa-brands fa-twitter ${style["icon-style"]}`}></i>
                <i class= {`fa-brands fa-linkedin-in ${style["icon-style"]}`}></i>
                <i class= {`fa-solid fa-globe ${style["icon-style"]}`}></i>
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="text-uppercase">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        </section>

        <div className={` ${style["last"]}  pt-4 pb-2`}>
          <p className="text-center">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
