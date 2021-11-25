let TARGET_URL = makeUrl(process.env.TARGET_URL)

const subPath = TARGET_URL.includes('docs-base-path.notaku.site')
    ? 'docs'
    : 'blog'

/**  @type {import('next').NextConfig} */
module.exports = {
    swcMinify: true,
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/:path*',
                    destination: `${TARGET_URL}/${subPath}/:path*`,
                },
            ],
        }
    },
}

function makeUrl(url) {
    if (!url) {
        return ''
    }
    if (!url.startsWith('http')) {
        url = `https://${url}`
    }
    const u = new URL(url)
    url = u.origin
    if (url.endsWith('/')) {
        url = url.slice(0, -1)
    }
    return url
}
