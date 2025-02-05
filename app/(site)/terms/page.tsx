import { Typography } from "@/components/common/typography";
import Section from "@/components/common/section";

export default function TermsPage() {
    return (
        <Section variant="light" className="py-16">
            <div className="container mx-auto max-w-4xl space-y-8">
                <Typography variant="h1">Terms and Conditions</Typography>
                
                <div className="prose prose-lg">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Agreement to Terms</h2>
                    <p>By accessing and using our website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

                    <h2>2. Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on Go Signal&apos;s website for personal, non-commercial transitory viewing only.</p>

                    <h2>3. Services</h2>
                    <p>We provide web design and development services for businesses. The specific details, deliverables, and terms of these services will be outlined in separate service agreements.</p>

                    <h2>4. Payment Terms</h2>
                    <p>Payment terms and conditions for our services are as specified in individual service agreements. All fees are non-refundable unless otherwise stated in writing.</p>

                    <h2>5. Intellectual Property</h2>
                    <p>The content, features, and functionality of this website are owned by Go Signal and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>

                    <h2>6. Disclaimer</h2>
                    <p>The materials on Go Signal&apos;s website are provided on an &apos;as is&apos; basis. Go Signal makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                    <h2>7. Limitations</h2>
                    <p>In no event shall Go Signal or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Go Signal&apos;s website.</p>

                    <h2>8. Revisions and Errata</h2>
                    <p>The materials appearing on Go Signal&apos;s website could include technical, typographical, or photographic errors. Go Signal does not warrant that any of the materials on its website are accurate, complete, or current.</p>

                    <h2>9. Links</h2>
                    <p>Go Signal has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Go Signal of the site.</p>

                    <h2>10. Modifications</h2>
                    <p>Go Signal may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

                    <h2>11. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of Australia and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions about these Terms and Conditions, please contact us.</p>
                </div>
            </div>
        </Section>
    );
} 