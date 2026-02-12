'use server';

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { SignJWT } from 'jose';

const COOKIE_NAME = process.env.COOKIE_NAME || 'admin_session_token';
const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Validate required environment variables
if (!JWT_SECRET || !ADMIN_USERNAME || !ADMIN_PASSWORD) {
  throw new Error('Missing required environment variables for authentication');
}

export async function login(formData) {
    const username = formData.get('username');
    const password = formData.get('password');

    // Input validation
    if (!username || !password || typeof username !== 'string' || typeof password !== 'string') {
        return { success: false, message: 'Invalid input' };
    }

    // Rate limiting check (simple implementation)
    const clientIP = headers().get('x-forwarded-for') || headers().get('x-real-ip') || 'unknown';
    const rateLimitKey = `login_attempts_${clientIP}`;
    
    // In production, use Redis or database for rate limiting
    // This is a simple in-memory implementation for demonstration
    const attempts = parseInt(cookies().get(rateLimitKey)?.value || '0');
    if (attempts >= 5) {
        return { success: false, message: 'Too many login attempts. Please try again later.' };
    }

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Clear failed attempts on successful login
        cookies().delete(rateLimitKey);

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
        // Increment failed attempts
        cookies().set(rateLimitKey, (attempts + 1).toString(), {
            maxAge: 60 * 15, // 15 minutes
            path: '/'
        });
        
        return { success: false, message: 'Invalid username or password' };
    }
}

export async function logout() {
    cookies().delete(COOKIE_NAME);
    redirect('/admin/login');
}
