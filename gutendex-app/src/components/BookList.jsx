import { Link } from "react-router-dom";

function BookList({ book }) {
  const cover = book.formats["image/jpeg"];
  const authors = book.authors.map((a) => a.name).join(", ");

  return (
    <Link
      to={`/book/${book.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          background: "#fff5fa",
          border: "1px solid pink",
          borderRadius: "10px",
          padding: "1rem",
          boxShadow: "0 2px 5px rgba(255, 192, 203, 0.4)",
        }}
      >
        <img
          src={cover}
          alt={book.title}
          style={{ width: "60px", height: "auto", borderRadius: "6px" }}
        />
        <div>
          <h3 style={{ marginBottom: "0.2rem", color: "#e91e63" }}>
            {book.title}
          </h3>
          <p style={{ marginBottom: "0.3rem" }}>{authors}</p>
          <p style={{ fontSize: "0.9rem" }}>
            📥 {book.download_count.toLocaleString()} downloads
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BookList;
