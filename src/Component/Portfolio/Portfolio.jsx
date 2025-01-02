/*eslint-disable*/
import React from "react";
import style from "./Portfolio.module.scss";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <>
      <section className={`${style["landing"]}`}>
        <div className="title mt-5 mb-3 text-center">
          <h1 className={`text-uppercase  fw-bold ${style["title-color"]}`}>
            portfolio component
          </h1>
          <div className={`${style["star-icon"]} text-center`}>
          <i class="fa-solid fa-star my-2 fa-xl">&#9733;</i>
          </div>
        </div>

        <div className="container mb-3">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 ">
              <div className={`p-3 ${style["inner"]}`}>
                <img src={port1} className="w-100 rounded-4" alt="port1" />
                <div className={`${style["layer"]} m-3 rounded-4`}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className={`p-3 ${style["inner"]}`}>
                <img src={port2} className="w-100 rounded-4" alt="port2" />
                <div className={`${style["layer"]} m-3 rounded-4`}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className={`p-3 ${style["inner"]}`}>
                <img src={port3} className="w-100 rounded-4" alt="port3" />
                <div className={`${style["layer"]} m-3 rounded-4`}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className={`p-3 ${style["inner"]}`}>
                <img src={port1} className="w-100 rounded-4" alt="port1" />
                <div className={`${style["layer"]} m-3 rounded-4`}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className={`p-3 ${style["inner"]}`}>
                <img src={port2} className="w-100 rounded-4" alt="port2" />
                <div className={`${style["layer"]} m-3 rounded-4`}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className={`p-3 ${style["inner"]}`}>
                <img src={port3} className="w-100 rounded-4" alt="port3" />
                <div className={`${style["layer"]} m-3 rounded-4`}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
