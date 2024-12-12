import { Injectable } from '@angular/core';

import { GenericRepository } from '../generic.repository';

import { KeyValueSchema } from './definition/key-value-schema.interface';

@Injectable({
	providedIn: 'root',
})
export class KeyValueRepository extends GenericRepository<KeyValueSchema> {}
