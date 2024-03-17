import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Apollo } from 'apollo-angular';

import { AppComponent } from './app.component';
import { GetUserInfoGQL } from './graphql/apollo-operations';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CurrentUserStore } from './stores/current-user.store';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				AppComponent,
				NxWelcomeComponent,
				RouterTestingModule,
				CurrentUserStore,
				GetUserInfoGQL,
				Apollo,
			],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app).toBeTruthy();
	});

	it('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.textContent).toEqual('');
	});

	it(`should have as title 'app'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('app');
	});
});
