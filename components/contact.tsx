import React from 'react';
import ContactForm from '@/components/contact-form';

export default function Contact() {
  return (
    <div className='bg-zinc-800 text-white'>
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
        <div className="max-w-lg mx-auto sm:text-center">
            <h2>Contact</h2>
            <p className='subtitle'>Get in touch</p>
            <p className='mt-8'>We’d love to hear from you! Please fill out the form bellow.</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
            <ContactForm />
        </div>
    </div>

    </div>
  )
}
