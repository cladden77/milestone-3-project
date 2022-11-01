import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Delete from "../Images/delete.png";
import "../CSS/CreateNote.css";
import "../CSS/Animation.css";

export default function EditNote({ match }) {
  const [activeColor, setActiveColor] = useState("colorOne");
  const [activeCategory, setActiveCategory] = useState("other");
  const params = useParams();
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: "",
    category: "",
    id: "",
  });
  const history = useNavigate();

  useEffect(() => {
    const getNote = async () => {
      const token = localStorage.getItem("tokenStore");
      if (params.id) {
        const res = await axios.get(`/api/notes/${params.id}`, {
          headers: { Authorization: token },
        });
        console.log(params.id);
        console.log(res);
        setNote({
          title: res.data.title,
          content: res.data.content,
          id: res.data._id,
        });
        setActiveColor(`${res.data.color}`);
        setActiveCategory(`${res.data.category}`);
      }
    };
    getNote();
  }, [params.id]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const editNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const { title, content, color, category, id } = note;
        const newNote = {
          title,
          content,
          color,
          category,
        };

        await axios.put(`/api/notes/${id}`, newNote, {
          headers: { Authorization: token },
        });

        return history.push("/");
      }
    } catch (err) {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    setNote({
      ...note,
      category: `${activeCategory}`,
      color: `${activeColor}`,
    });
    console.log(activeColor);
    console.log(note);
  }, [activeColor, activeCategory]);

  return (
    <div>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="edit-note">
        <div className="createNote">
          <div className={`createContainer ${activeColor}`}>
            <h2>Edit Note</h2>
            <form onSubmit={editNote} autoComplete="off">
              <label htmlFor="title">Edit Title</label>
              <input
                type="text"
                value={note.title}
                id="title"
                name="title"
                required
                onChange={onChangeInput}
              />
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

              <label htmlFor="content">Edit content</label>
              <textarea
                type="text"
                value={note.content}
                id="content"
                name="content"
                required
                rows="2"
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
                <input type="submit" value="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
