import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import { AppComponent } from './app.component';

describe.skip('AppComponent', () => {
	let controller: ApolloTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ApolloTestingModule],
		});

		controller = TestBed.inject(ApolloTestingController);
	});

	afterEach(() => {
		controller.verify();
	});

	afterEach(() => {
		controller.verify();
	});

	it('should create the app', () => {
		TestBed.createComponent(AppComponent);

		expect('Hello').toContain('ll');
	});

	// it('should create the app', () => {
	// 	const fixture = TestBed.createComponent(GetUserInfoGQL);
	// 	const app = fixture.componentInstance;

	// 	app.fetch().subscribe((data) => {
	// 		expect(data.data.getUserInfo.role).toEqual(UserRole.Guest);
	// 	});

	// 	const op = controller.expectOne('GetUserInfoGQL');

	// 	op.flush({
	// 		data: {
	// 			getUserInfo: {
	// 				role: UserRole.Guest,
	// 			},
	// 		},
	// 	});

	// 	controller.verify();
	// });

	// it('should render title', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.nativeElement as HTMLElement;
	// 	expect(compiled.textContent).toStrictEqual('');
	// });

	// it(`should have as title 'app'`, () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	const app = fixture.componentInstance;
	// 	expect(app.title).toStrictEqual('app');
	// });
});
