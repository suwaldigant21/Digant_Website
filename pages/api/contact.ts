import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Configure your SMTP transport (replace with your credentials)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g. 'smtp.gmail.com'
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your app password
    },
  });

  try {
    await transporter.sendMail({
      from: email, // sender address (user's email)
      to: process.env.CONTACT_RECEIVER, // your receiving email
      subject: name, // subject line (user's name)
      text: message, // plain text body
      replyTo: email,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
