// App.jsx
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <p>Layout loaded 🦊</p>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App; // ✅ This goes at the end
