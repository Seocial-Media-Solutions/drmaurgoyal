import React from 'react';
import { Users } from 'lucide-react';

export default function PatientsPage() {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="bg-slate-100 p-6 rounded-full mb-4">
                <Users className="w-12 h-12 text-slate-400" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Patients Management</h1>
            <p className="text-slate-500 max-w-md">
                This module is currently under development. Soon you&apos;ll be able to manage patient records and history here.
            </p>
        </div>
    );
}
