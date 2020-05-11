import React from "react";

export default function Book({ data }) {
  const { imageLinks, title, publisher, canonicalVolumeLink } = data;
  return (
    <div className="bookForm">
      <img src={imageLinks.thumbnail} alt="bookTitle" className="bookImg" />
      <div className="bookInfo">
        <h4 className="bookTitle">Title: {title} </h4>
        <h4 className="bookPublisher">Publisher: {publisher}</h4>
        <h4>
          <a href={canonicalVolumeLink} className="bookUrl">
            Go to book
          </a>
        </h4>
      </div>
    </div>
  );
}
