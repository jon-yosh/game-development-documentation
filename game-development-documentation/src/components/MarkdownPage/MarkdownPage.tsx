import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import "./MarkdownPage.css"
import remarkGfm from 'remark-gfm';

export default function MarkdownPage() {
    const location = useLocation();
    const [content, setContent] = useState('');

    useEffect(() => {
        const base = import.meta.env.BASE_URL;

        const normalizedPath = location.pathname.endsWith('/')
            ? `${location.pathname}README.md`
            : `${location.pathname}.mdx`;
    
        const path = `${base}${normalizedPath}`.replace(/\/{2,}/g, '/');
    
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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
    );
}
