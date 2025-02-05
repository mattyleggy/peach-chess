import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
    src: [
        {
            path: "../public/fonts/Poppins-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Poppins-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-poppins",
    weight: "400 700",
});

export const metadata: Metadata = {
    title: "Custom Aussie Websites for Businesses, Tradies & Health Professionals | Go Signal",
    description:
        "Go Signal is a Brisbane based digital web developer agency that specialises in creating websites for small to medium businesses, tradies and health professionals.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
