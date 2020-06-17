import React from "react";
import PriorityBox from "./PriorityBox";
function Book(props) {
  return (
    <li className="book">
      <h2>{props.book.title}</h2>
      <PriorityBox priority={props.book.priority} />
      <h3 className="bookAuthor">By: {props.book.author}</h3>
      <h3 className="bookPages">{props.book.pages} pgs</h3>
      <button
        className={
          props.book.isRead === "true"
            ? "bookIsReadBtn isReadTrue"
            : "bookIsReadBtn isReadFalse"
        }
      ></button>
    </li>
  );
}

export default Book;
