import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  name = signal('');
  email = signal('');
  message = signal('');

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

  submit(event: Event) {
    event.preventDefault();

    console.log('Formulaire envoyé (simulation) :', {
      nom: this.name(),
      email: this.email(),
      message: this.message(),
    });

    alert('Merci ! Votre message a été envoyé.');

  }
}
