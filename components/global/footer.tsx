import Link from "next/link";
// import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Typography } from "@/components/common/typography";
import { Logo } from "../common/logo";
import Section from "../common/section";

// const socialLinks = [
//     { icon: <FaFacebook className="w-5 h-5" />, href: "#" },
//     { icon: <FaInstagram className="w-5 h-5" />, href: "#" },
// ];

const footerLinks = {
    links1: [
        { label: "About Us", href: "/about" },
        { label: "Our Work", href: "/work" },
        { label: "Contact Us", href: "/contact" },
    ],
    links2: [
        { label: "Services", href: "/services" },
        { label: "Pricing", href: "/pricing" },
    ],
    contact: [
        { label: "hello@gosignal.com.au", icon: "📧" },
        { label: "(07) 2115 6299", icon: "📞" },
        { label: "Brisbane, QLD", icon: "📍" },
    ],
};

interface FooterProps {
    hasCta?: boolean;
}

export function Footer({ hasCta = false }: FooterProps) {
    return (
        <footer className={`bg-background ${hasCta ? 'pt-32' : 'pt-16'} pb-16 relative w-full`}>
            <Section variant="light">
                <div className="flex flex-col md:flex-row gap-12 w-full justify-between">
                    {/* Logo and Description */}
                    <div className="space-y-4 max-w-xs">                        
                        <Logo size={200} />
                        <p className="text-muted-foreground">
                        We give your business the <span className="font-bold">go signal</span> to get online and start bringing in customers.
                        </p>
                        <div className="flex gap-4">
                            {/* {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="text-primary hover:text-primary/80"
                                >
                                    {social.icon}
                                </Link>
                            ))} */}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="space-y-4">
                        <Typography variant="h4">Who Are We?</Typography>
                        <ul className="space-y-2">
                            {footerLinks.links1.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="space-y-4">
                        <Typography variant="h4">What do we offer?</Typography>
                        <ul className="space-y-2">
                            {footerLinks.links2.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <Typography variant="h4">Contact</Typography>
                        <ul className="space-y-2">
                            {footerLinks.contact.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 text-muted-foreground"
                                >
                                    <span>{item.icon}</span>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground w-full">
                    <p>© {new Date().getFullYear()} Go Signal</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-primary">
                            Privacy
                        </Link>
                        <span>|</span>
                        <Link href="/terms" className="hover:text-primary">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </Section>
        </footer>
    );
}
