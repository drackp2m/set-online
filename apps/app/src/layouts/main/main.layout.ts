import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	standalone: true,
	templateUrl: './main.layout.html',
	imports: [RouterOutlet],
})
export default class MainLayout {}
