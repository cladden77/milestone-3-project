import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Delete from "../Images/delete.png";
import "../CSS/CreateNote.css";

export default function CreateNote(props) {
  const date = new Date();
  const [activeColor, setActiveColor] = useState("colorOne");
  const [activeCategory, setActiveCategory] = useState("Other");
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: `${activeColor}`,
    category: `${activeCategory}`,
  });

  const history = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const createNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const { title, content, color, category } = note;
        const newNote = {
          title,
          content,
          color,
          category,
        };

        await axios.post("/api/notes", newNote, {
          headers: { Authorization: token },
        });

        return history.push("/");
      }
    } catch (err) {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    console.log(date);
    setNote({
      ...note,
      category: `${activeCategory}`,
      color: `${activeColor}`,
    });
  }, [activeColor, activeCategory]);

  return (
    <div className="createNote">
      <div className={`createContainer ${activeColor}`}>
        <p
          className="exit"
          onClick={() => {
            props.setCreateNote(false);
          }}
        >
          <img src={Delete} alt="Delete button" />
        </p>
        <h2>Create your note</h2>
        <form onSubmit={createNote} autoComplete="off">
          <p>Category</p>
          <div className="categories">
            <div
              className={`category ${
                activeCategory === "Personal" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCategory("Personal");
              }}
            >
              Personal
            </div>
            <div
              className={`category ${
                activeCategory === "Work" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCategory("Work");
              }}
            >
              Work
            </div>
            <div
              className={`category ${
                activeCategory === "Home" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCategory("Home");
              }}
            >
              Home
            </div>
            <div
              className={`category ${
                activeCategory === "Goal" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCategory("Goal");
              }}
            >
              Goal
            </div>
            <div
              className={`category ${
                activeCategory === "Reminder" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCategory("Reminder");
              }}
            >
              Reminder
            </div>
            <div
              className={`category ${
                activeCategory === "Other" ? "active" : "notActive"
              }`}
              onClick={() => {
                setActiveCategory("Other");
              }}
            >
              Other
            </div>
          </div>

          <input
            type="text"
            value={note.title}
            id="title"
            name="title"
            required
            onChange={onChangeInput}
            placeholder="Enter your title..."
          />
          <textarea
            type="text"
            value={note.content}
            id="content"
            name="content"
            required
            rows="2"
            placeholder="Enter note text..."
            onChange={onChangeInput}
          />

          <div className="bottom">
            <div className="colors">
              {/* Color */}
              <div
                className={`color colorOne ${
                  activeColor === "colorOne" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorOne");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color colorTwo ${
                  activeColor === "colorTwo" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorTwo");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color colorThree ${
                  activeColor === "colorThree" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorThree");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color colorFour ${
                  activeColor === "colorFour" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorFour");
                }}
              ></div>
              {/* Color */}
              <div
                className={`color colorFive ${
                  activeColor === "colorFive" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorFive");
                }}
              ></div>
              <div
                className={`color colorSix ${
                  activeColor === "colorSix" ? "active" : "notActive"
                }`}
                onClick={() => {
                  setActiveColor("colorSix");
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
