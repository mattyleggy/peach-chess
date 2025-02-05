import { Typography } from "@/components/common/typography";
import Section from "@/components/common/section";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicy() {
    return (
        <Section variant="light" className="py-16">
            <div className="container mx-auto max-w-4xl">
                <div className="space-y-4 mb-12">
                    <Badge variant="secondary">Privacy Policy</Badge>
                    <Typography variant="h1">Privacy Policy</Typography>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="prose prose-gray max-w-none">
                    <p>Thank you for choosing our web design services. This Privacy Policy explains how we collect, use, and protect your personal information.</p>

                    <h2>Information We Collect</h2>
                    <p>We collect information that you provide directly to us, including:</p>
                    <ul>
                        <li>Name and contact information</li>
                        <li>Business details</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Website information</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>We use the collected information for:</p>
                    <ul>
                        <li>Providing our web design and development services</li>
                        <li>Communicating with you about your project</li>
                        <li>Sending important updates and notifications</li>
                        <li>Improving our services</li>
                        <li>Legal compliance</li>
                    </ul>

                    <h2>Data Security</h2>
                    <p>We implement appropriate security measures to protect your personal information. All data is stored securely in Australia, and we follow industry best practices for data protection.</p>

                    <h2>Third-Party Services</h2>
                    <p>We may use third-party services for:</p>
                    <ul>
                        <li>Website hosting</li>
                        <li>Analytics</li>
                        <li>Payment processing</li>
                        <li>Email communication</li>
                    </ul>
                    <p>These services have their own privacy policies and handling practices.</p>

                    <h2>Your Rights</h2>
                    <p>Under Australian privacy law, you have the right to:</p>
                    <ul>
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your information</li>
                        <li>Opt-out of marketing communications</li>
                    </ul>

                    <h2>Cookies</h2>
                    <p>Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>

                    <h2>Changes to This Policy</h2>
                    <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <ul>
                        <li>Email: contact@example.com</li>
                        <li>Phone: (02) XXXX XXXX</li>
                        <li>Address: Brisbane, QLD, Australia</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
} 