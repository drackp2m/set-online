import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
	standalone: true,
	templateUrl: './main.layout.html',
	styleUrls: ['./main.layout.scss'],
	imports: [RouterOutlet, RouterModule],
})
export default class MainLayout {}
