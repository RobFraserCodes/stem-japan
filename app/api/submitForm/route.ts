// pages/api/submitForm.js
import { client } from '@/lib/sanity';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    // Prepare the document data
    const document = {
      _type: 'contactForm',
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    // Create the document using the Sanity client
    try {
      await client.create(document);
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error('Error submitting the form:', error);
      res.status(500).json({ message: 'An error occurred' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
