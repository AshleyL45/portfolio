import {Component, signal} from '@angular/core';
import {Modal} from '../../shared/components/modal/modal';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  imports: [Modal],
})
export class Hero {
  showModal = signal(false);

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }
}
