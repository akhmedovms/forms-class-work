import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Form({ addArticles, articles, handleDelete }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const titleRef = useRef();
  const authorRed = useRef();
  const dateRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addArticles({ id: uuidv4(), title, author, date });
    titleRef.current.value = "";
    authorRed.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className="form" action="#">
        <div className="input-box">
          <label htmlFor="title">Article Title:</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            required
            placeholder="Title"
            type="text"
            ref={titleRef}
          />
        </div>
        <div className="column">
          <div className="input-box">
            <label htmlFor="author">Article Author</label>
            <input
              onChange={(e) => setAuthor(e.target.value)}
              id="author"
              required
              placeholder="Author"
              type="text"
              ref={authorRed}
            />
          </div>
          <div className="input-box">
            <label htmlFor="article">Article Date</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              id="article"
              required
              placeholder="Date"
              type="date"
              ref={dateRef}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      {
        <div className="articles-wr">
          <ul>
            {articles.map((article) => {
              return (
                <li key={article.id}>
                  <h3>
                    <span>
                      <i className="fa-solid fa-pen fa-xs"></i> Title :
                    </span>{" "}
                    {article.title}
                  </h3>
                  <p>
                    <span>
                      <i className="fa-solid fa-at"></i> Author :
                    </span>{" "}
                    {article.author}
                  </p>
                  <p>
                    <span>
                      <i className="fa-solid fa-calendar-days"></i> Date :
                    </span>{" "}
                    {article.date}
                  </p>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(article.id)}
                  >
                    <span className="text">Delete</span>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                      </svg>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      }
    </div>
  );
}

export default Form;
