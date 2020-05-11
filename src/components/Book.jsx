import React from "react";

export default function Book(props) {
  return (
    <div className="bookForm">
      <img
        src={props.data.volumeInfo.imageLinks.thumbnail}
        alt="bookTitle"
        className="bookImg"
      />
      <div className="bookInfo">
        <h4 className="bookTitle">Title: {props.data.volumeInfo.title} </h4>
        <h4 className="bookPublisher">
          Publisher: {props.data.volumeInfo.publisher}
        </h4>
        <h4>
          <a
            href={props.data.volumeInfo.canonicalVolumeLink}
            className="bookUrl"
          >
            Go to book
          </a>
        </h4>
      </div>
    </div>
  );
}
