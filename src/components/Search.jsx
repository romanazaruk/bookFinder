import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [books, setBooks] = useState("");
  const [result, setResult] = useState([]);
  function changeHandle(event) {
    const book = setBooks(event.target.value);

    return book;
  }

  function submitHandle(event) {
    event.preventDefault();

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + books)
      .then((response) => {
        console.log(response.data);
        setResult(response.data.items);
      });
  }

  return (
    <div className="main">
      <form className="bookInputForm" onSubmit={submitHandle}>
        <input
          id="bookInput"
          onChange={changeHandle}
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
        <div className="bookForm">
          <img
            src={data.volumeInfo.imageLinks.thumbnail}
            alt="bookTitle"
            className="bookImg"
          />
          <div className="bookInfo">
            <h4 className="bookTitle">Title: {data.volumeInfo.title} </h4>
            <h4 className="bookPublisher">
              Publisher: {data.volumeInfo.publisher}
            </h4>
            <h4>
              <a href={data.volumeInfo.canonicalVolumeLink} className="bookUrl">
                Go to book
              </a>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
