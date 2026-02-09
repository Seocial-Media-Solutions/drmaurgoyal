'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar from './components/Sidebar';
import AdminNavbar from './components/AdminNavbar';

export default function AdminLayout({ children }) {
    const pathname = usePathname();

    const isLoginPage = pathname === '/admin/login';

    // Render login page without layout
    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <div className="flex bg-slate-50 min-h-screen">
            {/* Sidebar - Desktop and Mobile */}
            <aside className="fixed bottom-0 left-0 z-50 w-full lg:w-64 lg:inset-y-0 lg:block bg-white border-t lg:border-t-0 border-slate-200 lg:border-r">
                <Sidebar />
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 pb-16 lg:pb-0 lg:ml-64">
                <AdminNavbar />

                <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
