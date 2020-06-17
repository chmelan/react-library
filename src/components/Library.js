import React from "react";
import Book from "./Book";
import EditBookForm from "./EditBookForm";

function Library(props) {
  const renderBooks = () => {
    if (props.isEditable)
      return Object.keys(props.books).map((key) => (
        <EditBookForm
          index={key}
          key={key}
          updateBook={props.updateBook}
          deleteBook={props.deleteBook}
          book={props.books[key]}
        />
      ));
    return Object.keys(props.books).map((key) => (
      <Book index={key} key={key} book={props.books[key]} />
    ));
  };

  return <ul className="library">{renderBooks()}</ul>;
}
export default Library;
