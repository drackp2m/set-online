import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';

import { LoginGQL } from '../graphql/apollo-operations';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	const mockLoginGQL = {
		watch: () => null,
	};

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [HttpClientModule, ApolloTestingModule],
			providers: [{ provide: LoginGQL, useValue: mockLoginGQL }],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app).toBeTruthy();
	});
});
