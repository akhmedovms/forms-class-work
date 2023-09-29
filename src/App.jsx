import React, { useEffect, useState } from "react";

import Form from "./Form";

function getDataFromLocalStorage(params) {
  return JSON.parse(localStorage.getItem("articles")) || [];
}

function App() {
  const [articles, setArticles] = useState(getDataFromLocalStorage());

  const addArticles = (article) => {
    setArticles((prev) => {
      return [...prev, article];
    });
  };

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  const handleDelete = (id) => {
    setArticles((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  return (
    <div>
      {" "}
      <Form
        addArticles={addArticles}
        articles={articles}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
