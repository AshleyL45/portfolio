import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/CV_Ashley_Labory.pdf';
    link.download = 'CV_Ashley_Labory.pdf';
    link.click();
  }
}
