import Sidebar from './components/Sidebar';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Game Development Docs</h1>
      </header>

      <div className="content-layout">
        <Sidebar />
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
      </div>
    </div>
  );
}

export default App;