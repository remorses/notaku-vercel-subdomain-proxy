let TARGET_URL = process.env.TARGET_URL

if (TARGET_URL && !TARGET_URL.startsWith('http')) {
    TARGET_URL = `https://${TARGET_URL}`
}

if (TARGET_URL && TARGET_URL.endsWith('/')) {
    TARGET_URL = TARGET_URL.slice(0, -1)
}

/**  @type {import('next').NextConfig} */
module.exports = {
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/',
                destination: `${TARGET_URL}/`,
            },
            {
                source: '/:path*',
                destination: `${TARGET_URL}/:path*`,
            },
        ]
    },
}
