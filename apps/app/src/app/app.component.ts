import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
	selector: 'set-online-root',
  imports: [RouterOutlet],
	template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
