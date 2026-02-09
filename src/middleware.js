import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const COOKIE_NAME = process.env.COOKIE_NAME || 'admin_session_token';
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_jwt_key_32_chars_long';

export async function middleware(request) {
    const path = request.nextUrl.pathname;

    // Only affect /admin routes
    if (path.startsWith('/admin')) {
        const cookie = request.cookies.get(COOKIE_NAME);
        let isAuthenticated = false;

        if (cookie) {
            try {
                const secret = new TextEncoder().encode(JWT_SECRET);
                await jwtVerify(cookie.value, secret);
                isAuthenticated = true;
            } catch (err) {
                // Token invalid or expired
                isAuthenticated = false;
            }
        }

        // Login page logic
        if (path === '/admin/login') {
            if (isAuthenticated) {
                return NextResponse.redirect(new URL('/admin', request.url));
            }
            return NextResponse.next();
        }

        // Protected admin routes logic
        if (!isAuthenticated) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
