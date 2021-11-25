import { NextRequest, NextResponse } from 'next/server'

let [SUBDOMAIN, TARGET_URL, FALLBACK_URL] = [
    process.env.SUBDOMAIN,
    process.env.TARGET_URL,
    process.env.FALLBACK_URL,
]

if (TARGET_URL && !TARGET_URL.startsWith('http')) {
    TARGET_URL = `https://${TARGET_URL}`
}
if (FALLBACK_URL && !FALLBACK_URL.startsWith('http')) {
    FALLBACK_URL = `https://${FALLBACK_URL}`
}

export function middleware(req) {
    const hostname = req.headers.get('host')
    const { pathname } = req.nextUrl
    const subdomain = hostname.split('.')[0]
    if (subdomain === SUBDOMAIN) {
        console.info(`Found subdomain, Rewriting to TARGET_URL`)
        return NextResponse.rewrite(`${TARGET_URL}${pathname}`)
    }
    if (FALLBACK_URL) {
        console.info(`Rewriting to FALLBACK_URL`)
        return NextResponse.rewrite(`${FALLBACK_URL}${pathname}`)
    }
    console.info(`Neither FALLBACK_URL or SUBDOMAIN found`)
}
