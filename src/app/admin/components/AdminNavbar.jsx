'use client';

import React from 'react';
import { User, Bell, Search } from 'lucide-react';

const AdminNavbar = () => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8 shadow-sm">
            <div className="flex items-center gap-4">

                <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2 w-64 lg:w-96">
                    <Search size={18} className="text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full text-slate-900 placeholder:text-slate-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-6">
                <button className="p-2 text-slate-500 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-slate-900 group-hover:text-teal-600 transition-colors">Admin User</p>
                        <p className="text-[10px] text-slate-500 uppercase font-medium tracking-wider">Super Admin</p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminNavbar;
