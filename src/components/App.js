import React from "react";
import Library from "./Library";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {
        book1: {
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          pages: 310,
          isRead: "true",
        },
        Book2: {
          title: "A Wizard of Earthsea",
          author: "Ursula K. Le Guin",
          pages: 267,
          isRead: "false",
        },

        Book3: {
          title: "The Blade Itself",
          author: "Joe Abercrombie",
          pages: 596,
          isRead: "false",
        },
      },
      isEditable: false,
      addBookModalActive: false,
    };
  }
  componentDidMount() {
    const localStorageRef = localStorage.getItem("books");
    if (localStorageRef) {
      this.setState({ books: JSON.parse(localStorageRef) });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("books", JSON.stringify(this.state.books));
  }
  addBook = (newBook) => {
    const books = { ...this.state.books };
    books[`book${Date.now()}`] = newBook;
    this.setState({ books });
  };
  updateBook = (key, updatedBook) => {
    const books = { ...this.state.books };
    books[key] = updatedBook;
    this.setState({ books });
  };
  deleteBook = (key) => {
    const books = { ...this.state.books };
    delete books[key];
    this.setState({ books });
  };
  toggleEditMode = () => {
    const isEditable = this.state.isEditable ? false : true;
    this.setState({ isEditable });
  };
  toggleAddBookModal = () => {
    const addBookModalActive = this.state.addBookModalActive ? false : true;
    this.setState({ addBookModalActive });
  };
  render() {
    return (
      <main>
        <Header
          toggleEditMode={this.toggleEditMode}
          toggleAddBookModal={this.toggleAddBookModal}
          addBook={this.addBook}
          addBookModalActive={this.state.addBookModalActive}
        />
        <Library
          books={this.state.books}
          isEditable={this.state.isEditable}
          updateBook={this.updateBook}
          deleteBook={this.deleteBook}
        />
      </main>
    );
  }
}
export default App;
