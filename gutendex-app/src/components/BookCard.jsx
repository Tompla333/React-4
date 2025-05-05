// src/components/BookCard.jsx
import "./BookCard.css";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  const cover = book.formats["image/jpeg"];
  const author = book.authors[0]?.name || "Unknown Author";

  return (
    <div className="book-card">
      {cover && <img src={cover} alt={book.title} className="book-cover" />}
      <div className="book-info">
        <h3>
          <Link to={`/book/${book.id}`} className="book-link">
            {book.title}
          </Link>
        </h3>
        <p>{author}</p>
        <p>📥 {book.download_count.toLocaleString()} downloads</p>
        {/* Favorite button can be added here later */}
      </div>
    </div>
  );
}

export default BookCard;
