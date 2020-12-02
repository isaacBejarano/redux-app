import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title1 = 'Emitters';
  title2 = 'Redux';

  // collapse navbar-collapse on routerLink click
  ToggleNavBar(ref: HTMLButtonElement): void {
    if (ref.getAttribute('aria-expanded') === 'true') {
      ref.click();
    }
  }
}
