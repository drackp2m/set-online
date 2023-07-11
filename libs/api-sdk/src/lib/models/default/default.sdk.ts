import { GetRequester } from '../../requesters/get-execute';

import { DefaultGet } from './default-get.type';

export class DefaultSDK {
	get get() {
		return new GetRequester<DefaultGet>().execute;
	}
}
