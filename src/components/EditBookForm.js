import React from "react";
function EditBookForm(props) {
  const toggleReadStatus = (e) => {
    e.target.value = props.book.isRead === "true" ? "false" : "true";
    handleChange(e);
  };
  const handleChange = (e) => {
    const updatedBook = {
      ...props.book,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    console.log(updatedBook);
    props.updateBook(props.index, updatedBook);
  };
  return (
    <li className="book">
      <input
        name="title"
        className="bookTitle"
        value={props.book.title}
        onChange={handleChange}
      />
      <input
        name="author"
        className="bookAuthor"
        value={props.book.author}
        onChange={handleChange}
      />
      <input
        name="pages"
        className="bookPages"
        value={props.book.pages}
        onChange={handleChange}
      />
      <button
        name="isRead"
        onClick={toggleReadStatus}
        value={props.book.isRead}
        className={
          props.book.isRead === "true"
            ? "bookIsReadBtn "
            : "bookIsReadBtn isReadFalse"
        }
      >
        {props.book.isRead === "true" ? "Read" : "Not Read"}
      </button>
      <button
        className="deleteBookBtn"
        onClick={() => {
          props.deleteBook(props.index);
        }}
      >
        X
      </button>
    </li>
  );
}

export default EditBookForm;
