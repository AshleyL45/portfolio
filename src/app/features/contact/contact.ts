import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = signal('');
  email = signal('');
  message = signal('');

  // ✅ on cast proprement ici
  updateName(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.name.set(target?.value ?? '');
  }

  updateEmail(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.email.set(target?.value ?? '');
  }

  updateMessage(event: Event) {
    const target = event.target as HTMLTextAreaElement | null;
    this.message.set(target?.value ?? '');
  }

  submit() {
    console.log('Form submitted:', {
      name: this.name(),
      email: this.email(),
      message: this.message(),
    });
  }
}
