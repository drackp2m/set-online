import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiSDK } from '@set-online/api-sdk';

@Injectable({
	providedIn: 'root',
})
export class ApiClient extends ApiSDK {
	constructor(private readonly httpClient: HttpClient) {
		super('https://localhost:14200/api', httpClient);
	}
}
