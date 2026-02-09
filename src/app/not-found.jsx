import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-sky-50 px-4 py-16 text-center">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-sky-100">
                <h2 className="text-6xl font-bold text-teal-600 mb-4">404</h2>
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Page Not Found</h1>
                <p className="text-slate-600 mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors duration-200"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Return Home
                </Link>
            </div>
        </div>
    );
}
