import { client } from '@/lib/sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_TOKEN;

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

    const mutations = [{
      createOrReplace: {
        _key: 'contactForm',
        _type: document._type,
        firstName: document.firstName,
        lastName: document.lastName,
        email: document.email,
        phoneNumber: document.phoneNumber,
        message: document.message,
      }
    }];

    // Execute the fetch request
    fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({mutations})
    })
    .then(response => response.json())
    .then(result => {
      // Handle the result
      console.log(result);
      res.status(200).json({ message: 'Success' });
    })
    .catch(error => {
      // Handle the error
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    });
  } else {
    // If the request method is not POST, respond with a 405 Method Not Allowed status
    res.status(405).json({ message: 'Method not allowed' });
  }
}
