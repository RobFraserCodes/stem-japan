'use client'

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button, buttonVariants } from '@/components/ui/button';
import { Label } from './ui/label';
import { client } from '@/lib/sanity';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
          <div>
            <Label className="font-light text-zinc-300">First name</Label>
            <Input
              className="text-zinc-900 dark:text-zinc-200"
              type="text"
              placeholder="Heather"
              name="firstName"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label className="font-light text-zinc-300">Last name</Label>
            <Input
              className="text-zinc-900 dark:text-zinc-200"
              type="text"
              placeholder="Sakura"
              name="lastName"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <Label className="font-light text-zinc-300">Email</Label>
          <Input
            className="text-zinc-900 dark:text-zinc-200"
            type="email"
            placeholder="hello@learninjapan.co.uk"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label className="font-light text-zinc-300">Phone number</Label>
          <Input
            className="text-zinc-900 dark:text-zinc-200"
            type="number"
            placeholder="0000-0000-000"
            name="phoneNumber"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label className="font-light text-zinc-300">Message</Label>
          <Textarea
            className="text-zinc-900 dark:text-zinc-200 bg-white dark:bg-slate-950"
            placeholder="Your message or question."
            name="message"
            onChange={handleChange}
            required
          ></Textarea>
        </div>
        <Button className={buttonVariants({ variant: 'destructive' })}>
          Submit
        </Button>
      </form>
    </div>
  );
}
