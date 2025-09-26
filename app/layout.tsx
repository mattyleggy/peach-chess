import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { VWOScript } from 'vwo-smartcode-nextjs';

const lexendDeca = localFont({
    src: [
        {
            path: "../public/fonts/lexend-deca/LexendDeca-Regular.ttf",
            weight: "400",
            style: "normal",
        },

        {
            path: "../public/fonts/lexend-deca/LexendDeca-Bold.ttf",
            weight: "700",
            style: "normal",
        },

    ],
    variable: "--font-lexend-deca",
    weight: "400 700",
});


export const metadata: Metadata = {
    title: "Peach Chess",
    description: "Peach Chess coaching services in Toowoomba, Queensland.",
    keywords: "chess coaching, chess lessons, Toowoomba chess, Queensland chess, chess tutor",
    authors: [{ name: "Peach Chess" }],
    creator: "Peach Chess",
    publisher: "Peach Chess",
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },
    metadataBase: new URL('https://www.peachchess.com.au'), 
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Peach Chess",
        description: "Peach Chess coaching services in Toowoomba, Queensland and online remotely all around Australia (Brisbane, Sydney, Melbourne, Gold Coast, Adelaide, Perth, Darwin, Sunshine Coast, Ipswich, Toowoomba)",
        url: 'https://www.peachchess.com.au', 
        siteName: "Peach Chess",
        locale: 'en_AU',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <VWOScript accountId="1147817" />
                
                {/* OpenLid Flicker-Free Mode */}
                <script 
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                            var openLidTimeout=500;!function(e,i,o,t){var n=e.createElement("style");n.id=t,n.innerHTML="body { opacity: 0; }",e.head.appendChild(n),i.restoreBodyVisibility=function(){var i=e.getElementById(t);i&&i.parentNode&&i.parentNode.removeChild(i)},setTimeout(i.restoreBodyVisibility,o)}(document,window,openLidTimeout,"openlid-noflicker-style");
                        `
                    }}
                />
                
                {/* OpenLid Tracking Code */}
                <script 
                    type="text/javascript" 
                    async 
                    src="https://ab.openlid.io/experiments.js?id=v4VdLi4rG3XIXMGiHz87NHtoDPgMFsn1"
                />
            </head>
            <body className={`${lexendDeca.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
