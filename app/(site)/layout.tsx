import Nav from "@/components/navigation/nav";
import { Toaster } from "@/components/ui/toaster";
import { CallToAction } from "@/components/forms/call-to-action";
import { Footer } from "@/components/global/footer";
import { ContactForm } from "@/components/forms/contact-form";
import { GetStartedModal } from "@/components/modals/get-started-modal";

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
                        <ContactForm variant="light" />
                    </section>

                    <CallToAction overlapsFooter={true} />
                    <Footer hasCta={true} />
                </main>
            </div>

            <GetStartedModal />
        </>
    );
}
