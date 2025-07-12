import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

export default function MarkdownPage() {
    const location = useLocation();
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(`${location.pathname}.md`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.text();
            })
            .then(setContent)
            .catch(() => setContent('# 404 - Not Found'));
    }, [location.pathname]);

    return (
        <div className="markdown-page">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}
