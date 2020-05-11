import React from "react";

export default function Book({data}) {
  return (
    <div className="bookForm">
      <img
        src={data.imageLinks.thumbnail}
        alt="bookTitle"
        className="bookImg"
      />
      <div className="bookInfo">
        <h4 className="bookTitle">Title: {data.title} </h4>
        <h4 className="bookPublisher">
          Publisher: {data.publisher}
        </h4>
        <h4>
          <a
            href={data.canonicalVolumeLink}
            className="bookUrl"
          >
            Go to book
          </a>
        </h4>
      </div>
    </div>
  );
}
