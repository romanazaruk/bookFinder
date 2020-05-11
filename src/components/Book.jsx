import React from 'react'

export default function Book(props) {
    return (
        <div>
            {props.result.map((data) => (
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
    )
}
