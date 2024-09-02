import { GetRequester } from '../../requesters/get-execute';

import { DefaultGet } from './default-get.type';

export class DefaultSDK {
	protected readonly urlPrefix = '';

	get get() {
		return new GetRequester<DefaultGet>(this.urlPrefix).execute;
	}
}
