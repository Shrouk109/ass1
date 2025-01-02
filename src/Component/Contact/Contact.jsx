import { useState } from "react";
import style from "./Contact.module.scss";
import General from "../General/General.jsx"


export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <General title={"contact"}/>
      <section className={`${style["landing"]}`}>
        <div className="title my-4 text-center">
          <h1 className={`text-uppercase fw-bold ${style["title-color"]}`}>
            contact section
          </h1>
          <div className={`${style["star-icon"]} text-center`}>
            <i className="fa-solid fa-star my-2 fa-xl">&#9733;</i>
          </div>
        </div>

        {/* form */}
        <div className="container my-5">
          <form>
            <div className="mb-3">
              {/* Email Field */}
              <div className="position-relative mb-5">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className={`${style["form-control"]}`}
                  id="exampleFormControlInput1"
                  placeholder="userEmail"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label ps-2"
                >
                  userEmail:
                </label>
              </div>

              {/* Name Field */}
              <div className="position-relative mb-5">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className={`${style["form-control"]}`}
                  id="name"
                  placeholder="userName"
                />
                <label htmlFor="name" className="form-label ps-2">
                  userName:
                </label>
              </div>

              {/* Age Field */}
              <div className="position-relative mb-5">
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  type="text"
                  className={`${style["form-control"]}`}
                  id="age"
                  placeholder="userAge"
                />
                <label htmlFor="age" className="form-label ps-2">
                  userAge:
                </label>
              </div>

              {/* Password Field */}
              <div className="position-relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className={`${style["form-control"]}`}
                  id="pass"
                  placeholder="userPassword"
                />
                <label htmlFor="pass" className="form-label ps-2">
                  userPassword:
                </label>
              </div>

              <button className={`${style["btn-submit"]} mt-4`}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
