// src/pages/Favorites.jsx
import { useFavorites } from "../utils/useFavorites";
import BookCard from "../components/BookCard.jsx";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Your Favorite Books</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet 🥺</p>
      ) : (
        favorites.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
}

export default Favorites;
