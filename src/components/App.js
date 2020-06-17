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
          priority: 1,
          isRead: "true",
        },
        Book2: {
          title: "A Wizard of Earthsea",
          author: "Ursula K. Le Guin",
          pages: 267,
          priority: 2,
          isRead: "false",
        },

        Book3: {
          title: "The Blade Itself",
          author: "Joe Abercrombie",
          pages: 596,
          priority: 3,
          isRead: "false",
        },
      },
      isEditable: true,
    };
  }

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
  render() {
    return (
      <main>
        <Header />
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
