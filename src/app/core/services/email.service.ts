import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

/**
 * ─────────────────────────────────────────────────────────────────
 *  HOW TO SET UP (free at emailjs.com):
 *
 *  1. Sign up at https://www.emailjs.com
 *  2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID
 *  3. Create an Email Template with these variables:
 *       {{from_name}}   – sender's name
 *       {{from_email}}  – sender's email (set as Reply-To in the template)
 *       {{message}}     – their message
 *  4. Copy the Template ID
 *  5. Go to Account → copy your Public Key
 *  6. Paste the three values into the constants below
 * ─────────────────────────────────────────────────────────────────
 */
const SERVICE_ID = 'service_yo9filw'; // e.g. 'service_abc123'
const TEMPLATE_ID = 'template_14pbjg6'; // e.g. 'template_xyz789'
const PUBLIC_KEY = 'eu-6bM5owtMqAM1SE'; // e.g. 'AbCdEfGhIjKlMnOp'

@Injectable({ providedIn: 'root' })
export class EmailService {
  constructor() {
    emailjs.init({ publicKey: PUBLIC_KEY });
  }

  send(name: string, email: string, message: string): Promise<void> {
    return emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        user_name: name,
        user_email: email,
        message: message,
        reply_to: email,
      })
      .then(() => void 0);
  }
}
