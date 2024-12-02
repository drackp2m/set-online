import { DBSchema } from 'idb';

import { KeyValueRepositoryKeys } from './key-value-repository-keys.enum';

export interface KeyValueSchema extends DBSchema {
	key_value: {
		key: KeyValueRepositoryKeys;
		value: { [k: string]: unknown };
	};
}
