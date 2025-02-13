import Link from "next/link";
// import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Typography } from "@/components/common/typography";
import { Logo } from "../common/logo";
import Section from "../common/section";
import Image from "next/image";
// const socialLinks = [
//     { icon: <FaFacebook className="w-5 h-5" />, href: "#" },
//     { icon: <FaInstagram className="w-5 h-5" />, href: "#" },
// ];

const footerLinks = {
    links: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Pricing", href: "/pricing" },
        { label: "Blog", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
    ],
    contact: [
        { label: "ben@peachchess.com.au", icon: "📧" },
        { label: "0498 549 333", icon: "📞" },
    ],
};

export function FooterDark() {
    return (
        <footer className={`bg-background relative w-full`}>
            <Section variant="default">
                <div className="grid grid-cols-3 w-full justify-between">
                    <div className="space-y-4 flex flex-col justify-center">
                        <Typography variant="h4">Contact</Typography>
                        <ul className="space-y-4">
                            {footerLinks.contact.map((item, index) => (
                                <li key={index} className="flex flex-col gap-1 text-2xl">
                                    <span className="uppercase text-xs tracking-wider opacity-70">
                                        {item.icon === "📧" ? "EMAIL" : "CALL / SMS"}
                                    </span>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4 flex flex-col items-center justify-center text-center">
                        <Logo size={300} />
                        <p className="text-white/80">
                            Bring your chess skills to the championship level
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

                    <div className="space-y-4 flex flex-col items-end justify-center">
                        <Image
                            src="/images/footer-portrait.png"
                            alt="Ben Peach Image"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm w-full">
                    <p className="text-white/60">
                        © {new Date().getFullYear()} Peach Chess - ABN: 43 959 139 378
                    </p>
                    <div className="flex gap-8">
                        {
                            footerLinks.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-white hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </Section>
        </footer>
    );
}
