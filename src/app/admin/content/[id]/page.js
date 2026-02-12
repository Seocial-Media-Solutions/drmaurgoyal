import React from 'react';
import { db } from '@/firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { ArrowLeft, Calendar, User, Tag, FileText, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BlogActions from './BlogActions';

export const revalidate = 0;

async function getBlog(id) {
    try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        }
        return null;
    } catch (err) {
        console.error("Error fetching blog:", err);
        return null;
    }
}

export default async function BlogDetailsPage({ params }) {
    // Await params as required in Next.js 15+
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const blog = await getBlog(id);

    if (!blog) {
        return (
            <div className="max-w-4xl mx-auto py-10 px-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
                    <h2 className="text-xl font-bold text-red-700 mb-2">Blog Not Found</h2>
                    <p className="text-red-600 mb-6">The blog post you requested could not be found.</p>
                    <Link
                        href="/admin/content"
                        className="inline-flex items-center px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center">
                    <Link
                        href="/admin/content"
                        className="mr-4 p-2 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors text-slate-600"
                        title="Back to list"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 line-clamp-1">{blog.title}</h1>
                        <p className="text-slate-500 text-sm mt-1 flex items-center">
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-xs font-mono text-slate-600 border border-slate-200 mr-2">
                                /{blog.slug}
                            </span>
                            ID: {blog.id}
                        </p>
                    </div>
                </div>

                <BlogActions blogId={blog.id} slug={blog.slug} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Image */}
                    {blog.image && (
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="relative h-64 w-full bg-slate-100">
                                <Image
                                    src={blog.image}
                                    alt={blog.alt || blog.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 flex items-center">
                                <ImageIcon className="w-3 h-3 mr-2" />
                                Alt text: {blog.alt || "No alt text provided"}
                            </div>
                        </div>
                    )}

                    {/* Content Preview */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                            <h3 className="font-semibold text-slate-800 flex items-center">
                                <FileText className="w-4 h-4 mr-2 text-slate-400" />
                                Blog Content
                            </h3>
                        </div>
                        <div className="p-8 prose max-w-none prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-teal-600">
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </div>
                    </div>
                </div>

                {/* Sidebar Details Column */}
                <div className="space-y-6">
                    {/* Meta Info Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="px-5 py-3 border-b border-slate-100 bg-slate-50 font-medium text-slate-800">
                            Publication Details
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 block">Publish Date</label>
                                <div className="flex items-center text-slate-700">
                                    <Calendar className="w-4 h-4 mr-2 text-teal-500" />
                                    {blog.date}
                                </div>
                            </div>

                            <div className="h-px bg-slate-100 w-full"></div>

                            <div>
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 block">Author</label>
                                <div className="flex items-center text-slate-700">
                                    <User className="w-4 h-4 mr-2 text-teal-500" />
                                    {blog.author}
                                </div>
                            </div>

                            <div className="h-px bg-slate-100 w-full"></div>

                            <div>
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 block">Heading</label>
                                <p className="text-sm text-slate-700">{blog.heading}</p>
                            </div>
                        </div>
                    </div>

                    {/* SEO Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="px-5 py-3 border-b border-slate-100 bg-slate-50 font-medium text-slate-800">
                            SEO & Metadata
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 block">Meta Description</label>
                                <p className="text-sm text-slate-600 leading-relaxed italic">
                                    {blog.metaDescription || "No description provided"}
                                </p>
                            </div>

                            <div className="h-px bg-slate-100 w-full"></div>

                            <div>
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Tags</label>
                                <div className="flex flex-wrap gap-2">
                                    {Array.isArray(blog.tags) && blog.tags.length > 0 ? (
                                        blog.tags.map((tag, index) => (
                                            <span key={index} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100">
                                                <Tag className="w-3 h-3 mr-1" />
                                                {tag}
                                            </span>
                                        ))
                                    ) : (
                                        typeof blog.tags === 'string' && blog.tags ? (
                                            blog.tags.split(',').map((tag, index) => (
                                                <span key={index} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100">
                                                    <Tag className="w-3 h-3 mr-1" />
                                                    {tag.trim()}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-xs text-slate-400">No tags</span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Excerpt Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="px-5 py-3 border-b border-slate-100 bg-slate-50 font-medium text-slate-800">
                            Excerpt
                        </div>
                        <div className="p-5">
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {blog.excerpt || "No excerpt provided"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
