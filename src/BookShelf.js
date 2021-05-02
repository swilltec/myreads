import Book from "./Book";
import PropTypes from "prop-types";

function BookShelf({ title, books }) {
 
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((bookItem) => {
              return (
                <li key={bookItem.id}>
                  <Book book={bookItem} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};

export default BookShelf;
