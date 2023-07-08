import React from 'react';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {

    return (
        <main className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-lg mx-auto text-center">
                    <h2>Contact</h2>
                    <p className="mb-4 text-sm font-medium">Get in touch</p>
                    <p>We’d love to hear from you! Please fill out the form below.</p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}