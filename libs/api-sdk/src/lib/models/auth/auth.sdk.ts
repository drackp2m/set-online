import { GetRequester } from '../../requesters/get-execute';
import { PostRequester } from '../../requesters/post-execute';

import { AuthGet } from './auth-get.type';
import { AuthPost } from './auth-post.type';

// FixMe => Implements to ensure urlPrefix is always set
export class AuthSDK {
	private readonly urlPrefix = '/auth';

	get get() {
		return new GetRequester<AuthGet>(this.urlPrefix).execute;
	}

	get post() {
		return new PostRequester<AuthPost>(this.urlPrefix).execute;
	}
}
