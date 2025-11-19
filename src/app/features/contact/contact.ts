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
  isSending = signal(false);
  success = signal(false);

  updateName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.name.set(target.value);
  }

  updateEmail(event: Event) {
    const target = event.target as HTMLInputElement;
    this.email.set(target.value);
  }

  updateMessage(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.message.set(target.value);
  }

  submit(event: Event) {
    event.preventDefault();

    this.isSending.set(true);
    this.success.set(false);

    const payload = {
      name: this.name(),
      email: this.email(),
      message: this.message(),
    };

    fetch('https://formspree.io/f/mnnwjgzr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        this.isSending.set(false);

        if (res.ok) {
          this.success.set(true);
          this.name.set('');
          this.email.set('');
          this.message.set('');
        } else {
          alert('Erreur : impossible d’envoyer le message.');
        }
      })
      .catch(() => {
        this.isSending.set(false);
        alert("Erreur réseau : l’envoi a échoué.");
      });
  }
}
