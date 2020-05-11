import React, { useState } from "react";
import axios from "axios";
import Book from "./Book.jsx";

export default function Search() {
  const [books, setBooks] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (event) => setBooks(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${books}`)
      .then((response) => {
        setResult(response.data.items);
      });
  }

  return (
    <div className="main">
      <form className="bookInputForm" onSubmit={handleSubmit}>
        <input
          id="bookInput"
          onChange={handleChange}
          className="bookInput"
          type="text"
          placeholder="Name of the book..."
          autocompleted="off"
        />
        <button className="submitBook" type="submit" value="Search">
          Find
        </button>
      </form>
      {result.map((data) => (
        <Book data={data.volumeInfo} />
      ))}
    </div>
  );
}
