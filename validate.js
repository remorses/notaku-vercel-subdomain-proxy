const { TARGET_URL, FALLBACK_URL } = process.env

if (!TARGET_URL) {
    console.error('TARGET_URL env var is required')
    process.exit(1)
}
