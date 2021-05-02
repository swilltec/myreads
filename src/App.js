import React from "react";
import "./App.css";

import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";

export const shelves = [
  {
    value: "currentlyReading",
    label: "Currently Reading",
  },
  {
    value: "wantToRead",
    label: "Want to Read",
  },
  {
    value: "read",
    label: "Read",
  },
  {
    value: "none",
    label: "None",
  },
];


class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  getAllBooks(){
    BooksAPI.getAll().then((response) => {
      this.setState({ books: response });
    });
  }

  componentDidMount() {
    this.getAllBooks()
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
     this.getAllBooks()
    });
  
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.map((shelf) => {
                  if (shelf.value === "none") {
                    return "";
                  }
                  return (
                    <BookShelf
                      key={shelf.value}
                      shelf={shelf}
                      updateShelf={this.updateShelf}
                      books={this.state.books.filter(
                        (book) => book.shelf === shelf.value
                      )}
                    />
                  );
                })}
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
