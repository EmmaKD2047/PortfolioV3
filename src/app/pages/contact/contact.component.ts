import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  submitted = false;
  loading = false;
  error = '';

  constructor(private emailService: EmailService) {}

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.loading = true;
    this.error = '';

    this.emailService
      .send(this.form.name, this.form.email, this.form.message)
      .then(() => {
        this.submitted = true;
      })
      .catch(() => {
        this.error =
          'Something went wrong. Please try again or email me directly.';
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
