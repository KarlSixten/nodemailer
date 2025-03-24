import nodemailer from 'nodemailer';
import { auth } from './auth.js';
import { email } from './email.js';

const testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: auth,
});

const info = await transporter.sendMail(email);

console.log('Message sent: %s', info.messageId);