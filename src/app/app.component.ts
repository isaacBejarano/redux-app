import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title1 = 'Emitters';
  title2 = 'Redux';

  // collapse navbar-collapse on routerLink click
  ToggleNavBar(hamburger: HTMLButtonElement): void {
    if (hamburger.getAttribute('aria-expanded')) {
      hamburger.click(); // programatic DOM event
    }
    // NOTE: "area-expanded"
    // https://www.w3.org/WAI/GL/wiki/Using_aria-expanded_to_indicate_the_state_of_a_collapsible_element
  }
}
