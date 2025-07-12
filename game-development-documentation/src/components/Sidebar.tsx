import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"

const docs = {
    blender: [
        { title: "Intro to Blender", id: "intro-to-blender" },
        { title: "Modeling Basics", id: "modeling-basics" },
    ],
    godot: [
        { title: "Character Movement v1", id: "character-movement-v1" },
        { title: "Character Movement v2", id: "character-movement-v2" },
    ],
    git: [
        { title: "Git Tree Alias", id: "git/git-tree-alias/v1/git-tree-alias-v1" },
        { title: "Character Movement v2", id: "character-movement-v2" },
    ],
    react: [
        { title: "Character Movement v1", id: "character-movement-v1" },
        { title: "Character Movement v2", id: "character-movement-v2" },
    ],
    procreate: [
        { title: "Character Movement v1", id: "character-movement-v1" },
        { title: "Character Movement v2", id: "character-movement-v2" },
    ],
    inkscape: [
        { title: "Character Movement v1", id: "character-movement-v1" },
        { title: "Character Movement v2", id: "character-movement-v2" },
    ],
    gimp: [
        { title: "Character Movement v1", id: "character-movement-v1" },
        { title: "Character Movement v2", id: "character-movement-v2" },
    ],
};

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [showBlender, setShowBlender] = useState(true);
    const [showGodot, setShowGodot] = useState(true);
    const [showGit, setShowGit] = useState(true);

    return (
        <aside className={`sidebar-wrapper ${collapsed ? "collapsed" : ""}`}>
            <div className="sidebar-content">
                <div className="sidebar">
                    <div className="sections">

                        {/* Blender */}
                        <div className="section">
                            <button
                                onClick={() => setShowBlender(!showBlender)}
                                className="section-title"
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        transition: "transform 0.3s ease",
                                        transform: showBlender ? "rotate(90deg)" : "rotate(0deg)",
                                    }}
                                >
                                    ▶
                                </span>{" "}
                                Blender
                            </button>
                            {showBlender && (
                                <ul className="link-list">
                                    {docs.blender.map(({ title, id }) => (
                                        <li key={id}>
                                            <Link to={`/docs/${id}`}>{title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Godot */}
                        <div className="section">
                            <button
                                onClick={() => setShowGodot(!showGodot)}
                                className="section-title"
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        transition: "transform 0.3s ease",
                                        transform: showGodot ? "rotate(90deg)" : "rotate(0deg)",
                                    }}
                                >
                                    ▶
                                </span>{" "}
                                Godot
                            </button>
                            {showGodot && (
                                <ul className="link-list">
                                    {docs.godot.map(({ title, id }) => (
                                        <li key={id}>
                                            <Link to={`/docs/${id}`}>{title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* git */}
                        <div className="section">
                            <button
                                onClick={() => setShowGit(!showGit)}
                                className="section-title"
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        transition: "transform 0.3s ease",
                                        transform: showGit ? "rotate(90deg)" : "rotate(0deg)",
                                    }}
                                >
                                    ▶
                                </span>{" "}
                                Git
                            </button>
                            {showGit && (
                                <ul className="link-list">
                                    {docs.git.map(({ title, id }) => (
                                        <li key={id}>
                                            <Link to={`/docs/${id}`}>{title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* End of Sections */}
                    </div>
                </div>

                <button
                    className={`sidebar-toggle ${collapsed ? "rotated" : ""}`}
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label={collapsed ? "Show Sidebar" : "Hide Sidebar"}
                >
                    <span className="chevron">‹</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
