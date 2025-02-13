import Nav from "@/components/navigation/nav";
import { Toaster } from "@/components/ui/toaster";
import { CallToAction } from "@/components/forms/call-to-action";
import { Footer } from "@/components/global/footer";
import { ContactForm } from "@/components/forms/contact-form";
import { GetStartedModal } from "@/components/modals/get-started-modal";
import { FooterDark } from "@/components/global/footer-dark";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Toaster />
            <div id="home" className="w-full">
                <main className="flex flex-col items-center">
                    <Nav />
                    {children}

                    <section id="contact" className="w-full">
                        <ContactForm variant="textureLight" />
                    </section>
                    <FooterDark />
                </main>
            </div>

            <GetStartedModal />
        </>
    );
}
