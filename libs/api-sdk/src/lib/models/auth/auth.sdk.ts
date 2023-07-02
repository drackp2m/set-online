import { GetRequester } from '../../requesters/get-execute';
import { PostRequester } from '../../requesters/post-execute';

import { AuthGet } from './auth-get.type';
import { AuthPost } from './auth-post.type';

export class AuthSDK {
	get get() {
		return new GetRequester<AuthGet>().execute;
	}

	get post() {
		return new PostRequester<AuthPost>().execute;
	}
}
