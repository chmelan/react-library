import React from "react";
//import PriorityBox from "./PriorityBox";
class addBookModal extends React.Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.authorRef = React.createRef();
    this.pagesRef = React.createRef();
    this.isReadRef = React.createRef();
  }

  createBook = (e) => {
    //prevents browser from submitting form
    e.preventDefault();
    const book = {
      title: this.titleRef.current.value,
      author: this.authorRef.current.value,
      pages: this.pagesRef.current.value,
      isRead: this.isReadRef.current.value,
    };
    this.props.addBook(book);
    e.currentTarget.reset();
  };
  render() {
    return (
      <div className="addBookModalContainer">
        <form className="addBookModalForm" onSubmit={this.createBook}>
          <h2 className="modalFormTitle">New Book Form</h2>
          <input
            className="modalTitle"
            name="title"
            type="text"
            placeholder="title"
            required
            ref={this.titleRef}
          />
          <input
            className="modalAuthor"
            name="author"
            type="text"
            placeholder="author"
            required
            ref={this.authorRef}
          />
          <input
            className="modalPages"
            name="pages"
            type="text"
            placeholder="pages"
            required
            ref={this.pagesRef}
          />
          <select name="isRead" ref={this.isReadRef} className="modalSelect">
            <option value="true">Read</option>
            <option value="false">Not Read</option>
          </select>
          <button type="submit" className="modalAddBook">
            Add Book
          </button>
          <button className="cancelBtn" onClick={this.props.toggleAddBookModal}>
            X
          </button>
        </form>
      </div>
    );
  }
}

export default addBookModal;
