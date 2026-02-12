'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { db } from '@/firebase/firebaseConfig';
import {
    collection,
    getDocs,
    query,
    doc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import {
    Search,
    Filter,
    Trash2,
    Check,
    X,
    Calendar,
    Phone,
    Mail,
    User,
    Clock
} from 'lucide-react';

export default function BookingsPage() {
    // Booking data state
    const [bookings, setBookings] = useState([]);
    const [filteredBookings, setFilteredBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterDate, setFilterDate] = useState('');
    const [filterName, setFilterName] = useState('');
    const [loadingBookings, setLoadingBookings] = useState({});
    const [deleteConfirmation, setDeleteConfirmation] = useState(null);

    // Format time to 12-hour format with AM/PM
    const formatTime = (time24h) => {
        if (!time24h) return '';
        const [hours, minutes] = time24h.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minutes} ${ampm}`;
    };

    // Format date for display
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Fetch bookings from Firestore
    const fetchBookings = async () => {
        if (!db) return;

        setIsLoading(true);

        try {
            const bookingsQuery = query(collection(db, "bookings"));
            const querySnapshot = await getDocs(bookingsQuery);
            const bookingsData = [];

            querySnapshot.forEach((doc) => {
                bookingsData.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });

            // Sort the data after fetching
            bookingsData.sort((a, b) => {
                // First by date (descending)
                if (a.date !== b.date) return b.date.localeCompare(a.date);
                // Then by timeSlot (ascending)
                return a.timeSlot.localeCompare(b.timeSlot);
            });

            setBookings(bookingsData);
            setFilteredBookings(bookingsData);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Apply filters to bookings
    const applyBookingsFilters = useCallback(() => {
        let filtered = [...bookings];

        // Apply date filter
        if (filterDate) {
            filtered = filtered.filter(booking => booking.date === filterDate);
        }

        // Apply name filter
        if (filterName) {
            const searchTerm = filterName.toLowerCase();
            filtered = filtered.filter(booking =>
                booking.fullName?.toLowerCase().includes(searchTerm) ||
                booking.email?.toLowerCase().includes(searchTerm) ||
                booking.phoneNumber?.includes(searchTerm)
            );
        }

        setFilteredBookings(filtered);
    }, [bookings, filterDate, filterName]);

    // Fetch bookings when component mounts
    useEffect(() => {
        fetchBookings();
    }, []);

    // Apply filters when filter values change
    useEffect(() => {
        if (bookings.length > 0) {
            applyBookingsFilters();
        }
    }, [applyBookingsFilters, bookings.length]);

    // Clear filters
    const clearFilters = () => {
        setFilterDate('');
        setFilterName('');
    };

    // Handle Action
    const handleAction = async (booking, action) => {
        try {
            setLoadingBookings(prev => ({ ...prev, [booking.id]: action }));

            let newStatus = action === 'accept' ? 'accepted' : 'declined';
            const bookingRef = doc(db, "bookings", booking.id);

            await updateDoc(bookingRef, {
                status: newStatus,
            });

            // Email Logic
            const isAccept = action === 'accept';
            const templateParams = {
                title: isAccept ? "Appointment Confirmed" : "Appointment Declined",
                header_title: isAccept ? "Appointment Confirmed" : "Appointment Update",
                greeting: `Hello ${booking.fullName},`,
                status: isAccept ? "ACCEPTED" : "DECLINED",
                status_color: isAccept ? "#27ae60" : "#e74c3c",
                status_bg: isAccept ? "#e8f8f5" : "#fdf2f2",
                patient_name: booking.fullName,
                patient_phone: booking.phoneNumber,
                patient_email: booking.email,
                date: formatDate(booking.date),
                time: formatTime(booking.timeSlot),
                location: booking.location,
                note: isAccept
                    ? "Please arrive 15 minutes before your scheduled appointment time. Bring any previous medical records."
                    : "We apologize, but we cannot accommodate this appointment at the requested time. Please contact us to reschedule.",
                email: booking.email,
                name: booking.fullName,
                phone: booking.phoneNumber
            };

            await emailjs.send(
                "service_ku69g1w",
                "template_jkovjp6",
                templateParams,
                "Zwd0KGJMF44D8dGTT"
            );

            fetchBookings();
        } catch (error) {
            console.error(`Error ${action} consultation:`, error);
        } finally {
            setLoadingBookings(prev => ({ ...prev, [booking.id]: false }));
        }
    };

    // Function to handle deleting a consultation
    const handleDeleteConsultation = async (bookingId) => {
        try {
            setLoadingBookings(prev => ({ ...prev, [bookingId]: 'deleting' }));
            await deleteDoc(doc(db, "bookings", bookingId));
            fetchBookings();
        } catch (error) {
            console.error("Error deleting consultation:", error);
        } finally {
            setLoadingBookings(prev => ({ ...prev, [bookingId]: false }));
            setDeleteConfirmation(null);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Appointments</h1>
                    <p className="text-slate-600 mt-2">Manage your patient bookings and schedules</p>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                <div className="flex flex-col md:flex-row gap-4 items-end">
                    <div className="w-full md:w-1/3">
                        <label className="block text-sm font-medium text-slate-900 mb-1">Search Patient</label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <input
                                type="text"
                                value={filterName}
                                onChange={(e) => setFilterName(e.target.value)}
                                placeholder="Name, email, or phone..."
                                className="pl-10 w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-black placeholder:text-slate-500"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <label className="block text-sm font-medium text-slate-900 mb-1">Filter by Date</label>
                        <input
                            type="date"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            className="w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-black"
                        />
                    </div>
                    <div>
                        <button
                            onClick={clearFilters}
                            className="px-4 py-2 text-slate-600 hover:text-black font-medium"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                {isLoading ? (
                    <div className="p-12 text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
                        <p className="text-slate-500 mt-2">Loading appointments...</p>
                    </div>
                ) : filteredBookings.length === 0 ? (
                    <div className="p-12 text-center">
                        <div className="inline-block p-4 rounded-full bg-slate-50 mb-3">
                            <Calendar className="w-8 h-8 text-slate-400" />
                        </div>
                        <p className="text-slate-600 font-medium">No appointments found</p>
                        <p className="text-slate-400 text-sm mt-1">Try adjusting your filters</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient Info</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Appointment</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200">
                                {filteredBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-sm">
                                                    {booking.fullName?.charAt(0) || 'P'}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-black">{booking.fullName}</div>
                                                    <div className="text-xs text-slate-600 flex items-center mt-0.5">
                                                        <Mail className="w-3 h-3 mr-1" /> {booking.email}
                                                    </div>
                                                    <div className="text-xs text-slate-600 flex items-center mt-0.5">
                                                        <Phone className="w-3 h-3 mr-1" /> {booking.phoneNumber}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-black flex items-center">
                                                <Calendar className="w-4 h-4 mr-2 text-slate-500" />
                                                {formatDate(booking.date)}
                                            </div>
                                            <div className="text-sm text-slate-600 flex items-center mt-1">
                                                <Clock className="w-4 h-4 mr-2 text-slate-400" />
                                                {formatTime(booking.timeSlot)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.consultationType === 'clinic'
                                                ? 'bg-blue-50 text-blue-700 border border-blue-100'
                                                : 'bg-purple-50 text-purple-700 border border-purple-100'
                                                }`}>
                                                {booking.consultationType === 'clinic' ? 'Clinic Visit' : 'Hospital Visit'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.status === 'accepted' ? 'bg-green-50 text-green-700 border border-green-100' :
                                                booking.status === 'declined' ? 'bg-red-50 text-red-700 border border-red-100' :
                                                    'bg-yellow-50 text-yellow-700 border border-yellow-100'
                                                }`}>
                                                {booking.status ? booking.status.charAt(0).toUpperCase() + booking.status.slice(1) : 'Pending'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button
                                                    onClick={() => handleAction(booking, 'accept')}
                                                    disabled={loadingBookings[booking.id]}
                                                    className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors disabled:opacity-50"
                                                    title="Accept"
                                                >
                                                    <Check className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleAction(booking, 'decline')}
                                                    disabled={loadingBookings[booking.id]}
                                                    className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                                                    title="Decline"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => setDeleteConfirmation(booking)}
                                                    disabled={loadingBookings[booking.id]}
                                                    className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-100 hover:text-red-500 transition-colors disabled:opacity-50"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            {deleteConfirmation && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 animate-in fade-in zoom-in duration-200">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Delete Appointment</h3>
                        <p className="text-slate-600 mb-6">
                            Are you sure you want to delete the appointment for <span className="font-semibold text-slate-900">{deleteConfirmation.fullName}</span>? This action cannot be undone.
                        </p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setDeleteConfirmation(null)}
                                className="px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleDeleteConsultation(deleteConfirmation.id)}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                                {loadingBookings[deleteConfirmation.id] === 'deleting' ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
