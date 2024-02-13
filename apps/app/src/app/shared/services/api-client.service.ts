import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiSDK } from '@set-online/api-sdk';

import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ApiClient extends ApiSDK {
	constructor(private readonly httpClient: HttpClient) {
		super(`${environment.apiUrl}/api`, httpClient);
	}
}
