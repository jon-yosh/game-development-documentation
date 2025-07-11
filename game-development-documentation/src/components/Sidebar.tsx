import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [showBlender, setShowBlender] = useState(true);
    const [showGodot, setShowGodot] = useState(true);

    return (
        <aside className={`sidebar-wrapper ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-content">
                <div className="sidebar">
                    <div className="sections">
                        <div className="section">
                            <button onClick={() => setShowBlender(!showBlender)} className="section-title">
                                ▶ Blender Articles
                            </button>
                            {showBlender && (
                                <ul className="link-list">
                                    <li><a href="#">Intro to Blender</a></li>
                                    <li><a href="#">Modeling Basics</a></li>
                                </ul>
                            )}
                        </div>

                        <div className="section">
                            <button onClick={() => setShowGodot(!showGodot)} className="section-title">
                                ▶ Godot Articles
                            </button>
                            {showGodot && (
                                <ul className="link-list">
                                    <li><a href="#">Character Movement v1.0</a></li>
                                    <li><a href="#">Character Movement v1.1</a></li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                <button
                    className={`sidebar-toggle ${collapsed ? 'rotated' : ''}`}
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label={collapsed ? 'Show Sidebar' : 'Hide Sidebar'}
                >
                    <span className="chevron">‹</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
