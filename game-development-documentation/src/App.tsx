import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import MarkdownPage from './components/MarkdownPage/MarkdownPage';
import './index.css';

const base = import.meta.env.BASE_URL;

function App() {
  return (
    <Router basename={base}>
      <div className="app-container">
        <header className="header tiled-background">
          <Link to="/">
            <h1 className='website-title'>Game Development Docs</h1>
          </Link>
        </header>

        <div className="content-layout">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MarkdownPage />} />
            <Route path="/docs/*" element={<MarkdownPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;