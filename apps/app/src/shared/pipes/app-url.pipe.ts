import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '../../environments/environment';

@Pipe({
	name: 'appUrl',
})
export class AppUrlPipe implements PipeTransform {
	transform(value: string): string {
		return environment.app_url + value;
	}
}
