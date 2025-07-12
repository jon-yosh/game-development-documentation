import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import MarkdownPage from './components/MarkdownPage/MarkdownPage';
import './index.css';

function Intro() {
  return (
    <div className="intro-content">
      <p>
        Welcome to the documentation site! Here you'll find tutorials and articles for tools like Blender and Godot.
        Use the sidebar to navigate between topics and versions of each article.
      </p>
      <p>
        This site is designed for beginners and intermediate developers working on indie games or learning asset
        creation pipelines.
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <Link to="/">
            <h1>Game Development Docs</h1>
          </Link>
        </header>

        <div className="content-layout">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/docs/*" element={<MarkdownPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;