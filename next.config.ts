import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
