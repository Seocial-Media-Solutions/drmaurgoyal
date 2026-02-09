'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { db } from '@/firebase/firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ArrowLeft, Save } from 'lucide-react';
import RichTextEditor from '../../../components/RichTextEditor';

export default function EditBlogPage() {
    const router = useRouter();
    const params = useParams();
    const { id } = params || {};

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [showJsonMode, setShowJsonMode] = useState(false);
    const [jsonInput, setJsonInput] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        heading: '',
        slug: '',
        content: '',
        excerpt: '',
        image: '',
        alt: '',
        date: '',
        author: '',
        tags: '',
        metaDescription: ''
    });

    useEffect(() => {
        const fetchBlog = async () => {
            if (!id) return;

            try {
                const docRef = doc(db, "blogs", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const initialData = {
                        title: data.title || '',
                        heading: data.heading || '',
                        slug: data.slug || '',
                        content: data.content || '',
                        excerpt: data.excerpt || '',
                        image: data.image || '',
                        alt: data.alt || '',
                        date: data.date || '',
                        author: data.author || '',
                        tags: Array.isArray(data.tags) ? data.tags.join(', ') : (data.tags || ''),
                        metaDescription: data.metaDescription || ''
                    };
                    setFormData(initialData);
                } else {
                    alert("Blog post not found");
                    router.push('/admin/content');
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
                alert("Error loading blog details");
            } finally {
                setFetching(false);
            }
        };

        fetchBlog();
    }, [id, router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Auto-generate slug from title if slug is empty
        if (name === 'title' && !formData.slug) {
            const slug = value
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
            setFormData(prev => ({ ...prev, slug: slug }));
        }
    };

    const handleJsonPopulate = () => {
        try {
            let parsedData = JSON.parse(jsonInput);

            // Handle array input (take first item)
            if (Array.isArray(parsedData) && parsedData.length > 0) {
                parsedData = parsedData[0];
            } else if (Array.isArray(parsedData)) {
                throw new Error("JSON is an empty array.");
            }

            // Map JSON fields to form state
            setFormData(prev => ({
                ...prev,
                title: parsedData.title || prev.title,
                heading: parsedData.heading || prev.heading,
                slug: parsedData.slug || prev.slug,
                content: parsedData.content || prev.content,
                excerpt: parsedData.excerpt || prev.excerpt,
                image: parsedData.image || prev.image,
                alt: parsedData.alt || prev.alt,
                date: parsedData.date || prev.date,
                author: parsedData.author || prev.author,
                tags: Array.isArray(parsedData.tags) ? parsedData.tags.join(', ') : (parsedData.tags || prev.tags),
                metaDescription: parsedData.metaDescription || prev.metaDescription
            }));

            alert('Form populated successfully from JSON!');
            setShowJsonMode(false);
        } catch (error) {
            alert('Invalid JSON: ' + error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Process tags
            const tagsArray = formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];

            const blogData = {
                ...formData,
                tags: tagsArray,
                updatedAt: new Date().toISOString()
            };

            // Update Firestore
            await updateDoc(doc(db, "blogs", id), blogData);

            alert('Blog updated successfully!');
            router.push(`/admin/content/${id}`);
        } catch (error) {
            console.error("Error updating blog: ", error);
            alert(`Error updating blog: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 border-b-2 border-teal-600 rounded-full animate-spin mb-4"></div>
                    <p className="text-slate-500">Loading editor...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto pb-10">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <button
                        onClick={() => router.back()}
                        className="mr-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-slate-600" />
                    </button>
                    <h1 className="text-2xl font-bold text-slate-900">Edit Blog Post</h1>
                </div>
                <button
                    onClick={() => setShowJsonMode(!showJsonMode)}
                    className="text-sm px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                >
                    {showJsonMode ? 'Switch to Form Mode' : 'Developer JSON Mode'}
                </button>
            </div>

            {showJsonMode && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-slate-700">Paste JSON Object</h3>
                        <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded border">Dev Tool</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">Paste your raw JSON object here to auto-fill the form fields below.</p>
                    <textarea
                        value={jsonInput}
                        onChange={(e) => setJsonInput(e.target.value)}
                        className="w-full h-64 p-4 font-mono text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent mb-4 text-black placeholder:text-slate-500"
                        placeholder='{
  "title": "Example Blog Title",
  "heading": "Example Heading",
  "slug": "example-slug",
  "content": "<p>Content goes here...</p>",
  ...
}'
                    ></textarea>
                    <div className="flex justify-end">
                        <button
                            onClick={handleJsonPopulate}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                            Populate Form from JSON
                        </button>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title & Slug */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-900 mb-1">Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-black placeholder:text-slate-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-900 mb-1">Slug</label>
                            <input
                                type="text"
                                name="slug"
                                required
                                value={formData.slug}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-slate-50 text-black placeholder:text-slate-500"
                            />
                        </div>
                    </div>

                    {/* Heading & Author */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-900 mb-1">Heading</label>
                            <input
                                type="text"
                                name="heading"
                                required
                                value={formData.heading}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-black placeholder:text-slate-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-900 mb-1">Author</label>
                            <input
                                type="text"
                                name="author"
                                required
                                value={formData.author}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-black placeholder:text-slate-500"
                            />
                        </div>
                    </div>

                    {/* Description & Tags */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-900 mb-1">Meta Description</label>
                            <textarea
                                name="metaDescription"
                                rows="3"
                                value={formData.metaDescription}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-black placeholder:text-slate-500"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-900 mb-1">Tags (comma separated)</label>
                            <textarea
                                name="tags"
                                rows="3"
                                placeholder="e.g. newborn, health, tips"
                                value={formData.tags}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-black placeholder:text-slate-500"
                            ></textarea>
                        </div>
                    </div>

                    {/* Image & Alt */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-900 mb-1">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                placeholder="/images/example.jpg or https://..."
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-black placeholder:text-slate-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-900 mb-1">Image Alt Text</label>
                            <input
                                type="text"
                                name="alt"
                                value={formData.alt}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-black placeholder:text-slate-500"
                            />
                        </div>
                    </div>

                    {/* Content (Rich Text) */}
                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">Content</label>
                        <RichTextEditor
                            value={formData.content}
                            onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                        />
                    </div>

                    {/* Excerpt */}
                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-1">Excerpt</label>
                        <textarea
                            name="excerpt"
                            rows="3"
                            value={formData.excerpt}
                            onChange={handleChange}
                            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-black placeholder:text-slate-500"
                        ></textarea>
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-slate-900 mb-1">Publish Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full md:w-1/3 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-black placeholder:text-slate-500"
                        />
                    </div>

                    <div className="flex justify-end border-t border-slate-100 pt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex items-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-sm disabled:opacity-70"
                        >
                            <Save className="w-5 h-5 mr-2" />
                            {loading ? 'Saving...' : 'Update Blog Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
