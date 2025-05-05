// src/pages/Home.jsx

import { useEffect, useState } from "react";
import { useFavorites } from "../utils/useFavorites";
import BookCard from "../components/BookCard"; // correct import
import "./Home.css";

function Home() {
  const [topBooks, setTopBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { favorites } = useFavorites();

  useEffect(() => {
    const fetchTopBooks = async () => {
      try {
        const res = await fetch(
          "https://gutendex.com/books?sort=download_count"
        );
        const data = await res.json();
        setTopBooks(data.results.slice(0, 3));
      } catch (err) {
        console.error("Failed to fetch top downloads:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopBooks();
  }, []);

  const recentFavorites = [...favorites].reverse().slice(0, 3);

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Gutendex 🦊📚</h1>

      {loading ? (
        <p>Loading top books... 📚</p>
      ) : (
        <>
          <h2 className="home-subtitle">🔥 Top Downloads</h2>
          <div className="book-grid">
            {topBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </>
      )}

      {recentFavorites.length > 0 && (
        <>
          <h2 className="home-subtitle">💖 Your Recent Favorites</h2>
          <div className="book-grid">
            {recentFavorites.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
