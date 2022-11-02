import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../CSS/Home.css";
import Edit from "../Images/edit.png";
import Delete from "../Images/delete.png";
import CreateNote from "./CreateNote";

export default function Home(props) {
  const [notes, setNotes] = useState([]);
  const [token, setToken] = useState("");
  const [createNote, setCreateNote] = useState(false);
  const [myCategory, setMyCategory] = useState("All");

  const getNotes = async (token) => {
    const res = await axios.get("/api/notes", {
      headers: { Authorization: token },
    });
    setNotes(res.data);
  };

  function search() {
    let textToSearch = document.getElementById("search").value;
    let paragraph = document.getElementsByClassName("text");
    let title = document.getElementsByClassName("title");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let pattern = new RegExp(`${textToSearch}`, "gi");

    for (var i = 0; i < paragraph.length; i++) {
      paragraph[i].innerHTML = paragraph[i].textContent.replace(
        pattern,
        (match) => `<mark>${match}</mark>`
      );
      title[i].innerHTML = title[i].textContent.replace(
        pattern,
        (match) => `<mark>${match}</mark>`
      );
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("tokenStore");
    setToken(token);
    if (token) {
      getNotes(token);
    }
  }, []);

  const deleteNote = async (id) => {
    try {
      if (token) {
        await axios.delete(`/api/notes/${id}`, {
          headers: { Authorization: token },
        });
        getNotes(token);
      }
    } catch (error) {
      window.location.href = "/";
    }
  };

  const categorySearch = () => {
    let getCategories = document.getElementsByClassName("category");
    for (var i = 0; i < getCategories.length; i++) {
      if (myCategory === "All") {
        getCategories[i].parentNode.style.display = "";
      } else if (getCategories[i].innerHTML !== myCategory) {
        getCategories[i].parentNode.style.display = "none";
      } else {
        getCategories[i].parentNode.style.display = "";
      }
    }
  };

  useEffect(() => {
    categorySearch();
  }, [myCategory]);

  return (
    <div className="homeWrapper">
      <div className={`homeContainer home ${props.colorTheme}`}>
        {createNote === false && (
          <a href="#top">
            <div
              className="add"
              onClick={() => {
                setCreateNote(true);
              }}
            >
              <h2>+</h2>
            </div>
          </a>
        )}
        {createNote && <CreateNote setCreateNote={setCreateNote} />}
        <div className="searchBar">
          <input
            id="search"
            type="text"
            placeholder="search..."
            onChange={search}
            autoComplete="off"
          />
        </div>
        <div className="select">
          <select
            value={myCategory}
            onChange={(event) => {
              setMyCategory(event.target.value);
            }}
            id="select-category"
          >
            <option value="All">All</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Home">Home</option>
            <option value="Goal">Goal</option>
            <option value="Reminder">Reminder</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={`notesContainer`}>
          {notes.map((note) => (
            <div className={`note ${note.color}`} key={note._id}>
              <div className="delete" onClick={() => deleteNote(note._id)}>
                <img src={Delete} alt="Delete Button" />
              </div>
              <div className="edit">
                <Link to={`/edit/${note._id}`}>
                  <img src={Edit} alt="Edit button" />
                </Link>
              </div>
              <p className="date">{note.updatedAt.slice(0, 10)}</p>
              <h2 className="title" title={note.title}>
                {note.title}
              </h2>
              <h4
                className="category"
                onClick={() => {
                  setMyCategory(note.category);
                  categorySearch();
                }}
              >
                {note.category}
              </h4>
              <div>
                <h3 className="text">{note.content}</h3>
              </div>
              <div className="card-footer">
                <Link to={`edit/${note._id}`}></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p id="bottom"></p>
    </div>
  );
}
