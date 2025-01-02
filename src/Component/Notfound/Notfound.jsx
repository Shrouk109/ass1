/*eslint-disable*/
import React from "react";
import style from "./Notfound.module.scss"

export default function Notfound() {
  return (
    <>
      <section>
              <div
                className={`${style["landing"]} d-flex justify-content-center align-items-center`}
              >
                <div className="text-center text-white mt-5">
                  <h1 className="text-uppercase fw-bold"> Not Found Page</h1>
                </div>
                <div></div>
              </div>
            </section>
    </>
  );
}
