import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        // Cache optimized images for longer to reduce re-processing
        minimumCacheTTL: 60,
        // Add remote patterns if needed
        remotePatterns: [],
    },
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [
                    {
                        type: "host",
                        value: "peachchess.com.au",
                    },
                ],
                destination: "https://www.peachchess.com.au/:path*",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
