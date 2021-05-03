import React from "react";
import { Link } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchPage extends React.Component {
  state = {
    query: "",
    result: [],
  };

  updateQuery(query) {
    this.setState({ query: query });
    if (query.length > 0) {
      BooksAPI.search(query).then((data) => {
        if (!Array.isArray(data)) {
          this.setState({ result: [] });
        }

        if (data.length > 0) {
          this.setState({ result: data });
        }
      });
    }
  }

  swapBook(book, library) {}

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => {
                this.updateQuery(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.result &&
              this.state.query &&
              this.state.result.map((bookItem) => {
                const findBook = this.props.books.find(
                  (b) => b.id === bookItem.id
                );
                const bookShelf = findBook ? findBook.shelf : "none";
                return (
                  <li key={bookItem.id}>
                    <Book
                      shelfValue={bookShelf}
                      updateShelf={this.props.updateShelf}
                      book={bookItem}
                    />
                  </li>
                );
              })}

            {this.state.query === "" && 
              <li> Enter search keyword </li>
            }
            {this.state.result.length === 0 && this.state.query.length > 0 && 
              <li> No matched result</li>
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
