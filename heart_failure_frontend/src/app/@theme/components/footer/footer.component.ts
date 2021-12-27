import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://www.linkedin.com/in/lor%C3%A8ne-g-704875123/" target="_blank">Lorène Gras</a></b> and <b><a href="https://www.linkedin.com/in/pierre-terrat/" target="_blank">Pierre Terrat</a></b>
    </span>
    <div class="socials">
      <a href="https://www.linkedin.com/in/lor%C3%A8ne-g-704875123/" target="_blank" class="ion ion-social-linkedin linkedin-girl"></a>
      <a href="https://www.linkedin.com/in/pierre-terrat/" target="_blank" class="ion ion-social-linkedin linkedin-boy"></a>
    </div>
  `,
})
export class FooterComponent {
}
