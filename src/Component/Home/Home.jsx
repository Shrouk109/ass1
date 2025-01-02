/*eslint-disable*/
import React from "react";
import style from "./Home.module.scss";
import img from "../../assets/avataaars.svg";
import General from "../General/General.jsx"

export default function Home() {
  return (
    <>
      <General title={"home"} />
      <section>
        <div
          className={`${style["landing"]} d-flex justify-content-center align-items-center`}
        >
          <div className="text-center text-white">
            <img className="mb-4" width={250} src={img} alt="person" />
            <h1 className="text-uppercase fw-bold">start Framework</h1>
            <div className={`${style["star-icon"]} text-center`}>
          <i class="fa-solid fa-star my-2 fa-xl">&#9733;</i>
          </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
