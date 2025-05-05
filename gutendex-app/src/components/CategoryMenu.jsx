// src/components/CategoryMenu.jsx
import { Link } from 'react-router-dom';
import './CategoryMenu.css';

const categories = [
  'Fiction', 'Mystery', 'Thriller', 'Romance', 'Fantasy',
  'Morality', 'Society', 'Power', 'Justice', 'Adventure',
  'Tragedy', 'War', 'Philosophy'
];

function CategoryMenu() {
  return (
    <div className="category-menu">
      {categories.map((cat) => (
        <Link
          key={cat}
          to={`/category/${cat.toLowerCase()}`}
          className="category-link"
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}

export default CategoryMenu;
