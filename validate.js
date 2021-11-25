const { TARGET_URL, FALLBACK_URL } = process.env

if (!TARGET_URL) {
    console.error('TARGET_URL env var is required')
    process.exit(1)
}

if (!TARGET_URL.includes('-base-path.notaku.site')) {
    console.error(
        `TARGET_URL must be the url ending with 'base-path.notaku.site'`,
    )
    process.exit(1)
}
