import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { Apollo } from 'apollo-angular';

import { CurrentUserStore } from '../stores/current-user.store';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			providers: [CurrentUserStore, Apollo],
			imports: [RouterOutlet, HttpClientModule],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app).toBeTruthy();
	});
});
