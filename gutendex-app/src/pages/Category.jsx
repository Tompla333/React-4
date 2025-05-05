// src/pages/Category.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookCard from '../components/BookCard.jsx'; // 👈 Add this at the top

function Category() {
  const { name } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://gutendex.com/books?search=${name}`);
        const data = await res.json();
        setBooks(data.results);
      } catch (err) {
        console.error('Error fetching books:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [name]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Category: {name}</h1>
      {loading ? (
        <p>Loading books... 📚</p>
      ) : (
        <>
          {books.length === 0 ? (
            <p>No books found for this category 😢</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
           {books.map((book) => (
  <BookCard key={book.id} book={book} />
    ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Category;

