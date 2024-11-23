// TermsOfService.tsx
import React from 'react';

export default function TermsOfService() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                    By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
                <p className="mb-4">
                    We provide [description of your services] subject to these Terms of Service. We reserve the right to modify or discontinue any service at any time.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">You must be at least 13 years old to use this service</li>
                    <li className="mb-2">You are responsible for maintaining the security of your account</li>
                    <li className="mb-2">You must not violate any applicable laws or regulations</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Privacy</h2>
                <p className="mb-4">
                    Your use of our service is also governed by our Privacy Policy. Please review our Privacy Policy, which outlines how we collect and use your information.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Limitations</h2>
                <p className="mb-4">
                    We will not be liable for any damages or losses arising from your use or inability to use our services.
                </p>
            </section>

            <footer className="mt-12 text-sm text-gray-600">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>If you have any questions about these Terms, please contact us.</p>
            </footer>
        </div>
    );
}