import { useState } from "react";
import { Link } from "react-router-dom";
import { docs } from "../../docs";
import "./Sidebar.css"

// Define the type for docs structure
type DocItem = {
    title: string;
    id: string;
};

type DocsType = Record<string, DocItem[]>;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    
    // Get section names from docs object
    const sectionNames = Object.keys(docs as DocsType);
    
    // Initialize state for all sections
    const [sectionVisibility, setSectionVisibility] = useState<Record<string, boolean>>(
        sectionNames.reduce((acc, section) => {
            acc[section] = true;
            return acc;
        }, {} as Record<string, boolean>)
    );

    const toggleSection = (sectionName: string) => {
        setSectionVisibility(prev => ({
            ...prev,
            [sectionName]: !prev[sectionName]
        }));
    };

    return (
        <aside className={`sidebar-wrapper ${collapsed ? "collapsed" : ""}`}>
            <div className="sidebar-content">
                <div className="sidebar">
                    <div className="sections">

                        {/* Home */}
                        <h3>
                            <Link style={{color: "black"}} to={'/'}>{"Home"}</Link>
                        </h3>

                        {/* Dynamic Sections */}
                        {sectionNames.map(sectionName => (
                            <div key={sectionName} className="section">
                                <button
                                    onClick={() => toggleSection(sectionName)}
                                    className="section-title"
                                >
                                    <span
                                        style={{
                                            display: "inline-block",
                                            transition: "transform 0.3s ease",
                                            transform: sectionVisibility[sectionName] ? "rotate(90deg)" : "rotate(0deg)",
                                        }}
                                    >
                                        ▶
                                    </span>{" "}
                                    {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
                                </button>
                                {sectionVisibility[sectionName] && (
                                    <ul className="link-list">
                                        {(docs as DocsType)[sectionName].map(({ title, id }) => (
                                            <li className="links" key={id}>
                                                <Link to={`/docs/${id}`}>{title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        {/* End of Sections */}
                    </div>
                </div>

                <button
                    className={`sidebar-toggle ${collapsed ? "rotated" : ""}`}
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label={collapsed ? "Show Sidebar" : "Hide Sidebar"}
                >
                    <span className="arrow">◀</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;