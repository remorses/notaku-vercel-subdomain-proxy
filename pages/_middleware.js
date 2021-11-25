const { SUBDOMAIN, TARGET_URL, FALLBACK_URL } = process.env

if (TARGET_URL && !TARGET_URL.startsWith('http')) {
    TARGET_URL = `https://${TARGET_URL}`
}
if (FALLBACK_URL && !FALLBACK_URL.startsWith('http')) {
    FALLBACK_URL = `https://${FALLBACK_URL}`
}

export default function middleware(req) {
    const hostname = req.headers.get('host')
    const { pathname } = req.nextUrl
    const subdomain = hostname.split('.')[0]
    if (subdomain === SUBDOMAIN) {
        NextResponse.rewrite(`${TARGET_URL}${pathname}`)
    }
    if (FALLBACK_URL) {
        NextResponse.rewrite(`${FALLBACK_URL}${pathname}`)
    }
}
