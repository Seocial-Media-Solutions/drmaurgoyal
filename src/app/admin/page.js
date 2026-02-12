'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import {
    Calendar,
    CheckCircle,
    XCircle,
    Clock,
    Users
} from 'lucide-react';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        total: 0,
        accepted: 0,
        declined: 0,
        pending: 0,
        today: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            if (!db) return;

            try {
                const querySnapshot = await getDocs(collection(db, "bookings"));
                let total = 0;
                let accepted = 0;
                let declined = 0;
                let pending = 0;
                let today = 0;

                const todayStr = new Date().toISOString().split('T')[0];

                querySnapshot.forEach((doc) => {
                    total++;
                    const data = doc.data();

                    if (data.status === 'accepted') accepted++;
                    else if (data.status === 'declined') declined++;
                    else pending++;

                    if (data.date === todayStr) today++;
                });

                setStats({ total, accepted, declined, pending, today });
            } catch (error) {
                console.error("Error fetching stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const cards = [
        {
            title: 'Total Bookings',
            value: stats.total,
            icon: Calendar,
            color: 'bg-blue-500',
            textColor: 'text-blue-500',
            bgColor: 'bg-blue-50'
        },
        {
            title: 'Pending',
            value: stats.pending,
            icon: Clock,
            color: 'bg-orange-500',
            textColor: 'text-orange-500',
            bgColor: 'bg-orange-50'
        },
        {
            title: 'Accepted',
            value: stats.accepted,
            icon: CheckCircle,
            color: 'bg-green-500',
            textColor: 'text-green-500',
            bgColor: 'bg-green-50'
        },
        {
            title: 'Today',
            value: stats.today,
            icon: Users,
            color: 'bg-purple-500',
            textColor: 'text-purple-500',
            bgColor: 'bg-purple-50'
        }
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-600 mt-2">Welcome back, Admin. Here&apos;s what&apos;s happening today.</p>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-32 animate-pulse">
                            <div className="h-4 bg-slate-200 rounded w-1/2 mb-4"></div>
                            <div className="h-8 bg-slate-200 rounded w-1/4"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-xs border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium text-slate-600 mb-1">{card.title}</p>
                                        <h3 className="text-3xl font-bold text-slate-900">{card.value}</h3>
                                    </div>
                                    <div className={`p-3 rounded-lg ${card.bgColor}`}>
                                        <Icon className={`w-6 h-6 ${card.textColor}`} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-8 text-white shadow-lg mb-8 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-2">Manage Appointments</h2>
                    <p className="text-teal-50 mb-6 max-w-xl">
                        View, accept, or decline patient appointments. Keep track of your schedule efficiently.
                    </p>
                    <a
                        href="/admin/bookings"
                        className="inline-block bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors shadow-sm"
                    >
                        Go to Bookings
                    </a>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-teal-900 opacity-10 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}
           