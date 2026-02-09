'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase/firebaseConfig';
import { deleteDoc, doc } from 'firebase/firestore';
import Link from 'next/link';
import { Edit, Trash2, Globe } from 'lucide-react';

export default function BlogActions({ blogId, slug }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
            try {
                await deleteDoc(doc(db, "blogs", blogId));
                router.push('/admin/content');
                router.refresh(); // Refresh the server component
            } catch (error) {
                console.error("Error deleting blog:", error);
                alert("Failed to delete blog post.");
            }
        }
    };

    return (
        <div className="flex items-center space-x-3">
            <a
                href={`/blog/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-colors text-sm font-medium"
            >
                <Globe className="w-4 h-4 mr-2" />
                View Live
            </a>
            <button
                onClick={handleDelete}
                className="flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-red-600 hover:bg-red-50 hover:border-red-200 transition-colors text-sm font-medium"
            >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
            </button>
            <Link
                href={`/admin/content/edit/${blogId}`}
                className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium shadow-sm"
            >
                <Edit className="w-4 h-4 mr-2" />
                Edit Blog
            </Link>
        </div>
    );
}
