// import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Typography } from "@/components/common/typography";
import { Logo } from "../common/logo";
import Section from "../common/section";
import Image from "next/image";
import Link from "next/link";
// const socialLinks = [
//     { icon: <FaFacebook className="w-5 h-5" />, href: "#" },
//     { icon: <FaInstagram className="w-5 h-5" />, href: "#" },
// ];

const footerLinks = {
    links: [
        { label: "Home", href: "/" },
        { label: "Lessons", href: "/lessons" },
        { label: "Pricing", href: "/pricing" },
        { label: "About Me", href: "/about" },
        { label: "Contact", href: "/contact" },
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
                <div className="flex flex-col lg:grid lg:grid-cols-3 w-full justify-between gap-8 lg:gap-4">
                    <div className="space-y-4 flex flex-col items-center lg:items-start justify-center order-1 lg:order-1">
                        <Typography variant="h4">Contact</Typography>
                        <ul className="space-y-4 text-center lg:text-left">
                            {footerLinks.contact.map((item, index) => (
                                <li key={index} className="flex flex-col gap-1 text-lg lg:text-2xl">
                                    <span className="uppercase text-xs tracking-wider opacity-70">
                                        {item.icon === "📧" ? "EMAIL" : "CALL / SMS"}
                                    </span>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4 flex flex-col items-center justify-center text-center order-3 lg:order-2">
                        <Logo size={200} className="lg:w-[300px]" />
                        <p className="text-white/80 max-w-[250px] lg:max-w-none">
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

                    <div className="space-y-4 flex flex-col items-center lg:items-end justify-center order-2 lg:order-3">
                        <Image
                            src="/images/footer-portrait.png"
                            alt="Ben Peach Image"
                            width={200}
                            height={200}
                            className="w-[150px] lg:w-[200px] h-auto"
                        />
                    </div>
                </div>

                <div className="my-10 w-full">
                    <div className="text-center lg:text-left">
                        <Typography variant="h5" className="mb-4">
                            Service Locations
                        </Typography>
                        <p className="text-white/80">
                            I&apos;m located in Toowoomba and available online across Australia, including:
                        </p>
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white/60">
                            <p>Toowoomba</p>
                            <p>Brisbane</p>
                            <p>Sydney</p>
                            <p>Melbourne</p>
                            <p>Perth</p>
                            <p>Adelaide</p>
                            <p>Darwin</p>
                            <p>Hobart</p>
                            <p>Canberra</p>
                            <p>Gold Coast</p>
                            <p>Sunshine Coast</p>
                            <p>Anywhere in Australia</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-white/10 w-full">
                    <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-8">
                        {footerLinks.links.map((link, index) => (
                            <a key={index} href={link.href} className="text-white hover:text-white">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
                        <p className="text-white/60 text-center lg:text-left">
                            © {new Date().getFullYear()} Peach Chess - ABN: 43 959 139 378
                        </p>
                        <p className="text-white/60 text-center lg:text-left">
                            Website by{" "}
                            <Link
                                href="https://www.gosignal.com.au"
                                target="_blank"
                                className="underline hover:text-white"
                            >
                                Go Signal
                            </Link>
                        </p>
                    </div>
                </div>
            </Section>
        </footer>
    );
}
