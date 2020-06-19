import React from "react";
import AddBookModal from "./AddBookModal";
function Header(props) {
  const renderAddBookModal = () => {
    if (props.addBookModalActive)
      return (
        <AddBookModal
          toggleAddBookModal={props.toggleAddBookModal}
          addBook={props.addBook}
        />
      );
    return null;
  };
  return (
    <header>
      <div className="headerLogo"></div>
      <span className="headerTitle">Library!</span>
      <button onClick={props.toggleAddBookModal} className="headerAddBook">
        + Add Book
      </button>
      <button onClick={props.toggleEditMode} className="headerEditBook">
        Edit Books
      </button>
      {renderAddBookModal()}
    </header>
  );
}
export default Header;
