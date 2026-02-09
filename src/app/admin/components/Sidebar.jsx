'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Calendar,
    Settings,
    LogOut,
    Users,
    FileText
} from 'lucide-react';
import { logout } from '@/app/actions/auth';

const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        {
            title: 'Dashboard',
            path: '/admin',
            icon: LayoutDashboard
        },
        {
            title: 'Appointments',
            path: '/admin/bookings',
            icon: Calendar
        },
        {
            title: 'Patients',
            path: '/admin/patients',
            icon: Users
        },
        {
            title: 'Blogs',
            path: '/admin/content',
            icon: FileText
        },
        {
            title: 'Settings',
            path: '/admin/settings',
            icon: Settings
        }
    ];

    const handleLogout = async () => {
        await logout();
    };

    return (
        <div className="   bottom-0 bg-white text-slate-800 lg:w-64 lg:min-h-screen lg:flex-col lg:shadow-xl lg:border-r lg:border-slate-200 w-full h-16 flex flex-row justify-between items-center border-t border-slate-200 z-50 lg:relative lg:h-auto font-sans transition-all duration-300">
            {/* Desktop Header */}
            <div className="hidden lg:flex flex-col p-6 border-b border-slate-100 items-center justify-center">
                <h1 className="font-bold text-[ 12px] tracking-wide text-slate-800">
                    Admin Panel
                </h1>
                <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-[0.2em] font-medium">Dashboard</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 lg:py-8 lg:px-4 lg:space-y-2 flex flex-row lg:flex-col justify-around w-full">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`relative flex lg:flex-row flex-col items-center lg:px-4 lg:py-3 py-1 px-2 rounded-xl transition-all duration-300 group ${isActive
                                ? 'lg:bg-teal-50 text-teal-600 lg:shadow-sm'
                                : 'text-slate-500 hover:text-slate-800 lg:hover:bg-slate-50'
                                }`}
                        >
                            <Icon className={`w-5 h-5 lg:mr-3 mb-1 lg:mb-0 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-teal-600' : 'text-slate-500 group-hover:text-slate-800'
                                }`} />
                            <span className="text-[10px] lg:text-sm font-medium tracking-wide">{item.title}</span>

                            {/* Active Indicator for Desktop */}
                            {isActive && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-teal-600 rounded-l-full"></div>
                            )}
                        </Link>
                    );
                })}

                {/* Mobile Logout (Hidden on Desktop) */}
                <button
                    onClick={handleLogout}
                    className="flex lg:hidden flex-col items-center py-1 px-2 rounded-lg transition-colors text-slate-500 hover:text-red-500"
                >
                    <LogOut className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-medium">Logout</span>
                </button>
            </nav>

            {/* Desktop Logout Section */}
            <div className="hidden lg:block p-4 border-t border-slate-100">
                <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-3 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all duration-300 group"
                >
                    <LogOut className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
