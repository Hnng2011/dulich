import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const response = NextResponse.next()
  const token = cookies().get('token')

  if (
    (req.nextUrl.pathname === '/admin' ||
      req.nextUrl.pathname !== '/admin/login') &&
    !token
  ) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  } else if (
    (req.nextUrl.pathname === '/admin' ||
      req.nextUrl.pathname === '/admin/dashboard' ||
      req.nextUrl.pathname === '/admin/login') &&
    token
  ) {
    return NextResponse.redirect(new URL('/admin/dashboard/tour', req.url))
  } else if (
    req.nextUrl.pathname === '/login' ||
    req.nextUrl.pathname === '/dashboard'
  ) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }

  return response
}

export const config = {
  matcher: ['/admin/:path(.*(?<!/api))*', '/login', '/dashboard'],
}
