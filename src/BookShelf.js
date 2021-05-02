import Book from "./Book";
import PropTypes from "prop-types";

function BookShelf({ shelf, books, updateShelf }) {
 
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.label}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((bookItem) => {
              return (
                <li key={bookItem.id}>
                  <Book shelfValue={shelf.value} updateShelf={updateShelf} book={bookItem} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
};

export default BookShelf;
