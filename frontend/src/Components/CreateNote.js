import "../CSS/CreateNote.css";
import { useState, useEffect } from "react";

function CreateNote(props) {
  var [active, setActive] = useState("pickOne");

  return (
    <div className="createNote">
      <div className={`createContainer ${active}`}>
        <p
          className="exit"
          onClick={() => {
            props.setCreateNote(false);
          }}
        >
          X
        </p>
        <h2>Create your note</h2>
        <form>
          <input type="text" placeholder="Enter your title..." />
          <textarea placeholder="Enter note text..." />
          <div className="bottom">
            <div className="colors">
              {/* Color */}
              <div
                className={`color pickOne ${
                  active === "pickOne" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActive("pickOne");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color pickTwo ${
                  active === "pickTwo" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActive("pickTwo");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color pickThree ${
                  active === "pickThree" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActive("pickThree");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color pickFour ${
                  active === "pickFour" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActive("pickFour");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color pickFive ${
                  active === "pickFive" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActive("pickFive");
                }}
              ></div>
            </div>
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
