import React from "react";
function Book(props) {
  return (
    <li className="book">
      <h2 className="bookTitle">{props.book.title}</h2>
      <h3 className="bookAuthor">By: {props.book.author}</h3>
      <h3 className="bookPages">{props.book.pages} pgs</h3>
      <button
        className={
          props.book.isRead === "true"
            ? "bookIsReadBtn isReadTrue"
            : "bookIsReadBtn isReadFalse"
        }
      >
        {props.book.isRead === "true" ? "Read" : "Not Read"}
      </button>
    </li>
  );
}

export default Book;
