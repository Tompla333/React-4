//Header.jsx
import { Link } from 'react-router-dom';
import './Header.css';
import SearchBar from './SearchBar.jsx';
import CategoryMenu from './CategoryMenu.jsx';

function Header() {
  const handleSearch = (query) => {
    console.log('Search for:', query);
  };

  return (
    <>
      <header className="header">
        <div className="logo">📚 Gutendex</div>

        <nav className="nav-container">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
          </div>
          <SearchBar onSearch={handleSearch} />
        </nav>
      </header>

      <CategoryMenu />
    </>
  );
}


export default Header;

