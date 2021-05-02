import React from "react";

class Book extends React.Component() {
  shelves = [
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
  render() {
    return (
      <div key={book.id} className="book">
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
              {this.shelves.map((option, idx) => {
                return (
                  <option
                    key={`${option.label}idx`}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                );
              })}
              </optgroup>
              <option value="move" disabled>
            
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.state.book.title}</div>
        <div className="book-authors">
          {book.authors.map((author) => ({ author }))}
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.array.isRequired,
};

export default Book;
