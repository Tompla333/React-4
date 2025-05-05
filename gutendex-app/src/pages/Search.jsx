import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard.jsx";

function Search() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://gutendex.com/books?search=${query}`);
        const data = await res.json();
        setBooks(data.results);
      } catch (err) {
        console.error("Error during search:", err);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchSearchResults();
  }, [query]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>
        Search results for: <em>{query}</em>
      </h1>
      {loading ? (
        <p>Loading... 🔍</p>
      ) : books.length === 0 ? (
        <p>No results found for "{query}" 😢</p>
      ) : (
        books.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
}

export default Search;
