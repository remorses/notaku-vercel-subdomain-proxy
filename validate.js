const { SUBDOMAIN, TARGET, FALLBACK } = process.env

if (!SUBDOMAIN) {
    console.error('SUBDOMAIN env var is required')
    process.exit(1)
}
if (!TARGET) {
    console.error('TARGET env var is required')
    process.exit(1)
}
