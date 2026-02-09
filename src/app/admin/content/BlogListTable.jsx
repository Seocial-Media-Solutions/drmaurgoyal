'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { db } from '@/firebase/firebaseConfig';
import { deleteDoc, doc } from 'firebase/firestore';
import { Plus, Edit, Trash2, ExternalLink, FileText } from 'lucide-react';

export default function BlogListTable({ initialBlogs }) {
    const [blogs, setBlogs] = useState(initialBlogs);

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this blog post?')) {
            try {
                await deleteDoc(doc(db, "blogs", id));
                // Remove from local state immediately for UI feedback
                setBlogs(prev => prev.filter(blog => blog.id !== id));
            } catch (error) {
                console.error("Error deleting blog:", error);
                alert("Failed to delete blog post.");
            }
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Blog Management</h1>
                    <p className="text-slate-600 mt-1">Manage your blog posts and articles</p>
                </div>
                <Link
                    href="/admin/content/add"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors shadow-sm"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Blog
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                {blogs.length === 0 ? (
                    <div className="p-12 text-center">
                        <div className="inline-block p-4 rounded-full bg-slate-50 mb-3">
                            <FileText className="w-8 h-8 text-slate-400" />
                        </div>
                        <p className="text-slate-600 font-medium">No blog posts found</p>
                        <p className="text-slate-400 text-sm mt-1">Start by adding your first blog post</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Title</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Author</th>
                                    <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200">
                                {blogs.map((blog) => (
                                    <tr key={blog.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <Link href={`/admin/content/${blog.id}`} className="block group cursor-pointer">
                                                <div className="text-sm font-medium text-black line-clamp-1 group-hover:text-teal-600 transition-colors">{blog.title}</div>
                                                <div className="text-xs text-slate-600 mt-0.5 line-clamp-1 group-hover:text-teal-500">{blog.slug}</div>
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                            {blog.date}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                            {blog.author}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end space-x-2">
                                                <Link href={`/admin/content/edit/${blog.id}`} className="p-2 text-slate-400 hover:text-teal-600 transition-colors" title="Edit">
                                                    <Edit className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(blog.id)}
                                                    className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                                <a
                                                    href={`/blog/${blog.slug}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                                                    title="View Live"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
