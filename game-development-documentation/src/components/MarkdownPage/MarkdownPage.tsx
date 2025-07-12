import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import "./MarkdownPage.css"

export default function MarkdownPage() {
    const location = useLocation();
    const [content, setContent] = useState('');

    useEffect(() => {
        const base = import.meta.env.BASE_URL;
        const path = location.pathname === '/' ? `${base}/README.md` : `${base}${location.pathname}.md`;

        fetch(path)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.text();
            })
            .then(setContent)
            .catch(() => setContent('# 404 - Not Found'));
    }, [location.pathname]);

    return (
        <div className="markdown-content">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}
