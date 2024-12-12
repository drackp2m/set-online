import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map } from 'rxjs';

import {
	GetManySubscriptionGQL,
	GetPingsGQL,
	GetPingsSubscription,
	GetUsersGQL,
} from '@playsetonline/apollo-definitions';

import { GlitchSvgComponent } from '../../component/glitch-svg/glitch-svg.component';
import { ApiClient } from '../../service/api-client.service';

import ExampleMenuComponent from './component/menu/example-menu.component';

@Component({
	templateUrl: './example.page.html',
	styleUrl: './example.page.scss',
	imports: [JsonPipe, ExampleMenuComponent, ReactiveFormsModule, GlitchSvgComponent],
	providers: [ApiClient, GetUsersGQL, GetManySubscriptionGQL, GetPingsGQL],
})
export class ExamplePage {
	private readonly apiClient = inject(ApiClient);
	private readonly getUsersGQL = inject(GetUsersGQL);
	private readonly getManySubscriptionGQL = inject(GetManySubscriptionGQL);
	private readonly getPingsGQL = inject(GetPingsGQL);

	private readonly hello$ = this.apiClient.default.get('/hello');

	hello = toSignal<string, string>(this.hello$.pipe(map((data) => data.message)), {
		initialValue: 'An error ocurred',
	});

	data = signal<string | undefined>(undefined);
	getManySubscription = signal<string | undefined>(undefined);
	getPings = signal<GetPingsSubscription['getPings'] | undefined>(undefined);

	form = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	checkUsers(): void {
		this.getUsersGQL.fetch().subscribe({
			next: (data) => {
				this.data.set(`Now: ${data.data.getUsers.length} users.`);
			},
			error: (error: unknown) => {
				if (error instanceof Error) {
					this.data.set(error.message);
				}
			},
		});
	}

	initSubscription(): void {
		this.getManySubscriptionGQL.subscribe().subscribe({
			next: (data) => {
				if (data.data) {
					this.getManySubscription.set(data.data.getManySubscription);
				}
			},
			error: (error: unknown) => {
				if (error instanceof Error) {
					this.getManySubscription.set(error.message);
				}
			},
		});

		this.getPingsGQL.subscribe().subscribe({
			next: (data) => {
				if (data.data) {
					this.getPings.set(data.data.getPings);
				}
			},
			error: (error: unknown) => {
				console.log({ error });
				// if (error instanceof Error) {
				// 	this.getPings.set(error.message);
				// }
			},
		});
	}
}
