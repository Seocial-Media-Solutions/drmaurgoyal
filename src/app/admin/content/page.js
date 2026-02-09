import React from 'react';
import { db } from '@/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import BlogListTable from './BlogListTable';

export const revalidate = 0; // Ensure fresh data on every request

async function getBlogs() {
    try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = [];
        querySnapshot.forEach((doc) => {
            blogsData.push({ id: doc.id, ...doc.data() });
        });
        // Sort by date (descending)
        blogsData.sort((a, b) => new Date(b.date) - new Date(a.date));
        return blogsData;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
}

export default async function ContentPage() {
    const blogs = await getBlogs();

    return (
        <div>
            <BlogListTable initialBlogs={blogs} />
        </div>
    );
}
