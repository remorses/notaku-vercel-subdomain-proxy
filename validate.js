const { SUBDOMAIN, TARGET_URL, FALLBACK_URL } = process.env

if (!SUBDOMAIN) {
    console.error('SUBDOMAIN env var is required')
    process.exit(1)
}
if (!TARGET_URL) {
    console.error('TARGET_URL env var is required')
    process.exit(1)
}
