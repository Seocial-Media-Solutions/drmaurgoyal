'use client';

import { useEffect } from 'react';
import { RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({ error, reset }) {
    useEffect(() => {
      
        console.error('Runtime Application Error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-4 py-16 text-center">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-red-100">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl text-red-600">!</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Something went wrong!</h2>
                <p className="text-slate-600 mb-8">
                    We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200"
                    >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Try again
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
