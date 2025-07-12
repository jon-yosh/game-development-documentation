import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"

const docs = {
    blender: [
    ],
    godot: [
    ],
    git: [
        {
            title: "Git Tree Alias",
            id: "git/git-tree-alias/git-tree-alias"
        },
    ],
    react: [
    ],
    procreate: [
    ],
    inkscape: [
    ],
    gimp: [
    ],
};

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [showBlender, setShowBlender] = useState(true);
    const [showGodot, setShowGodot] = useState(true);
    const [showGit, setShowGit] = useState(true);
    const [showReact, setShowReact] = useState(true);
    const [showProcreate, setShowProcreate] = useState(true);
    const [showInkscape, setShowInkscape] = useState(true);
    const [showGimp, setShowGimp] = useState(true);

    return (
        <aside className={`sidebar-wrapper ${collapsed ? "collapsed" : ""}`}>
            <div className="sidebar-content">
                <div className="sidebar">
                    <div className="sections">

                        {/* Home */}
                        <h3>
                            <Link to={'/'}>{"Home"}</Link>
                        </h3>

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

                        {/* Git */}
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

                        {/* React */}
                        <div className="section">
                            <button
                                onClick={() => setShowReact(!showReact)}
                                className="section-title"
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        transition: "transform 0.3s ease",
                                        transform: showReact ? "rotate(90deg)" : "rotate(0deg)",
                                    }}
                                >
                                    ▶
                                </span>{" "}
                                React
                            </button>
                            {showReact && (
                                <ul className="link-list">
                                    {docs.react.map(({ title, id }) => (
                                        <li key={id}>
                                            <Link to={`/docs/${id}`}>{title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Procreate */}
                        <div className="section">
                            <button
                                onClick={() => setShowProcreate(!showProcreate)}
                                className="section-title"
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        transition: "transform 0.3s ease",
                                        transform: showProcreate ? "rotate(90deg)" : "rotate(0deg)",
                                    }}
                                >
                                    ▶
                                </span>{" "}
                                Procreate
                            </button>
                            {showProcreate && (
                                <ul className="link-list">
                                    {docs.procreate.map(({ title, id }) => (
                                        <li key={id}>
                                            <Link to={`/docs/${id}`}>{title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Inkscape */}
                        <div className="section">
                            <button
                                onClick={() => setShowInkscape(!showInkscape)}
                                className="section-title"
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        transition: "transform 0.3s ease",
                                        transform: showInkscape ? "rotate(90deg)" : "rotate(0deg)",
                                    }}
                                >
                                    ▶
                                </span>{" "}
                                Inkscape
                            </button>
                            {showInkscape && (
                                <ul className="link-list">
                                    {docs.inkscape.map(({ title, id }) => (
                                        <li key={id}>
                                            <Link to={`/docs/${id}`}>{title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Gimp */}
                        <div className="section">
                            <button
                                onClick={() => setShowGimp(!showGimp)}
                                className="section-title"
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        transition: "transform 0.3s ease",
                                        transform: showGimp ? "rotate(90deg)" : "rotate(0deg)",
                                    }}
                                >
                                    ▶
                                </span>{" "}
                                Gimp
                            </button>
                            {showGimp && (
                                <ul className="link-list">
                                    {docs.gimp.map(({ title, id }) => (
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
