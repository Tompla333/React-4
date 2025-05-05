import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFavorites } from "../utils/useFavorites";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://gutendex.com/books/${id}`);
        const data = await res.json();
        setBook(data);
      } catch (err) {
        console.error("Error loading book:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p>Loading book details... 📘</p>;
  if (!book) return <p>Book not found 🥺</p>;

  const cover = book.formats["image/jpeg"];
  const htmlLink =
    book.formats["text/html; charset=utf-8"] ||
    book.formats["text/plain; charset=utf-8"];
  const authors = book.authors.map((a) => a.name).join(", ");
  const languages = book.languages.join(", ");

  const handleToggleFavorite = () => {
    if (isFavorite(book.id)) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{book.title}</h1>
      {cover && (
        <img
          src={cover}
          alt={book.title}
          style={{ width: "200px", margin: "1rem auto", borderRadius: "10px" }}
        />
      )}
      <p>
        <strong>Author(s):</strong> {authors}
      </p>
      <p>
        <strong>Languages:</strong> {languages}
      </p>
      <p>
        <strong>Downloads:</strong> 📥 {book.download_count.toLocaleString()}
      </p>
      {htmlLink && (
        <p>
          <a href={htmlLink} target="_blank" rel="noreferrer">
            📖 Read this book
          </a>
        </p>
      )}
      <br />
      <button onClick={handleToggleFavorite}>
        {isFavorite(book.id)
          ? "💔 Remove from Favorites"
          : "❤️ Add to Favorites"}
      </button>
    </div>
  );
}

export default BookDetails;
