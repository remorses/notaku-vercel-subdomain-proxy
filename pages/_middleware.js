const { SUBDOMAIN, TARGET, FALLBACK } = process.env

if (TARGET && !TARGET.startsWith('http')) {
    TARGET = `https://${TARGET}`
}
if (FALLBACK && !FALLBACK.startsWith('http')) {
    FALLBACK = `https://${FALLBACK}`
}

export default function middleware(req) {
    const hostname = req.headers.get('host')
    const { pathname } = req.nextUrl
    const subdomain = hostname.split('.')[0]
    if (subdomain === SUBDOMAIN) {
        NextResponse.rewrite(`${TARGET}${pathname}`)
    }
    if (FALLBACK) {
        NextResponse.rewrite(`${FALLBACK}${pathname}`)
    }
}
