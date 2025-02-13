import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    description:
        "Peach Chess coaching services in Toowoomba, Queensland.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${lexendDeca.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
