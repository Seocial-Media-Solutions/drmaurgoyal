'use client';

import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import 'react-quill-new/dist/quill.snow.css';

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import('react-quill-new');
        return function Comp(props) {
            return <RQ {...props} />;
        }
    },
    {
        ssr: false,
        loading: () => <p>Loading editor...</p>
    }
);

export default function RichTextEditor({ value, onChange }) {

    const modules = useMemo(() => ({
        toolbar: [
            [{ 'header': [2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean'],
        ]
    }), []);

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet',
        'link', 'image'
    ];

    const handleChange = (content) => {
        // onChange prop from parent: likely expects event object { target: { name, value } }
        // or just the value? The parent pages use `handleChange` which expects `e.target`.
        // So we invoke onChange with a synthetic event.
        if (onChange) {
            onChange({ target: { name: 'content', value: content } });
        }
    };

    return (
        <div className="text-editor">
            <style jsx global>{`
        .ql-editor {
          min-height: 300px;
          font-size: 16px;
          line-height: 1.6;
          color: black;
        }
        .ql-toolbar {
          background-color: #f8fafc;
          border-color: #e2e8f0 !important;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        }
        .ql-container {
          border-color: #e2e8f0 !important;
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
          background-color: white;
        }
      `}</style>
            <ReactQuill
                theme="snow"
                value={value || ''}
                onChange={handleChange}
                modules={modules}
                formats={formats}
                placeholder="Write your blog content here..."
            />
        </div>
    );
}
