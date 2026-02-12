import React from 'react';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="bg-slate-100 p-6 rounded-full mb-4">
                <Settings className="w-12 h-12 text-slate-400" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Admin Settings</h1>
            <p className="text-slate-500 max-w-md">
                This module is currently under development. Soon you&apos;ll be able to configure system settings and preferences here.
            </p>
        </div>
    );
}
