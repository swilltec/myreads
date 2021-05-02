import React from "react";
import PropTypes from "prop-types";
import { shelves } from "./App";


class Book extends React.Component {

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                this.props.book.imageLinks &&
                this.props.book.imageLinks.thumbnail
                  ? `url(${this.props.book.imageLinks.thumbnail})`
                  : "none",
            }}
          ></div>
          <div className="book-shelf-changer">
            <select>
              <optgroup label="Move to...">
                {shelves.map((option, idx) => {
                  return (
                    <option key={`${option.label}idx`} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
          {this.props.book.authors.map((author) => { return author })}
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
