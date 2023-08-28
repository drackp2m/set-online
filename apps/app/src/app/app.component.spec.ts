import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';

import { CurrentUserStore } from '../stores/current-user.store';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [RouterOutlet, HttpClientModule, CurrentUserStore],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app).toBeTruthy();
	});
});
