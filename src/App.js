import React from "react";
import "./App.css";

import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";
import SearchPage from "./SearchPage"

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
    this.state = { 
      books: [],
  }};

  getAllBooks() {
    BooksAPI.getAll().then((response) => {
      this.setState({ books: response });
    });
  }

  componentDidMount() {
    this.getAllBooks();
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks();
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
        <Switch>
          <Route exact path="/search">
            <SearchPage books={this.state.books} updateShelf={this.updateShelf}/>
          </Route>
          <Route exact path="/">
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
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
