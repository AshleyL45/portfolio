import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],
})
export class Modal {
  isOpen = input<boolean>(false);
  close = output<void>();

  handleClose() {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-backdrop')) {
      this.handleClose();
    }
  }
}
