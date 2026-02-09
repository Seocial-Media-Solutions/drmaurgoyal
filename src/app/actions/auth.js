'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SignJWT } from 'jose';

const COOKIE_NAME = process.env.COOKIE_NAME || 'admin_session_token';
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_jwt_key_32_chars_long';
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '12345';

export async function login(formData) {
    const username = formData.get('username');
    const password = formData.get('password');

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Create JWT
        const secret = new TextEncoder().encode(JWT_SECRET);
        const alg = 'HS256';

        const token = await new SignJWT({ username: username, role: 'admin' })
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setExpirationTime('24h') // Token expires in 24 hours
            .sign(secret);

        // Set secure cookie with JWT
        cookies().set(COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
            sameSite: 'strict'
        });

        return { success: true };
    } else {
        return { success: false, message: 'Invalid username or password' };
    }
}

export async function logout() {
    cookies().delete(COOKIE_NAME);
    redirect('/admin/login');
}
