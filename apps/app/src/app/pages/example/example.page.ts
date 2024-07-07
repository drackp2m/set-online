import { JsonPipe, NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map } from 'rxjs';

import {
	GetManySubscriptionGQL,
	GetPingsGQL,
	GetPingsSubscription,
	GetUsersGQL,
} from '@set-online/apollo-definitions';

import { GlitchSvgComponent } from '../../shared/components/glitch-svg/glitch-svg.component';
import { ApiClient } from '../../shared/services/api-client.service';

import ExampleMenuComponent from './shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './example.page.html',
	styleUrl: './example.page.scss',
	imports: [ExampleMenuComponent, ReactiveFormsModule, NgIf, JsonPipe, GlitchSvgComponent],
	providers: [ApiClient, GetUsersGQL, GetManySubscriptionGQL, GetPingsGQL],
})
export default class ExamplePage {
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
			error: (error) => {
				this.data.set(error.message);
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
			error: (error) => {
				this.getManySubscription.set(error.message);
			},
		});

		this.getPingsGQL.subscribe().subscribe({
			next: (data) => {
				if (data.data) {
					this.getPings.set(data.data.getPings);
				}
			},
			error: (error) => {
				this.getPings.set(error.message);
			},
		});
	}
}
